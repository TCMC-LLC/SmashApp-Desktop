import React, { SetStateAction, useContext } from "react";
import { Dispatch } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useHistory } from "react-router-dom";
import AppContext from "../../providers/AppContext";
import { ToastContext } from "../../providers/ToastProvider";
import { Point } from "../../types";
import { Invoice } from "../../types/invoices";
import { Route } from "../../types/routes";
import { isSuccessStatusCode } from "../../utils/Helpers";
import AppButton from "../layout/AppButton";
import AppMapbox from "../layout/AppMapbox";

interface Props {
  invoices: Invoice[];
}

interface Props2 {
  data: Invoice;
  setSelectedLocation: Dispatch<SetStateAction<Point | null>>;
}

const InvoiceMap: React.FC<Props> = ({ invoices }) => {
  const [selectedLocation, setSelectedLocation] = useState<Point | null>(null);
  const { token } = useContext(AppContext);
  const { show } = useContext(ToastContext);
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    getPoints();
  }, [invoices]);

  const getPoints = () => {
    let invoiceArr: Point[] = [];
    // routes.forEach(async (u) => {
    //   let coord: number[] = await getCoordsByAccountId(
    //     u.account_id.account_name
    //   );
    //   let point: Point = {
    //     _id: u._id,
    //     longitude: coord[0],
    //     latitude: coord[1],
    //   };
    //   ordArr.push(point);
    // });
    setPoints(invoiceArr);
  };

//   const getCoordsByAccountId = async (id: string): Promise<number[]> => {
//     let numArr: number[] = [0, 0];

//     await fetch(`${process.env.REACT_APP_TCMC_URI}/api/accountsBy`, {
//       method: "POST",
//       headers: { "Content-type": "application/json", "x-access-token": token },
//       body: JSON.stringify({ account_name: id }),
//     })
//       .then((res) => res.json())
//       .then((json) => {
//         if (isSuccessStatusCode(json.status)) {
//           numArr = json.data[0].geo_location;
//           return new Promise((resolve) => {
//             resolve(numArr);
//           });
//         } else {
//           show({ message: json.message });
//         }
//       })
//       .catch((e) => show({ message: e.message }));
//     return numArr;
//   };

  const getPopups = () => {
    return invoices.map((u: Invoice) => <AppInvoicePopup data={u} setSelectedLocation={setSelectedLocation} />)
  };

  return (
    <div style={{ height: "100%" }}>
      <AppMapbox
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        points={points}
        popup={getPopups()}
      />
    </div>
  );
};

const AppInvoicePopup: React.FC<Props2> = ({ data, setSelectedLocation }) => {
  let history = useHistory();
  const getRouteDetails = (id: string) => {
    history.push(`/invoices/invoices/${id}`);
  };

  return (
    <div
      id={data._id}
      className="app-map-popup"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="popup-image">
        <MdClose
          className="popup-close"
          size={24}
          onClick={() => setSelectedLocation(null)}
        />
      </div>

      <div className="popup-body">
        <div className="popup-col-1">
          <span>{data.invoice_id}</span>
          <h6>{data.account_id.account_name}</h6>
        </div>
        <div className="popup-col-2">
          <p style={{ margin: 0 }}>{data.invoice_date}</p>
          <div className="popup-btn">
            <AppButton
              label="Details"
              onClick={() => getRouteDetails(data._id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceMap;

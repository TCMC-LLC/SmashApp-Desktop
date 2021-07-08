import React, { useContext, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

import AppTitle from '../../components/layout/AppTitle';
import AppContext from '../../providers/AppContext';
import { Account } from '../../types/crm';
import { isSuccessStatusCode } from '../../utils/Helpers';

const AccountDetailsScreen = () => {
    const { REACT_APP_TCMC_URI } = process.env;
    let params: {id: string} = useParams(); 
    const {grpId, token} = useContext(AppContext);
    const [account, setAccount] = useState<Account>();

    useEffect(() => {
        const getAccountDetails = async () => {
            fetch(`${REACT_APP_TCMC_URI}/api/accountsBy`, {
              method: "POST",
              headers: { "Content-type": "application/json", "x-access-token": token },
              body: JSON.stringify({ group_id: grpId, _id: params.id }),
            })
              .then((res) => res.json())
              .then((json) => {
                if (isSuccessStatusCode(json.status)) {
                  setAccount(json.data[0]);
                } else {
                  // show
                }
              })
              .catch((err) => {
                  // show
              });
          };
        getAccountDetails();
      }, [grpId, token, REACT_APP_TCMC_URI, params.id]);

    return (
        <div key={account?._id}>
          <AppTitle title={`Account: ${account?.account_name}`} />   
        </div>
    );
}

export default AccountDetailsScreen;
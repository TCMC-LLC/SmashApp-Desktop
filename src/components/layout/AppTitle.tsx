import React from "react";

interface Props {
  title: string;
}

const AppTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className='app-title'>
      <div style={{borderBottomWidth: 2, borderBottomStyle: 'solid'}}>
        <h3 style={{fontWeight: 'bold', marginLeft: '2vw'}}>{title}</h3>
      </div>
    </div>
  );
};

export default AppTitle;

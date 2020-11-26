import React from 'react';

const MonitoringSystemBlock = ({title, data}) => {
  return (
    <div className="monitoringSystemBlock">
      <h4>{title}</h4>
      <p>{data.error || !data.data ? "N/A" : data.data}</p>
    </div>
  );
};

export default MonitoringSystemBlock;

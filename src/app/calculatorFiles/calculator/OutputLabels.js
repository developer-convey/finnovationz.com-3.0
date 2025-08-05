import React from 'react';

// interface KeyValuePair {
//   label: string;
//   value: number | string;
// }
// export interface CalculatorOutputProps {
//   response: {
//     intValue: number;
//     intrisicValueAfterMOs: number;
//     underOverValue: number;
//   };
// }
const Card = (props) => {
  const cardStyle = {
    width: '100%',
    height: 'auto',
    padding: '16px',
    margin: '0 8px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    background:
      'linear-gradient(129deg, rgba(49, 193, 177, 0.12) 9.8%, rgba(55, 127, 219, 0.12) 101.83%)',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    // textAlign: 'left',
    justifyContent: 'space-between',
  };


  const keyValuePairs = [
    {
      label: 'Intrinsic Value / Share',
      value: props.response?.intValue
        ? `₹${Number(props.response?.intValue).toFixed(2)}`
        : '-',
    },
    {
      label: 'Intrinsic Value after MoS',
      value: props.response?.intrisicValueAfterMOs
        ? `₹${Number(props.response?.intrisicValueAfterMOs).toFixed(2)}`
        : '-',
    },
    {
      label: 'Undervalued By / (Overvalued By)',
      value: props.response?.underOverValue
        ? `${Number(props.response?.underOverValue).toFixed(2)}%`
        : '-',
    },
  ];

  const lableSpan = {
    fontWeight: 500,
    color: '#646464',
  };
  const valueSpan = {
    fontWeight: 700,
    float: 'right',
  };
  const lastValueSpan = {
    fontWeight: 700,
    float: 'right',
    color: '#3880DC',
  };

  const lastPairStyle = {
    backgroundColor: '#FFF', // White background with reduced opacity
    borderRadius: '8px',
    padding: '8px',
    fontWeight: 700,
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  const customStyle = {
    fontWeight: 700,
    padding: '0px 0px 8px 8px',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'space-between',
  };

  return (
    <div style={cardStyle}>
      {keyValuePairs.map((pair, index) => (
        <div
          key={index}
          //   style={lastPairStyle}
          style={
            index === keyValuePairs.length - 1 ? lastPairStyle : customStyle
          }
        >
          <span style={lableSpan}>{pair.label}:</span>{' '}
          <span
            style={
              index === keyValuePairs.length - 1 ? lastValueSpan : valueSpan
            }
          >
            {pair.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Card;

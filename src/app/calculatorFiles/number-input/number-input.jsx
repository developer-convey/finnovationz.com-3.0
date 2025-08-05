import React, { useState } from 'react';
import { Form, InputNumber } from 'antd';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import style from './number-input.module.scss';

export function NumberInput(props) {
  const [value, setValue] = useState(props.value);

  const fixedStyle = {
    border: 'none',
    boxShadow: 'none',
    fontSize: '18px',
    width: '100%',
    color: '#387EDB',
    fontFamily: 'Mulish',
    fontWeight: 700,
    lineHeight: '25.1px',
  };

  return (
    <div className={props.title ? style['div-3'] : style['withoutTitle']}>
      <div className={style['text-wrapper-2']} style={{ fontFamily: 'Mulish', fontWeight: 200, fontSize: '16px', lineHeight: '16px',display:'flex' ,alignItems:'center'}}>
        {props.title}{' '}
        {props.suggestion && (
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip><h5>{props.suggestion}</h5></Tooltip>}
          >
            <img style={{height:20,width:20}} src="/i.svg" alt="i-icon" />
          </OverlayTrigger>
        )}
      </div>
    
      <div className={style['input-field']} style={props.extraFieldStyle}>
        {props.boolArrrow && <span style={{ position: 'absolute', top: 8, left: -6 }}>
          <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
        </span>}
        {props.boolArrrow && <span style={{ position: 'absolute', top: 8, left: 11 }}>
          <img src="/VectoreLine.svg" alt='vectorline' />
        </span>}
        <Form.Item
          name={props.name}
          rules={[props.boolArrrow ? { required: false } : { required: false, message: 'This field is required' }]}
          style={{ marginBottom: '0', width: '70%' }}
        >
          <InputNumber
            min={props.min}
            max={props.max}
            className={style['custom-input-number']}
            formatter={(value) => props.type === 'amount' ? `₹ ${value}`.replace(/(\d)(?=(\d{2})+(\d)(?!\d))/g, '$1,') : `${value}%`}
            style={props?.stylesInput ? props?.stylesInput : fixedStyle}
            value={value}
          />
        </Form.Item>
        <div className={style['text-wrapper-4']}>{props.sign}</div>
      </div>
    </div>
  );
}

export default NumberInput;

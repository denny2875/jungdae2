import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/MoneySlice';

const Money = () => {

  const dispatch = useDispatch();

  let [type, setType] = useState(null);
  let [price, setPrice] = useState(0);

  const handlerType = (e) => {
    setType(e.target.value);
  }

  const handlerPrice = (e) => {
    setPrice(e.target.value);
  }

  const reset = () => {
    setType(null);
    setPrice(0);
  }

  return (
    <div>
        {/* 항목 */}
        <div className='row'>
          <div>
            <label>수입</label>
            <input type='radio' name='type' value='수입' onChange={handlerType}
            checked={type==='수입'}
            ></input>
          </div>
          <div>
            <label>지출</label>
            <input type='radio' name='type' value='지출' onChange={handlerType}
            checked={type==='지출'}
            ></input>
          </div>
        </div>
        <div className='row'>
          <label>금액</label>
          <input type='number' onChange={handlerPrice} value={price}></input>
          <button onClick={()=>{
            dispatch(add({ type: type, price: price }));
            reset();
          }}>등록</button>
        </div>
    </div>
  )
}

export default Money
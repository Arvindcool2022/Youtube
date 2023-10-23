import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { BUTTON_LIST } from '../utils/contants';

const ButtonList = ({ width }) => {
  const [btnIndex, setBtnIndex] = useState(0);
  const toggleColor = index => {
    setBtnIndex(btnIndex === index ? null : index);
  };

  return (
    <ul className=" capitalize text-sm p-4 pe-6 mt-2 ">
      {BUTTON_LIST.map((btn, index) => (
        <Button
          key={btn}
          name={btn}
          isPressed={btnIndex === index}
          pressed={() => toggleColor(index)}
          screenWidth={width}
        />
      ))}
    </ul>
  );
};

export default ButtonList;

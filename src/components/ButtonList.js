import React, { useState } from 'react';
import Button from './Button';
import { BUTTON_LIST } from '../utils/contants';

const ButtonList = () => {
  const [btnIndex, setBtnIndex] = useState(0);

  const toggleColor = index => {
    setBtnIndex(btnIndex === index ? null : index);
  };
  return (
    <div className=" gap-2 mb-4 hidden sm:flex">
      {BUTTON_LIST.map((btn, index) => (
        <Button
          key={btn}
          name={btn}
          isPressed={btnIndex === index}
          pressed={() => toggleColor(index)}
        />
      ))}
    </div>
  );
};

export default ButtonList;

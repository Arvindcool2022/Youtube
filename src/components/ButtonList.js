import React, { useState } from 'react';
import Button from './Button';
import { BUTTON_LIST } from '../utils/contants';

const ButtonList = () => {
  const [btnIndex, setBtnIndex] = useState(0);

  const toggleColor = index => {
    setBtnIndex(btnIndex === index ? null : index);
  };
  return (
    <ul className=" capitalize text-sm p-4 pe-6 ">
      {BUTTON_LIST.map((btn, index) => (
        <Button
          key={btn}
          name={btn}
          isPressed={btnIndex === index}
          pressed={() => toggleColor(index)}
        />
      ))}
    </ul>
  );
};

export default ButtonList;

//   <div className="capitalize py-4 px-8 ">
//     <Link to={'/'}>
//       <p>home</p>
//     </Link>
//     <h1 className="text-xl font-semibold py-4">subcriptions</h1>
//     <ul className="">
//       <li className="cursor-pointer">music</li>
//       <li className="cursor-pointer">education</li>
//       <li className="cursor-pointer">technology</li>
//       <li className="cursor-pointer">gaming</li>
//     </ul>
//     <h1 className="text-xl font-semibold py-4">watch later</h1>
//     <ul className="">
//       <li className="cursor-pointer">music</li>
//       <li className="cursor-pointer">education</li>
//       <li className="cursor-pointer">technology</li>
//       <li className="cursor-pointer">gaming</li>
//     </ul>
//   </div>
// );

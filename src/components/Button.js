const Button = ({ name, index, pressed, isPressed }) => {
  const handleClick = i => pressed(i);

  const commonStyles =
    'px-2 py-1 rounded-lg first-letter:uppercase transition-all duration-200 ease-in-out';

  const style = isPressed
    ? `${commonStyles} bg-stone-900 text-white`
    : `${commonStyles} bg-gray-200 hover:bg-gray-300`;
  return (
    <button className={style} onClick={() => handleClick(index)}>
      {name}
    </button>
  );
};

export default Button;

const useFormatViews = num => {
  const moreThanSix = (num / 1000000).toFixed(1);
  const fiveDigits = Math.floor(num / 10000);

  const views =
    moreThanSix >= 1
      ? `${moreThanSix}m`
      : fiveDigits >= 1
      ? `${fiveDigits}k`
      : num;
  return views;
};

export default useFormatViews;

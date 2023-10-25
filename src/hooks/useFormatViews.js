const useFormatViews = num => {
  const moreThanNine = (num / 1000000000).toFixed(1);
  const moreThanSix = (num / 1000000).toFixed(1);
  const fiveDigits = Math.floor(num / 10000);

  const views =
    moreThanNine >= 1
      ? `${moreThanNine}b`
      : moreThanSix >= 1
      ? `${moreThanSix}m`
      : fiveDigits >= 1
      ? `${fiveDigits}k`
      : num;
  return views;
};

export default useFormatViews;

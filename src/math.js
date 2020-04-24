const calculateTip = (total, tipPercentage) => {
  const tip = total * tipPercentage;
  return total + tip;
};

module.exports = { 
    calculateTip 
};

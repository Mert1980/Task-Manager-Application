const calculateTip = (total, tipPercentage = .25) => total + (total * tipPercentage)

// {
//   const tip = total * tipPercentage;
//   return total + tip;
// };

module.exports = { 
    calculateTip 
};
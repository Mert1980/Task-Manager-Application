const {calculateTip, celsiusToFahrenheit, fahrenheitToCelsius} = require('../src/math')

test('Should convert 32 F to 0 C', () => {
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)
})

test('Should convert 0 C to 32 F', () => {
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)
})

test('Should calculate the tip', () => {
    const total = calculateTip(10, .3);
    expect(total).toBe(13)

    // if (total !== 13){
    //     throw new Error('Total should be 13, but got'+ total)
    // }
})

test('Should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

test('Hello World', ()=>{

})

test('This should fail', ()=>{
    throw new Error('failure!')
})

// Why tests?
// 
// - Saves time
// - Creates realible software
// - Gives flexibility to developers
//   - Refactoring
//   - Collaborating
//   - Profiling
// - Peace of mind

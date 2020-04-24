const {calculateTip} = require('../src/math')

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

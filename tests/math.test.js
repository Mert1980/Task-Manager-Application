const {calculateTip} = require('../src/math')

test('Should calculate the tip', () => {
    const total = calculateTip(10, .3);

    if (total !== 13){
        throw new Error('Total should be 13, but got'+ total)
    }
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

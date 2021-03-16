function expect(a){
  return {
      toEqual: function(b){
        if (a === b){
          console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + 'Pass')
        } else {
          console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + 'Fail')
        }
      },

      toBeAnArray: function(){
        if (a.constructor.name === "Array"){
          console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + 'Pass')
        } else {
          console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + 'Fail')
        }
      },

      toBe: function(b){
        if (a === true){
          console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + 'Pass')
        } else {
          console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + 'Fail')
        }
      }
    }
  }





function it(label, callback) {
  console.log(`Test: ${label}`)
  callback()
}

var param = false;

it('2 + 2 is equal to 4', function(){
  expect(2 + 2).toEqual(4)
})

it('2 + 5 is equal to 7', function(){
  expect(2 + 5).toEqual(4)
})

it('measures something true', function(){
  expect(param).toBe(true)
})

it('is an array', function(){
  expect([]).toBeAnArray()
})

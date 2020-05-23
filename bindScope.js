// Implement Function.prototype.bind()

/*
    const foo = function() {
        console.log(this.bar);
    }
    let baz = foo.bind({bar: 'hello'})
    baz(); // Hello
*/

Function.prototype.bind = function (context) {
  const _thisFn = this;
  return function () {
    _thisFn.call(context);
  }
}

const foo = function() {
  console.log(this.bar);
}
let baz = foo.bind({bar: 'hello'})
baz(); // Hello

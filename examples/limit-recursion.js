const { OhMyVm } = require('../index.js');

const vm = new OhMyVm();

vm.setRecursionLimit(10);

const code = Buffer.from(`
function f() {
    f();
}
f();
`);

// throws error
vm.eval(code);
const { OhMyVm } = require('../index.js');

const vm = new OhMyVm();

vm.setLoopIterationLimit(10);

const code = Buffer.from(`
while (true) {}
`);

// throws error
vm.eval(code);
const { OhMyVm } = require('../index.js');

const vm = new OhMyVm();

const code = Buffer.from(`
for (let i = 0; i < 100; i++) {
    i * 4;
}
`);

const result = vm.eval(code);
// 396
console.log(result);
const { OhMyVm } = require('../index.js');

const vm = new OhMyVm();

const code = Buffer.from(`
function main() {
    return "Hello, World!";
}

main();
`);

const result = vm.eval(code);
// "Hello, World!"
console.log(result);
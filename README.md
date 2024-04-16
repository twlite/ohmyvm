# OhMyVm

OhMyVm is a simple JavaScript virtual machine for node.js powered by [Boa](https://boajs.dev) JavaScript engine. It is meant to be used for executing untrusted code in a sandboxed environment with little to no access to the host system.

## Installation

```bash
npm install ohmyvm
```

## Usage

```javascript
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
```

## API

### `new OhMyVm()`

Creates a new instance of the virtual machine.

### `vm.eval(code: Buffer): string`

Evaluates the given code in the virtual machine and returns the result as a string. If the code throws an error, this method will throw an error as well.

### `get loopIterationLimit: number`

The current maximum number of iterations allowed in a loop.

### `setLoopIterationLimit(limit: number): void`

Sets the maximum number of iterations allowed in a loop. Setting this to a fixed number can help prevent infinite loops.

### `disableLoopIterationLimit(): void`

Disables loop iteration limit.

### `get recursionLimit: number`

The current maximum depth of recursion allowed in a function.

### `setRecursionLimit(limit: number): void`

Sets the maximum depth of recursion allowed in a function. Setting this to a fixed number can help prevent stack overflows.

### `get stackSizeLimit: number`

The current maximum stack size allowed for the virtual machine.

### `setStackSizeLimit(limit: number): void`

Sets the maximum stack size allowed for the virtual machine. Setting this to a fixed number can help prevent stack overflows.

### `setStrictMode(strict: boolean): void`

Enables or disables strict mode for the virtual machine.

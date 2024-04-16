import test from 'ava'

import { OhMyVm } from '../index.js'

const vm = new OhMyVm()

test('sum', (t) => {
  t.is(vm.eval(Buffer.from("2 + 1")), "3")
})

test('recursion limit', (t) => {
  vm.setRecursionLimit(10);
  t.is(vm.recursionLimit, 10);
})

test('recursion limit error', (t) => {
  vm.setRecursionLimit(5);
  t.throws(() => {
    vm.eval(Buffer.from("function f() { f(); } f();"));
  })
})

test('loop iteration limit', (t) => {
  vm.setLoopIterationLimit(10);
  t.is(vm.loopIterationLimit, 10);
});

test('loop iteration limit error', (t) => {
  vm.setLoopIterationLimit(5);
  t.throws(() => {
    vm.eval(Buffer.from("for (let i = 0; i < 100; i++) {}"));
  })
});

test('strict mode', (t) => {
  t.notThrows(() => {
    vm.eval(Buffer.from("a = 1;"));
  });
  vm.setStrictMode(true);
  t.throws(() => {
    vm.eval(Buffer.from("b = 1; delete b;"));
  });
});


/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export type OhMyVM = OhMyVm
export class OhMyVm {
  constructor()
  disableLoopIterationLimit(): void
  setLoopIterationLimit(limit: number): void
  get loopIterationLimit(): number
  setRecursionLimit(limit: number): void
  get recursionLimit(): number
  setStackSizeLimit(limit: number): void
  get stackSizeLimit(): number
  setStrictMode(strict: boolean): void
  eval(code: Buffer): string
}

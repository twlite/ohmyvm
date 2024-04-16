#![deny(clippy::all)]

use boa_engine::{Context, Source};
use napi::{bindgen_prelude::Buffer, Error, Result, Status};

#[macro_use]
extern crate napi_derive;

#[napi]
pub struct OhMyVM {
  ctx: Context,
}

#[napi]
impl OhMyVM {
  #[napi(constructor)]
  pub fn new() -> Self {
    Self {
      ctx: Context::default(),
    }
  }

  #[napi]
  pub fn disable_loop_iteration_limit(&mut self) -> () {
    self.ctx.runtime_limits_mut().disable_loop_iteration_limit()
  }

  #[napi]
  pub fn set_loop_iteration_limit(&mut self, limit: u32) {
    self
      .ctx
      .runtime_limits_mut()
      .set_loop_iteration_limit(limit as u64)
  }

  #[napi(getter)]
  pub fn get_loop_iteration_limit(&mut self) -> u32 {
    self.ctx.runtime_limits_mut().loop_iteration_limit() as u32
  }

  #[napi]
  pub fn set_recursion_limit(&mut self, limit: u32) {
    self
      .ctx
      .runtime_limits_mut()
      .set_recursion_limit(limit as usize)
  }

  #[napi(getter)]
  pub fn get_recursion_limit(&mut self) -> u32 {
    self.ctx.runtime_limits_mut().recursion_limit() as u32
  }

  #[napi]
  pub fn set_stack_size_limit(&mut self, limit: u32) {
    self
      .ctx
      .runtime_limits_mut()
      .set_stack_size_limit(limit as usize)
  }

  #[napi(getter)]
  pub fn get_stack_size_limit(&mut self) -> u32 {
    self.ctx.runtime_limits_mut().stack_size_limit() as u32
  }

  #[napi]
  pub fn set_strict_mode(&mut self, strict: bool) {
    self.ctx.strict(strict)
  }

  #[napi(catch_unwind)]
  pub fn eval(&mut self, code: Buffer) -> Result<String> {
    let result = self
      .ctx
      .eval(Source::from_bytes(code.as_ref()))
      .map_err(|e| Error::new(Status::GenericFailure, format!("{}", e.to_string())))?;

    let res = format!("{}", result.display());

    Ok(res)
  }
}

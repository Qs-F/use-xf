import { useState } from 'react'

type NoInfer<T> = T & { [K in keyof T]: T[K] }

export const useXf = <FuncArg, FuncReturn>(
  fn: (arg: FuncArg) => FuncReturn,
  initialValue: NoInfer<FuncArg> | (() => NoInfer<FuncArg>)
): [FuncReturn, (arg: FuncArg | (() => FuncArg)) => void] => {
  const [state, setState] = useState<FuncReturn>(
    fn(typeof initialValue === 'function' ? initialValue() : initialValue)
  )
  const setter = (arg: NoInfer<FuncArg> | (() => NoInfer<FuncArg>)) => {
    setState(fn(typeof arg === 'function' ? arg() : arg))
  }

  return [state, setter]
}

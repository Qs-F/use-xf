import { VFC, Fragment } from 'react'
import { useXf } from '@creatorqsf/use-xf'

const CounterExample: VFC = () => {
  const [state, setState] = useXf(
    (n: number): string => 'count: ' + n.toString(),
    0
  )

  return (
    <Fragment>
      <button onClick={() => setState(10)}>Make counter 10</button>
      <p>{state}</p>
    </Fragment>
  )
}

const EnglishCounterExample: VFC = () => {
  const [state, setState] = useXf((str?: string):
    | 'not number'
    | '1st'
    | '2nd'
    | '3rd'
    | `${number}th` => {
    if (!str) {
      return 'not number'
    }
    const n = parseInt(str)
    if (isNaN(n)) {
      return 'not number'
    }
    switch (n) {
      case 1:
        return '1st'
      case 2:
        return '2nd'
      case 3:
        return '3rd'
      default:
        return `${n}th`
    }
  }, '')

  return (
    <Fragment>
      <input
        type="text"
        onChange={(e) => {
          setState(e.target.value)
        }}
      />
      <p>{state}</p>
    </Fragment>
  )
}

export const App: VFC = () => (
  <Fragment>
    <h2>Counter Example with string prefix "count: "</h2>
    <CounterExample />
    <h2>English Counter Example</h2>
    <EnglishCounterExample />
  </Fragment>
)

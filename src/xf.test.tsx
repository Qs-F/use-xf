import { expect, test } from '@jest/globals'
import { renderHook, act } from '@testing-library/react-hooks/dom'
import { useXf } from '/xf'

test('basic', () => {
  const { result } = renderHook(() =>
    useXf((n: number): string => n.toString(), 0)
  )
  expect(result.current[0]).toBe('0')
})

test('basic', () => {
  const { result } = renderHook(() =>
    useXf((n: number): string => n.toString(), 0)
  )
  expect(result.current[0]).toBe('0')
  act(() => {
    result.current[1](1)
  })
  expect(result.current[0]).toBe('1')
})

test('basic', () => {
  const { result } = renderHook(() =>
    useXf((n: number): string => n.toString(), 0)
  )
  expect(result.current[0]).toBe('0')
  act(() => {
    result.current[1](() => 1)
  })
  expect(result.current[0]).toBe('1')
})

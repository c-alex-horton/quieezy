import { calcScore } from '../utils/calcScore'

test('calcScore', () => {
  expect(calcScore(3, 10)).toBe('30%')
})

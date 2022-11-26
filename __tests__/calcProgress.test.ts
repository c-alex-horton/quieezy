import calcProgress from '../utils/calcProgress'

test('calcProgress', () => {
  expect(calcProgress(3, 10)).toBe(30)
})

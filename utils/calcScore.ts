export const calcScore = (correct: number, total: number): string => {
  return `${Math.round((correct / total) * 100)}%`
}

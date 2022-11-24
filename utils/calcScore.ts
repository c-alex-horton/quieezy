// Calculate what percentage of answers were correct, return string
export const calcScore = (correct: number, total: number): string => {
  return `${Math.round((correct / total) * 100)}%`
}

// Calculate what percentage of answers were correct, return string
export const calcScore = (correct: number, total: number): string => {
  const score = Math.round((correct / total) * 100)

  if (isNaN(score)) {
    return 'N/A'
  }
  return `${score}%`
}

// calculate percetage of completed questions
const calcProgress = (current: number, total: number): number => {
  return Math.round((current / total) * 100)
}

export default calcProgress

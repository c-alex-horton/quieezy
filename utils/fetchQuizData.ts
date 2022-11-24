export const fetchQuizData = async () => {
  try {
    const res = await fetch(
      'https://opentdb.com/api.php?amount=10&category=15&type=multiple',
      {
        method: 'GET',
        headers: {},
      }
    )
    const data = await res.json()

    console.log('Fetch raw data', data)
    return data.results
  } catch (error) {
    console.log(error)
  }
}

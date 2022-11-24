// fetch data from quiz API, return json object of questions
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

    return data.results
  } catch (error) {
    console.log(error)
  }
}

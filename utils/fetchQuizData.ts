// fetch data from quiz API, return json object of questions
export const fetchQuizData = async (url: string) => {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {},
    })
    const data = await res.json()

    return data.results
  } catch (error) {
    console.log(error)
  }
}

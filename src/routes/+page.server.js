import { json } from '@sveltejs/kit'

export async function load() {
  const response = await fetch('https://jsonplaceholder.typicode.com/userszz')

  // ok: true or false
  // status: 200 (success), 404 (not found) etc
  // where is the data? body: ReadableStream
  console.log(response)

  // eg if 404, 500
  if (!response.ok) {
    console.log("couldn't get the data..")
    return { success: false }
  }

  // use the .json() method to read body: ReadableStream and parse it as JSON
  const myData = await response.json()

  console.log(myData)

  return { success: true, fetchedData: myData }
}

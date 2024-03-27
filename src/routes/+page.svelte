<script>
async function getData() {

    const response = await fetch('https://jsonplaceholder.typicode.com/userszzz')

    // ok: true or false
    // status: 200 (success), 404 (not found) etc
    // where is the data? body: ReadableStream
    // console.log(response)

    // eg if 404, 500
    if (!response.ok) {
      console.log("couldn't get the data..")
      throw new Error
    }

    // use the .json() method to read body: ReadableStream and parse it as JSON
    const data = await response.json()

    // console.log(data)
    
    return data
  }
</script>

<h3>Testing out Fetch API</h3>
{#await getData()}
<p>Loading...</p>
{:then data}

{#each data as item}
<p>{item.name}</p>
{/each}

{:catch}
<p>There was a problem getting data from the database</p>
{/await}
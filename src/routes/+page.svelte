<script>
async function getData() {

    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    // ok: true or false
    // status: 200 (success), 404 (not found) etc
    // where is the data? body: ReadableStream
    console.log(response)

    // eg if 404, 500
    if (!response.ok) {
      console.log("couldn't get the data..")
      return
    }

    // use the .json() method to read body: ReadableStream and parse it as JSON
    const data = await response.json()

    console.log(data)
    
    return data
  }


getData()
</script>

{#await getData()}
<p>Loading...</p>
{:then data}

{#each data as item}
<p>{item.name}</p>
{/each}
{/await}
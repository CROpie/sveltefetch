<script>
  export let data
  console.log("+page.svelte: ", data)
</script>

<h3>Checking out Fetch API using SSR</h3>
{#if data.success}
<ul>
  {#each data.fetchedData as item}
  <li>{item.name}</li>
  {/each}
</ul>
{:else}
<p>There was a problem getting the data from the server</p>
{/if}
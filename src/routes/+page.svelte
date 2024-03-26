<script>
  export let data
  console.log("+page.svelte: ", data)
</script>

<ul>
  {#each data.fetchedData as item}
  <li>{item.name}</li>
  {/each}
</ul>

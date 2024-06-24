<script>
  import RecordItem from "./RecordItem.svelte";
  import { recordList } from "../lib/store.js";
  import SearchRecord from "./SearchRecord.svelte";
  export let typeList;
 
  $: list = $recordList.filter((item) => item.state === typeList && item.active === true);

  $: num = list.length;
</script>

<h3 class="text-lg font-bold py-2">{num} Record {typeList}</h3>

<SearchRecord {typeList} />

{#each list  as item (item.id)}
  <RecordItem record={item} />
{:else}
  <div class="py-2">non ci sono record {typeList}</div>
{/each}

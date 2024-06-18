<script>
    import RecordItem from "./RecordItem.svelte";
    import {recordList} from "../lib/store.js";
    import SearchRecord from "./SearchRecord.svelte";

    $: num = $recordList.length;

    $: list = $recordList;
</script>

<h3 class="text-lg font-bold py-2">{num} Record da svolgere</h3>

<SearchRecord {list} />

{#each list as item (item)}
    <RecordItem record={item} />
{:else}
    <div class="py-2">non ci sono record da svolgere</div>
{/each}

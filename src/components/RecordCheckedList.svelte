<script>
    import RecordItem from "./RecordItem.svelte";
    import {recordCheckedList} from "../lib/store.js";

    $: num = $recordCheckedList.length;
</script>

<h3 class="text-lg font-bold">{num} Record già fatti</h3>
{#each $recordCheckedList as item (item)}
    <RecordItem record={item} />
{:else}
    non ci sono record già fatti
{/each}

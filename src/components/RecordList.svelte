<script>
    import RecordItem from "./RecordItem.svelte";
    import {recordList, recordCheckedList} from "../lib/store.js";
</script>

<div class="grid grid-cols-1 py-5">
    <div class="py-3">
        <h3 class="text-lg font-bold">Record da svolgere</h3>

        {#each $recordList as item (item)}
            <RecordItem record={item} />
        {:else}
            non ci sono record da svolgere
        {/each}
    </div>
    <div class="py-3">
        <h3 class="text-lg font-bold">Record già fatti</h3>
        {#each $recordCheckedList as item (item)}
            <RecordItem record={item} />
        {:else}
            non ci sono record già fatti
        {/each}
    </div>
</div>

<script>
    import {recordList, recordCheckedList} from "../lib/store.js";

    import RecordList from "./RecordList.svelte";
    import RecordCheckedList from "./RecordCheckedList.svelte";
    import RecordDeletedList from "./RecordDeletedList.svelte";

    $: numRecordList = $recordList.length;
    $: numRecordCheckedList = $recordCheckedList.length;
    $: sumRecords = numRecordList + numRecordCheckedList;
    $: missingRecords = sumRecords - numRecordList;
</script>

<div class="grid grid-cols-1 py-5">
    <div class="py-3">
        <progress
            class="progress progress-success transision-all"
            value={missingRecords}
            max={sumRecords}
        ></progress>
    </div>
    <div class="py-3">
        <RecordList />
    </div>
    <div class="py-3">
        <RecordCheckedList />
    </div>
</div>
<RecordDeletedList />

<script>
  import { recordList } from "../lib/store";
  import RecordList from "./RecordList.svelte";

  $: total = $recordList.filter((item) => item.state !== "trash").length;
  $: completed = $recordList.filter((item) => item.state === "checked").length;

  recordList;
</script>

<div class="grid grid-cols-1 py-5">
  <div class="py-3">
    <progress
      class="progress progress-success transision-all"
      value={completed}
      max={total}
    ></progress>
  </div>
  <div class="py-3">
    <RecordList typeList={"todo"} />
  </div>
  <div class="py-3">
    <RecordList typeList={"checked"} />
  </div>
  <div class="py-3">
    <RecordList typeList={"trash"} />
  </div>
</div>

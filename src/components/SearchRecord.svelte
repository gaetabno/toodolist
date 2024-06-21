<script>
// @ts-nocheck
  import { searchRecords } from "../lib/store";

  export let typeList
</script>

<input
  on:input={(e) => searchRecords(e.target.value,typeList)}
  type="text"
  placeholder="Cerca Record"
  class="input input-sm input-bordered"
/>

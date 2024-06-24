<script>
  import { recordList, addRecordToList } from "../lib/store.js";

  $: value = "";
  $: id = 0;
</script>

<form
  class="grid gap-4"
  on:submit|preventDefault={() => {
    addRecordToList(value, id);
    value = "";
    id++;
  }}
>
  <input
    type="text"
    name="record"
    bind:value
    placeholder="Inserisci Record*"
    required
    class="input input-bordered w-full"
  />
  <button type="submit" class="btn btn-outline btn-primary m-auto"
    >Aggiungi</button
  >
</form>

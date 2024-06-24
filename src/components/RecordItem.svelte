<script>
  import { handleState } from "./../lib/store.js";
  export let record; 
  let openConfirm = false;

  let { item, state } = record;

  let trash = state === "trash";
</script>
 
  <div class="form-control">
    <label class="cursor-pointer label">
      <span class="label-text" class:text-success={state === "checked"}
        >{item}</span
      >
      <div class="flex gap-2">
        {#if trash}
          <div class="tooltip" data-tip="Ripristina">
            <button
              class="checkbox p-1 bg-white"
              on:click={() => handleState(record, "todo")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M18.885 3.515C14.268-1.103 6.829-1.161 2.129 3.32L0 1.062V9h7.484L5.418 6.809c2.82-2.706 7.297-2.676 10.073.1C19.832 11.25 17.228 19.2 10 19.2V24c3.708 0 6.614-1.244 8.885-3.515 4.686-4.686 4.686-12.284 0-16.97z"
                />
              </svg>
            </button>
          </div>
          <div class="tooltip" data-tip="Elimina definitivamente">
            <button
              class="checkbox checkbox-error p-1"
              on:click={() => (openConfirm = true)}
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="var(--chkbg)"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                /></svg
              >
            </button>
          </div>
        {:else}
          <div class="tooltip" data-tip="Completa">
            <input
              type="checkbox"
              checked={state === "checked"}
              class="checkbox"
              class:checkbox-success={state === "checked"}
              on:click={() => {
                handleState(record, state === "checked" ? "todo" : "checked");
              }}
            />
          </div>
          <div class="tooltip" data-tip="Sposta nel cestino">
            <button
              class="checkbox checkbox-error p-1"
              on:click={() => handleState(record, "trash")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path
                  d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"
                  fill="var(--chkbg)"
                ></path>
              </svg>
            </button>
          </div>
        {/if}
      </div>
    </label>
  </div>

  <div class="alert" class:visible={openConfirm} class:hidden={!openConfirm}>
    <span>Sicuro di voler eliminare il record?</span>
    <div>
      <button class="btn btn-sm" on:click={() => (openConfirm = false)}
        >Annulla</button
      >
      <button
        class="btn btn-sm btn-error"
        on:click={() => handleState(record, "delete")}>Conferma</button
      >
    </div>
  </div> 

<style>
  .alert {
    justify-content: space-between;
    grid-template-columns: auto auto;
  }
</style>

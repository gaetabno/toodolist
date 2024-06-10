<script>
    import {recordList} from "../lib/store.js";

    let value;
    const addRecordToList = () => {
        $recordList = [
            ...$recordList,
            {
                item: value,
                checked: false,
            },
        ];

        value = "";
    };
</script>

<form class="grid gap-4" on:submit|preventDefault={addRecordToList}>
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

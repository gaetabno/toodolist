<script>
    export let list;

    import {createEventDispatcher} from "svelte";

    // const dispatch = createEventDispatcher();

    // function searchedText() {
    //     dispatch("list", {
    //         list,
    //     });
    // }

    $: value = "";

    $: value, handleSearch();

    const handleSearch = () => {
        list = list.filter(({item}) => value);
        console.log(list);
    };
</script>

<input
    type="text"
    bind:value
    placeholder="Cerca Record"
    class="input input-sm input-bordered"
/>

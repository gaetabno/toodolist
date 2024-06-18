<script>
    import RecordLists from "./components/RecordLists.svelte";
    import AddRecord from "./components/AddRecord.svelte";
</script>

<div class="grid justify-content-center p-10 w-full max-w-5xl m-auto">
    <h1 class="text-5xl font-bold py-6 text-center">To-Do List</h1>
    <AddRecord />
    <RecordLists />
</div>

<style>
</style>

<script>
    import {recordDeletedList} from "../lib/store";
    import RecordItem from "./RecordItem.svelte";

    let active = false;
</script>

<div class="collapse transition-all" class:overflow-visible={active}>
    <button
        class=" flex justify-self-start items-center font-bold text-lg link link-hover gap-2"
        on:click={() => (active = !active)}
    >
        Cestino
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="20"
            height="20"
            fill="oklch(0.746477 0.0216 264.436)"
            stroke="oklch(0.746477 0.0216 264.436)"
            viewBox="0 0 330 330"
            class:svg-active={active}
            class="transition-all duration-200 svg"
        >
            <path
                d="m325.606 229.393-150.004-150a14.997 14.997 0 0 0-21.213.001l-149.996 150c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.857 15.355 5.858 21.213 0l139.39-139.393 139.397 139.393A14.953 14.953 0 0 0 315 255a14.95 14.95 0 0 0 10.607-4.394c5.857-5.858 5.857-15.355-.001-21.213z"
            />
        </svg>
    </button>
    <div class="trash-content text-xl h-0 transition-all" class:h-auto={active}>
        <div class="py-3">
            {#each $recordDeletedList as item (item)}
                <RecordItem record={item} />
            {:else}
                non ci sono record eliminati
            {/each}
        </div>
    </div>
</div>

<style>
    .svg {
        transform: scale(-1);
    }
    .svg-active {
        transform: scale(1);
    }
</style>

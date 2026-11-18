<script lang="ts">
    import Tag from "./Tag.svelte";

    export let ingrediente: string;

    let selected = false;

    function handleClick() {
        selected = !selected;
    }
</script>

<button on:click={handleClick}>
    <Tag active={selected}>{ingrediente}</Tag>
</button>

<style>
    button {
        cursor: pointer;
    }
</style>

<script lang="ts">
    import Tag from "./Tag.svelte";
    import { myList } from "$lib/stores/myList";
    export let ingrediente: string;

    let selected = false;

    function handleClick() {
        selected = !selected;

        if (selected) {
            myList.addIngredient(ingrediente);
        } else {
            myList.removeIngredient(ingrediente);
        }
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

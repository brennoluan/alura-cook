<script lang="ts">
    import Tag from "../../shareds/Tag.svelte";
    import { myList } from "$lib/stores/myList";
    export let ingrediente: string;

    $: selected = $myList.includes(ingrediente);

    function handleClick() {
        if (!selected) {
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

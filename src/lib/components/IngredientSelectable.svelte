<script lang="ts">
    import Tag from "./Tag.svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher<{
        addIngredient: string;
        removeIngredient: string;
    }>();

    export let ingrediente: string;

    let selected = false;

    function handleClick() {
        selected = !selected;

        if (selected) {
            dispatch("addIngredient", ingrediente);
        } else {
            dispatch("removeIngredient", ingrediente);
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

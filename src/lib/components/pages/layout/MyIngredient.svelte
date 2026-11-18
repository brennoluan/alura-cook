<script lang="ts">
    import { fade } from "svelte/transition";
    import Tag from "$lib/components/shareds/Tag.svelte";
    import { myList } from "$lib/stores/myList";
    export let ingredient: string;

    function removeIngredient() {
        myList.removeIngredient(ingredient);
    }
</script>

<div class="my-ingredient-container" transition:fade={{ duration: 200 }}>
    <Tag active={true}>
        <button class="close" on:click={removeIngredient}></button>
        {ingredient}
    </Tag>

    <span class="remove" on:click={removeIngredient}> Remover </span>
</div>

<style>
    .my-ingredient-container {
        position: relative;
    }

    .close {
        background-image: url("icones/close.svg");
        height: 10px;
        width: 10px;
        cursor: pointer;

        position: absolute;
        top: 4px;
        right: 4px;
    }

    .remove {
        line-height: 24px;
        font-size: 0.875rem;
        color: var(--laranja);
        cursor: pointer;
    }
</style>

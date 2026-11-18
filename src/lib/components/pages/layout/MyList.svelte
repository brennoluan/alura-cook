<script lang="ts">
    import Tag from "../../shareds/Tag.svelte";
    import { myList } from "$lib/stores/myList";
    import MyIngredient from "./MyIngredient.svelte";
</script>

<section class="my-list">
    <h2>Sua lista:</h2>
    <ul class="my-list-items">
        {#each $myList as ingredient (ingredient)}
            <li>
                <MyIngredient {ingredient} />
            </li>
        {/each}
    </ul>
</section>

<style>
    .my-list {
        padding-bottom: 1.625rem;
    }

    .my-list > h2 {
        font-size: 1.5rem;
        color: var(--laranja);
        margin-bottom: 1.5rem;
        line-height: 2rem;
        font-weight: 700;
    }

    .my-list-items {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.75rem 1.875rem;
    }
</style>

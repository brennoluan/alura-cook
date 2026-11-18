<script lang="ts">
    import Tag from "./Tag.svelte";
    export let ingredients: string[];
</script>

<section class="my-list">
    <h2>Sua lista:</h2>
    <ul class="my-list-items">
        {#each ingredients as ingredient (ingredient)}
            <li><Tag active>{ingredient}</Tag></li>
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

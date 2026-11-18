<script lang="ts">
    import type ICategory from "../interfaces/ICategory";
    import Card from "./Card.svelte";
    import IngredientSelectable from "./IngredientSelectable.svelte";
    export let category: ICategory;
</script>

<Card>
    <div class="category-container">
        <img
            src={`/icones/categorias_ingredientes/${category.imagem}`}
            class="category-image"
            alt={category.nome}
        />
        <h3 class="category-name">{category.nome}</h3>

        <ul class="ingredients">
            {#each category.ingredientes as ingrediente (ingrediente)}
                <li>
                    <IngredientSelectable {ingrediente} />
                </li>
            {/each}
        </ul>
    </div>
</Card>

<style>
    .category-container {
        padding: 0.75rem 0.5rem;
    }

    .category-image {
        margin-bottom: 0.5rem;
    }

    .category-name {
        font-size: 1.125rem;
        color: var(--verde);
        margin-bottom: 0.875rem;
    }

    .ingredients {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.75rem 1rem;
    }
</style>

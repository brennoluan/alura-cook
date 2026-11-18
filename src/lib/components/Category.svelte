<script lang="ts">
    import type ICategory from "../interfaces/ICategory";
    import IngredientSelectable from "./IngredientSelectable.svelte";
    export let category: ICategory;
</script>

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
                <IngredientSelectable
                    {ingrediente}
                    on:addIngredient
                    on:removeIngredient
                />
            </li>
        {/each}
    </ul>
</div>

<style>
    .category-container {
        width: 300px;
        min-height: 100%;
        background: var(--branco);
        box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.1);
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

<script lang="ts">
    import MyList from "$lib/components/MyList.svelte";
    import Title from "$lib/components/Title.svelte";
    import Tag from "$lib/components/Tag.svelte";

    import categories from "$lib/json/categorias.json";
    import Category from "$lib/components/Category.svelte";

    import { myList } from "$lib/stores/myList";

    function addIngredient(event: CustomEvent<string>) {
        $myList = [...$myList, event.detail];
    }

    function removeIngredient(event: CustomEvent<string>) {
        $myList = $myList.filter((ingredient) => ingredient !== event.detail);
    }
</script>

<svelte:head>
    <title>Alura Cook</title>
</svelte:head>

{#if $myList.length}
    <div class="my-list-container">
        <MyList ingredients={$myList} />

        <div class="divider"></div>
    </div>
{/if}

<main>
    <Title tag="h1">Ingredientes</Title>
    <div class="info">
        <p>
            Selecione abaixo os ingredientes que você deseja usar nesta
            refeição:
        </p>
        <p>
            *Atenção: consideramos que você tenha em casa sal, pimenta e água.
        </p>
    </div>

    <ul class="categories">
        {#each categories as category (category.nome)}
            <li>
                <Category
                    {category}
                    on:addIngredient={addIngredient}
                    on:removeIngredient={removeIngredient}
                />
            </li>
        {/each}
    </ul>

    <div class="search-revenues">
        <a href="/receitas">
            <Tag active={true} size="lg">Buscar Receitas!</Tag>
        </a>
    </div>
</main>

<style>
    .my-list-container {
        margin-bottom: 2rem;
    }

    .divider {
        width: 40vw;
        height: 2px;
        background-color: var(--verde);
        margin: 0 auto;
    }

    .info {
        margin-bottom: 3.375rem;
    }

    .info > p {
        line-height: 2rem;
    }
    .categories {
        margin-bottom: 4.6875rem;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
    }

    .search-revenues {
        display: flex;
        justify-content: center;
    }
</style>

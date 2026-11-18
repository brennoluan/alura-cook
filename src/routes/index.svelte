<script lang="ts">
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
    import MyList from "$lib/components/MyList.svelte";
    import Title from "$lib/components/Title.svelte";

    import categories from "$lib/json/categorias.json";
    import Category from "$lib/components/Category.svelte";
</script>

<svelte:head>
    <title>Alura Cook</title>
</svelte:head>

<div class="container-main">
    <Header />

    <div class="style-main">
        <div class="my-list-container">
            <MyList />

            <div class="divider"></div>
        </div>

        <main>
            <Title tag="h1">Ingredientes</Title>
            <div class="info">
                <p>
                    Selecione abaixo os ingredientes que você deseja usar nesta
                    refeição:
                </p>
                <p>
                    *Atenção: consideramos que você tenha em casa sal, pimenta e
                    água.
                </p>
            </div>

            <ul class="categories">
                {#each categories as category (category.nome)}
                    <li><Category {category} /></li>
                {/each}
            </ul>
        </main>
    </div>
</div>

<style>
    .container-main {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .style-main {
        text-align: center;
        padding: 0 5vw 3.375rem;
        flex: 1;
    }

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
</style>

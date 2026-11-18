<script>
    import Title from "$lib/components/shareds/Title.svelte";
    import Revenue from "$lib/components/pages/receitas/Revenue.svelte";

    import revenues from "$lib/json/receitas.json";
    import { myList } from "$lib/stores/myList";
    import TagLink from "$lib/components/shareds/TagLink.svelte";

    $: filteredRevenues = revenues.filter((revenue) =>
        revenue.ingredientes.every((ingrediente) =>
            $myList.includes(ingrediente),
        ),
    );
</script>

<svelte:head>
    <title>Alura Cook | Receitas</title>
</svelte:head>

<main>
    <Title tag="h1">Receitas</Title>

    <div class="info">
        <p class="green">Resultados encontrados: {filteredRevenues.length}</p>

        {#if filteredRevenues.length}
            <p>
                Veja as opções de receitas que encontramos com os ingredientes
                que você tem por aí!
            </p>
        {:else}
            <p>Não encontramos nenhuma receita com os seus ingredientes :(</p>
        {/if}
    </div>

    {#if filteredRevenues.length}
        <ul class="revenues">
            {#each filteredRevenues as revenue (revenue.nome)}
                <li>
                    <Revenue {revenue} />
                </li>
            {/each}
        </ul>
    {/if}

    <div class="edit-list">
        <TagLink href="/" disabled={false}>Editar lista</TagLink>
    </div>
</main>

<style>
    .info {
        margin-bottom: 3.375rem;
    }

    .info > p {
        line-height: 2rem;
    }

    .info > p.green {
        color: var(--verde);
    }

    .revenues {
        text-align: start;
        margin-bottom: 3.75rem;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
    }

    .edit-list {
        display: flex;
        justify-content: center;
    }
</style>

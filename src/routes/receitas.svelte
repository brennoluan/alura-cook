<script>
    import Revenue from "$lib/components/Revenue.svelte";
    import Title from "$lib/components/Title.svelte";
</script>

<svelte:head>
    <title>Alura Cook | Receitas</title>
</svelte:head>

<main>
    <Title tag="h1">Receitas</Title>

    <div class="info">
        <p class="green">Resultados encontrados:</p>
        <p>
            Veja as opções de receitas que encontramos com os ingredientes que
            você tem por aí!
        </p>
    </div>

    <ul class="revenues">
        <li>
            <Revenue />
        </li>
    </ul>
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
</style>

<script lang="ts">
    import Card from "../../shareds/Card.svelte";

    import type IRevenue from "$lib/interfaces/IRevenue";

    export let revenue: IRevenue;
</script>

<Card --width="300px">
    <img
        src={`/imagens/receitas/${revenue?.imagem}`}
        alt={revenue?.nome}
        class="revenue-img"
    />

    <div class="revenue-info">
        <h3 class="revenue-name">{revenue?.nome}</h3>
    </div>
</Card>

<style>
    .revenue-img {
        width: 100%;
        height: 150px;
    }

    .revenue-name {
        font-size: 1.125rem;
    }

    .revenue-info {
        padding: 0.75rem 0.875rem;
    }
</style>

<script lang="ts">
    import Card from "./Card.svelte";
</script>

<Card>
    <img
        src="/imagens/receitas/alho_assado.png"
        alt="Alho Assado"
        class="revenue-img"
    />

    <div class="revenue-info">
        <h3 class="revenue-name">Alho Assado</h3>
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

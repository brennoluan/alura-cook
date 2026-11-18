<script lang="ts">
    export let active: boolean = false;
    export let size: "md" | "lg" = "md";
    export let disabled: boolean = false;
</script>

<div class="tag {size}" class:active class:disabled>
    <slot></slot>
</div>

<style>
    .tag {
        height: 48px;
        border-radius: 8px;
        padding: 1rem;
        text-align: center;
        color: var(--cor-texto-principal);
        background-color: var(--cinza);

        display: flex;
        justify-content: center;
        align-items: center;

        transition: 0.2s;
    }

    .active {
        color: var(--branco);
        background-color: var(--laranja);
    }

    .lg {
        font-size: 1.125rem;
        padding: 1rem 1.5rem;
    }

    .disabled {
        opacity: 0.8;
        cursor: default;
    }
</style>

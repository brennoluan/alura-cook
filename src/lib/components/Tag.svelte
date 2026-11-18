<script lang="ts">
    export let active: boolean = false;
    export let selectable: boolean = false;

    function onClick() {
        if (selectable) {
            active = !active;
        }
    }
</script>

<div class="tag" class:active on:click={onClick}>
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
    }

    .active {
        color: var(--branco);
        background-color: var(--laranja);
    }
</style>

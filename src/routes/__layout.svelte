<script lang="ts">
    import "../app.css";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
</script>

<div class="container-main">
    <Header />

    <div class="style-main">
        <slot />
    </div>
    <Footer />
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
</style>

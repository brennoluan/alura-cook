<script lang="ts">
    import "../app.css";
    import Footer from "$lib/components/pages/layout/Footer.svelte";
    import Header from "$lib/components/pages/layout/Header.svelte";
    import { myList } from "$lib/stores/myList";
    import MyList from "$lib/components/pages/layout/MyList.svelte";
</script>

<div class="container-main">
    <Header />

    <div class="style-main">
        {#if $myList.length}
            <div class="my-list-container">
                <MyList />

                <div class="divider"></div>
            </div>
        {/if}

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

    .my-list-container {
        margin-bottom: 2rem;
    }

    .divider {
        width: 40vw;
        height: 2px;
        background-color: var(--verde);
        margin: 0 auto;
    }
</style>

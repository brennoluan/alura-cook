<script lang="ts">
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
    import MyList from "$lib/components/MyList.svelte";
</script>

<svelte:head>
    <title>Alura Cook</title>
</svelte:head>

<div class="container-main">
    <Header />

    <div class="style-main">
        <div class="my-list-container">
            <MyList />
        </div>
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
</style>

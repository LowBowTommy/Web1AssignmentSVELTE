<script lang="ts">
<<<<<<< HEAD
    import '../styles/global.css';
    import favicon from '#lib/assets/favicon.svg';
=======
    import favicon from '#lib/assets/favicon.svg';
    import '../styles/global.css';
>>>>>>> 8e843858949fc7867e314c21a054c099d146874f
    import { page } from '$app/state';

    let { children } = $props();

    let title = $derived(
        page.url.pathname === '/' ? 'Home' :
        page.url.pathname === '/about' ? 'About' :
        page.url.pathname === '/content' ? 'Content' :
        page.url.pathname === '/quotes' ? 'Quotes' :
        'Page'
    );

    function myFunction() {
        document.body.classList.toggle("dark-mode");
    }
	    import { preloadData } from '$app/navigation';
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<div class="title-banner">
<<<<<<< HEAD
    <h1>{title}</h1>
    <button onclick={myFunction}>
        Toggle dark mode
    </button>
=======
    <button onclick={myFunction}>
        Toggle dark mode
    </button>

    <h1>{title}</h1>
>>>>>>> 8e843858949fc7867e314c21a054c099d146874f
</div>

<nav>
    <a href="/">Home</a> |
    <a href="/about">About</a> |
    <a href="/content">Content</a> |
    <a href="/quotes">Quotes</a>
</nav>

<main>
    {@render children()}
</main>

<footer>
    Niqolai Utanga Paehua
</footer>

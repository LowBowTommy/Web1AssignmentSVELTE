<script>
    let { data } = $props();
</script>

<h1>Welcome to the Quotes page</h1>

{#await data.quotePromise}
<<<<<<< HEAD
    <p>Loading quote...</p>

{:then quote}
    <blockquote>{quote.content}</blockquote>
    <p>— {quote.author}</p>

{:catch}
    <p>Unable to load quotes right now.</p>
=======
    <blockquote>
        {data.fallbackQuote.content}
    </blockquote>
    <p>— {data.fallbackQuote.author}</p>
    <p>Loading another quote...</p>

{:then quote}
    {#if quote}
        <blockquote>{quote.content}</blockquote>
        <p>— {quote.author}</p>
    {:else}
        <blockquote>
            {data.fallbackQuote.content}
        </blockquote>
        <p>— {data.fallbackQuote.author}</p>
        <p>Couldn't load a new quote. Showing a backup instead.</p>
    {/if}
>>>>>>> 8e843858949fc7867e314c21a054c099d146874f
{/await}
<script>
    let { data } = $props();
</script>

<h1>Welcome to the Quotes page</h1>

{#await data.quotePromise}
    <p>Loading quote...</p>

{:then quote}
    <blockquote>{quote.content}</blockquote>
    <p>— {quote.author}</p>

{:catch}
    <p>Unable to load quotes right now.</p>
{/await}
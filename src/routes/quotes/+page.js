const fallbackQuote = {
    content: "The secret of getting ahead is getting started.",
    author: "Mark Twain"
};

export function load({ fetch }) {
    const quotePromise = fetch('https://api.quotable.io/random')
        .then(async (response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch quote');
            }

            return await response.json();
        })
        .catch(() => null);

    return {
        fallbackQuote,
        quotePromise
    };
}
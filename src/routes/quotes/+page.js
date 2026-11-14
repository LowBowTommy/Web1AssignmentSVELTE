export function load({ fetch }) {
    const quotePromise = fetch('https://api.quotable.io/random')
        .then(async (response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch quote');
            }

            return await response.json();
        });

    return {
        quotePromise
    };
}
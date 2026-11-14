<<<<<<< HEAD
=======
const fallbackQuote = {
    content: "The secret of getting ahead is getting started.",
    author: "Mark Twain"
};

>>>>>>> 8e843858949fc7867e314c21a054c099d146874f
export function load({ fetch }) {
    const quotePromise = fetch('https://api.quotable.io/random')
        .then(async (response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch quote');
            }

            return await response.json();
<<<<<<< HEAD
        });

    return {
=======
        })
        .catch(() => null);

    return {
        fallbackQuote,
>>>>>>> 8e843858949fc7867e314c21a054c099d146874f
        quotePromise
    };
}
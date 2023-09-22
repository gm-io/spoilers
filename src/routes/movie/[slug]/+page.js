import {error} from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
    // const movie_id = parseInt(params.slug, 10)
    const movie_id = params.slug
    let movie_data, credits_data;

    await fetch(`../../../api/tmdb/movie/${movie_id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse response body as JSON
        })
        .then(data => {
            movie_data = data;
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });

    await fetch(`../../../api/tmdb/movie/${movie_id}/credits`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Couldn\'t fetch credits');
            }
            return response.json(); // Parse response body as JSON
        })
        .then(data => {
            credits_data = data;
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });


    if (movie_data) {
        return {...movie_data, credits: credits_data};
    }
    throw error(404, 'Not found');
}
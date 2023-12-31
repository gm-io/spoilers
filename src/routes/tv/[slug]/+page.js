import {error} from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
    // const tv_id = parseInt(params.slug, 10)
    const tv_id = params.slug
    let tmdb_response;

    await fetch(`../../../api/tmdb/tv/${tv_id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse response body as JSON
        })
        .then(data => {
            tmdb_response = data;
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });

    if (tmdb_response) {
        return tmdb_response;
    }
    throw error(404, 'Not found');
}
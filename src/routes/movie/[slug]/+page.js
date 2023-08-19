import {error} from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
    // const movie_id = parseInt(params.slug, 10)
    const movie_id = params.slug
    let tmdb_response;
    // if (params.slug === 'hello-world') {
    //     return {
    //         title: 'Hello world!',
    //         content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    //     };
    // }

    // const lotr = await fetch(`api/tmdb/search?query=${search}`)
    // const res = await lotr.json();
    //
    // const trending = await fetch(`api/tmdb/trending`)
    // const res_trending = await trending.json()

    await fetch(`../../../api/tmdb/movie/${movie_id}`)
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
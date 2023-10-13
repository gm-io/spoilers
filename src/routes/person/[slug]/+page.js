import {error} from '@sveltejs/kit';

export async function load({fetch, params}) {
    const person_id = params.slug
    let person_data;

    await fetch(`../../../api/tmdb/person/${person_id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse response body as JSON
        })
        .then(data => {
            person_data = data;
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });

    if (person_data) {
        return {data:person_data};
    }
    throw error(404, 'Not found');
}
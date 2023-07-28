import {json, error} from '@sveltejs/kit';
import { env } from '$env/dynamic/private'

// const tmdb_api_key = process.env.TMDB_API_KEY;
const tmdb_access_token = env.TMDB_ACCESS_TOKEN;

/** @type {import('./$types').RequestHandler} */
export async function GET({url}) {
    const query = url.searchParams.get('query');


    if (!query) {
        throw error(400, 'query must be specified');
    }

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${tmdb_access_token}`
        }
    };

    const data = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}`, options)
        .then(res => res.json())
        .then(data => {
            return data;
        })
    return json(data);

}


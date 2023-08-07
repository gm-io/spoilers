import {json} from '@sveltejs/kit';
import {env} from '$env/dynamic/private'

//relevant tmdb docs: https://developer.themoviedb.org/reference/trending-all

// const tmdb_api_key = process.env.TMDB_API_KEY;
const tmdb_access_token = env.TMDB_ACCESS_TOKEN;

/** @type {import('./$types').RequestHandler} */
export async function GET({url}) {


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${tmdb_access_token}`
        }
    };

    const daily = await fetch(`https://api.themoviedb.org/3/trending/all/day`, options)
        .then(res => res.json())
        .then(data => {
            return data;
        })

    const weekly = await fetch(`https://api.themoviedb.org/3/trending/all/week`, options)
        .then(res => res.json())
        .then(data => {
            return data;
        })

    const data = {
        day_trends: daily.results,
        week_trends: weekly.results,
    }
    return json(data);

}



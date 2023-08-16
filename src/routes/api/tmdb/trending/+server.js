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

    const movies_daily = await fetch(`https://api.themoviedb.org/3/trending/movie/day`, options)
        .then(res => res.json())
        .then(data => {
            return data;
        })

    const movies_weekly = await fetch(`https://api.themoviedb.org/3/trending/movie/week`, options)
        .then(res => res.json())
        .then(data => {
            return data;
        })

    const tv_daily = await fetch(`https://api.themoviedb.org/3/trending/tv/day`, options)
        .then(res => res.json())
        .then(data => {
            return data;
        })

    const tv_weekly = await fetch(`https://api.themoviedb.org/3/trending/tv/week`, options)
        .then(res => res.json())
        .then(data => {
            return data;
        })

    const data = {
        day_trends: movies_daily.results.concat(tv_daily.results),
        week_trends: movies_weekly.results.concat(tv_weekly.results),
    }
    return json(data);

}



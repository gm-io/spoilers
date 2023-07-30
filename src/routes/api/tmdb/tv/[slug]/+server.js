import {json, error} from "@sveltejs/kit";
import { env } from "$env/dynamic/private"

//relevant tmdb docs: https://developer.themoviedb.org/reference/tv-series-details

const tmdb_access_token = env.TMDB_ACCESS_TOKEN;
export async function GET({params}){

    const tv_id = params.slug;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${tmdb_access_token}`
        }
    };

    const data = await fetch(`https://api.themoviedb.org/3/tv/${tv_id}`, options)
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(err => {
            return err;
        })
    return json(data);
    }

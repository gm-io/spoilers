import {json} from "@sveltejs/kit";
import {env} from "$env/dynamic/private"

//https://developer.themoviedb.org/reference/movie-credits

const tmdb_access_token = env.TMDB_ACCESS_TOKEN;

export async function GET({params}) {

    const tv_id = params.slug;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${tmdb_access_token}`
        }
    };

    const data = await fetch(`https://api.themoviedb.org/3/tv/${tv_id}/credits`, options)
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(err => {
            return err;
        })
    return json(data);
}

import {json} from "@sveltejs/kit";
import {env} from "$env/dynamic/private"

//relevant tmdb docs: https://developer.themoviedb.org/reference/movie-details

const tmdb_access_token = env.TMDB_ACCESS_TOKEN;

export async function GET({params}) {

    const movie_id = params.slug;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${tmdb_access_token}`
        }
    };

    const main_data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}`, options)
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(err => {
            return err;
        })

    const trailer_data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, options)
        .then(res => res.json())
        .then(data => {
            return data
        })
        .catch(err => {
            return err;
        })

    return json({
        ...main_data,
        trailers: trailer_data['results'].filter(video => video['type'] === 'Trailer')
    })
}

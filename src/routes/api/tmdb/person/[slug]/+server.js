import {json} from "@sveltejs/kit";
import {env} from "$env/dynamic/private"

//relevant tmdb docs: https://developer.themoviedb.org/reference/tv-series-details

const tmdb_access_token = env.TMDB_ACCESS_TOKEN;

export async function GET({params}) {

    const person_id = params.slug;

    const options = {
        method: 'GET', headers: {
            accept: 'application/json', Authorization: `Bearer ${tmdb_access_token}`
        }
    };

    const main_data = await fetch(`https://api.themoviedb.org/3/person/${person_id}`, options)
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(err => {
            return err;
        })
    const credits_data = await fetch(`https://api.themoviedb.org/3/person/${person_id}/combined_credits`, options)
        .then(res => res.json())
        .then(data => {
            return data;
        })
    return json({...main_data, appears_in: credits_data});
}

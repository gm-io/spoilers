import {json} from "@sveltejs/kit";
import {env} from "$env/dynamic/private"

//relevant tmdb docs: https://developer.themoviedb.org/reference/tv-series-details

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


    const tv_data = await fetch(`https://api.themoviedb.org/3/tv/${tv_id}?append_to_response=similar`, options)
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(err => {
            return err;
        })

    let season_data = []
    //
    // for (let i = 1; i <= tv_data['number_of_seasons']; i++) {
    //     season_data[i - 1] = await fetch(`https://api.themoviedb.org/3/tv/${tv_id}/season/${i}`, options)
    //         .then(res => res.json())
    //         .then(data => {
    //             return data;
    //         })
    //         .catch(err => {
    //             return err;
    //         })
    // }


// Create an array of fetch promises for all seasons
    let fetchPromises = [];
    for (let i = 1; i <= tv_data['number_of_seasons']; i++) {
        let fetchPromise = fetch(`https://api.themoviedb.org/3/tv/${tv_id}/season/${i}`, options)
            .then(res => res.json())
            .catch(err => err);

        fetchPromises.push(fetchPromise);
    }

// Use Promise.all to wait for all fetch operations to complete
    season_data = await Promise.all(fetchPromises);


    return json({
        ...tv_data,
        seasons: season_data,
    });
}

import {json} from '@sveltejs/kit';
import {env} from '$env/dynamic/private'

//relevant tmdb docs: https://developer.themoviedb.org/reference/trending-all

// const tmdb_api_key = process.env.TMDB_API_KEY;
const tmdb_access_token = env.TMDB_ACCESS_TOKEN;

/** @type {import('./$types').RequestHandler} */
export async function GET() {


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${tmdb_access_token}`
        }
    };

    const movies_daily = await fetch(`https://api.themoviedb.org/3/trending/movie/day`, options)
        .then(res => res.json())
        .then(data => {
            return data;
        })

    let movies_weekly = await fetch(`https://api.themoviedb.org/3/trending/movie/week`, options)
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

    async function getMovieTrailers(movie_obj) {
        let movie_id = movie_obj['id']
        let trailers = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, options)
            .then(res => res.json())
            .then(data => {
                return data['results'].filter(video => video['type'] === 'Trailer')
            })
            .catch(err => {
                return err;
            })

        trailers = trailers.map(trailer => {
            return {
                ...trailer,
                link: `https://www.youtube.com/watch?v=${trailer['key']}`
            }
        })
        return trailers
    }

    async function getMovieTrailersForResults(results) {
        const trailersPromises = results.map(async movie => {
            const trailers = await getMovieTrailers(movie);
            return {
                ...movie,
                trailers: trailers
            };
        });

        return Promise.all(trailersPromises);
    }

    const moviesWeeklyWithTrailers = await getMovieTrailersForResults(movies_weekly.results);
    const moviesDailyWithTrailers = await getMovieTrailersForResults(movies_daily.results);

    const data = {
        day_trends: moviesDailyWithTrailers.concat(tv_daily.results),
        week_trends: moviesWeeklyWithTrailers.concat(tv_weekly.results),
    };


    console.log(data)

    return json(data);

}



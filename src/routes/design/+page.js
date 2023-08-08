// import { error } from '@sveltejs/kit';

let search = "bourne"

export async function load({fetch}) {
    
    const lotr = await fetch(`api/tmdb/search?query=${search}`)
    const res = await lotr.json();

    const trending = await fetch(`api/tmdb/trending`)
    const res_trending = await trending.json()

    let day_trends = res_trending.day_trends
    let week_trends = res_trending.week_trends



    let movies = res.results


    return {
        movies,
        day_trends,
        week_trends,
        content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    };
    // throw error(404, 'Not found');
}
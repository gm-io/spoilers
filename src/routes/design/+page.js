// import { error } from '@sveltejs/kit';

let search = "pixar"

export async function load({fetch}) {
    
    const lotr = await fetch(`api/tmdb/search?query=${search}`)
    const res = await lotr.json();

    console.log(res.results)

    let movies = res.results


    return {
        movies,
        content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    };
    // throw error(404, 'Not found');
}
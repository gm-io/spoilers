export async function load({ params,fetch }) {

    let query = params.search_slug
    const search_response = await fetch(`/api/tmdb/search?query=${query}`)
    let search_data = await search_response.json()




    return {status:"okay",query,search_data}

}
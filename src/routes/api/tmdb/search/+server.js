import {error, json} from '@sveltejs/kit';
import {env} from '$env/dynamic/private'

//relevant tmdb docs: https://developer.themoviedb.org/reference/search-multi

// const tmdb_api_key = process.env.TMDB_API_KEY;
const tmdb_access_token = env.TMDB_ACCESS_TOKEN;

/** @type {import('./$types').RequestHandler} */
export async function GET({url}) {
    const query = url.searchParams.get('query');


    if (!query) {
        throw error(400, 'query must be specified');
    }
    const options = {
        method: 'GET', headers: {
            accept: 'application/json', Authorization: `Bearer ${tmdb_access_token}`
        }
    };

    const data = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}`, options)
        .then(res => res.json())
        .then(data => {
            return data;
        })
    // return json(data);
    // return json(data.filter(item => item.media_type === 'movie' || item.media_type === 'tv'));
    return json({
        ...data, results: data.results.filter(item => !(item.media_type === 'person' || item.poster_path === null)),
    })

}

/*
EXAMPLE RESPONSE

{
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
      "id": 872585,
      "title": "Oppenheimer",
      "original_language": "en",
      "original_title": "Oppenheimer",
      "overview": "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
      "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      "media_type": "movie",
      "genre_ids": [
        18,
        36
      ],
      "popularity": 1330.42,
      "release_date": "2023-07-19",
      "video": false,
      "vote_average": 8.381,
      "vote_count": 825
    },
    {
      "adult": false,
      "backdrop_path": "/t88jqgFq6y70FesEJJG56wLKVld.jpg",
      "id": 8771,
      "name": "Oppenheimer",
      "original_language": "en",
      "original_name": "Oppenheimer",
      "overview": "This seven-part series highlights scientist J. Robert Oppenheimer from 1938 to 1953 as he develops the Atomic bomb.",
      "poster_path": "/x82Iam8GBnn7rlIQqOaN1y08Onc.jpg",
      "media_type": "tv",
      "genre_ids": [
        18,
        99
      ],
      "popularity": 15.914,
      "first_air_date": "1980-10-29",
      "vote_average": 6.6,
      "vote_count": 7,
      "origin_country": [
        "GB"
      ]
    },
    {
      "adult": false,
      "backdrop_path": "/lv606WMZ9iZpIo6o3yeIVDAEBOl.jpg",
      "id": 1149947,
      "title": "To End All War: Oppenheimer & the Atomic Bomb",
      "original_language": "en",
      "original_title": "To End All War: Oppenheimer & the Atomic Bomb",
      "overview": "Explore how one man's relentless drive and invention of the atomic bomb changed the nature of war forever, led to the deaths of hundreds of thousands of people and unleashed mass hysteria.",
      "poster_path": "/xwkYWcs8aypUtk3xDRUh0ndo4GA.jpg",
      "media_type": "movie",
      "genre_ids": [
        99,
        36
      ],
      "popularity": 290.107,
      "release_date": "2023-07-09",
      "video": false,
      "vote_average": 8.755,
      "vote_count": 55
    },

  ],
  "total_pages": 4,
  "total_results": 69
}
 */


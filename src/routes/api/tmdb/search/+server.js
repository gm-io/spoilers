import {json, error} from '@sveltejs/kit';
import { env } from '$env/dynamic/private'

//tmdb docs: https://developer.themoviedb.org/reference/search-multi

// const tmdb_api_key = process.env.TMDB_API_KEY;
const tmdb_access_token = env.TMDB_ACCESS_TOKEN;

/** @type {import('./$types').RequestHandler} */
export async function GET({url}) {
    const query = url.searchParams.get('query');


    if (!query) {
        throw error(400, 'query must be specified');
    }

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${tmdb_access_token}`
        }
    };

    const data = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}`, options)
        .then(res => res.json())
        .then(data => {
            return data;
        })
    return json(data);

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
    {
      "adult": false,
      "backdrop_path": "/t0bea3HLfxSllBdZy90UxrXl260.jpg",
      "id": 1152711,
      "title": "Inside Christopher Nolan's Oppenheimer",
      "original_language": "en",
      "original_title": "Inside Christopher Nolan's Oppenheimer",
      "overview": "A look behind the scenes of Christopher Nolan's film Oppenheimer about an American scientist and his role in the development of the atomic bomb.",
      "poster_path": "/iEQQrq61v6oAtFbJ7Ym3ie5bdKA.jpg",
      "media_type": "movie",
      "genre_ids": [
        99
      ],
      "popularity": 40.502,
      "release_date": "2023-07-15",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": null,
      "id": 384470,
      "title": "The Ballad of Oppenheimer Park",
      "original_language": "es",
      "original_title": "La balada del Oppenheimer Park",
      "overview": "The Ballad of Oppenheimer Park is a film that celebrates the everyday life of a group of Indigenous people, exiles from Canadian reserves, who, over a fleeting summer, hang out in a contested park in Vancouver. Through direct participation in the filmmaking process, the day to day becomes a ceremonial space in the ongoing confrontation against law and order.",
      "poster_path": "/x2I6MgQOpOvtWGzZZ2LktFlF5MQ.jpg",
      "media_type": "movie",
      "genre_ids": [
        99
      ],
      "popularity": 7.172,
      "release_date": "2016-03-09",
      "video": false,
      "vote_average": 6,
      "vote_count": 1
    },
    {
      "adult": false,
      "id": 24320,
      "name": "Alan Oppenheimer",
      "original_name": "Alan Oppenheimer",
      "media_type": "person",
      "popularity": 11.279,
      "gender": 2,
      "known_for_department": "Acting",
      "profile_path": "/5UAa7wSnoh6JwiAKciCCKB9dnro.jpg",
      "known_for": [
        {
          "adult": false,
          "backdrop_path": "/t4V34FTYzZl0ZMdAXAK0T7DE3ie.jpg",
          "id": 12244,
          "title": "9",
          "original_language": "en",
          "original_title": "9",
          "overview": "When 9 first comes to life, he finds himself in a post-apocalyptic world. All humans are gone, and it is only by chance that he discovers a small community of others like him taking refuge from fearsome machines that roam the earth intent on their extinction. Despite being the neophyte of the group, 9 convinces the others that hiding will do them no good.",
          "poster_path": "/3uqXGOH4BQ2CLJWkDJZ0PzbUzOn.jpg",
          "media_type": "movie",
          "genre_ids": [
            28,
            12,
            16,
            878,
            53
          ],
          "popularity": 34.231,
          "release_date": "2009-08-19",
          "video": false,
          "vote_average": 6.901,
          "vote_count": 3219
        },
        {
          "adult": false,
          "backdrop_path": "/q62bpQ67qaXY0u6b2wFEnQYIbPd.jpg",
          "id": 301528,
          "title": "Toy Story 4",
          "original_language": "en",
          "original_title": "Toy Story 4",
          "overview": "Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called \"Forky\" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.",
          "poster_path": "/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
          "media_type": "movie",
          "genre_ids": [
            10751,
            12,
            16,
            35,
            14
          ],
          "popularity": 73.935,
          "release_date": "2019-06-19",
          "video": false,
          "vote_average": 7.524,
          "vote_count": 8949
        },
        {
          "adult": false,
          "backdrop_path": "/iYGAJjtSBIhJodgvZ9k28rGtgyj.jpg",
          "id": 2362,
          "title": "Westworld",
          "original_language": "en",
          "original_title": "Westworld",
          "overview": "A robot malfunction creates havoc and terror for unsuspecting vacationers at a futuristic, adult-themed amusement park.",
          "poster_path": "/qNt29HzxwZ4jGTgSRxdA34ino9Q.jpg",
          "media_type": "movie",
          "genre_ids": [
            12,
            878,
            37
          ],
          "popularity": 20.126,
          "release_date": "1973-08-15",
          "video": false,
          "vote_average": 6.7,
          "vote_count": 1127
        }
      ]
    },
    {
      "adult": false,
      "id": 1197805,
      "name": "J. Robert Oppenheimer",
      "original_name": "J. Robert Oppenheimer",
      "media_type": "person",
      "popularity": 3.059,
      "gender": 2,
      "known_for_department": "Acting",
      "profile_path": "/9FaAqdF4LiowhOpHUhBAsnNfArS.jpg",
      "known_for": [
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
        {
          "adult": false,
          "backdrop_path": null,
          "id": 59314,
          "title": "The Day After Trinity",
          "original_language": "en",
          "original_title": "The Day After Trinity",
          "overview": "The Day After Trinity (a.k.a. The Day After Trinity: J. Robert Oppenheimer and the Atomic Bomb) is a 1980 documentary film directed and produced by Jon H. Else in association with KTEH public television in San Jose, California. The film tells the story of J. Robert Oppenheimer (1904–1967), the theoretical physicist who led the effort to build the first atomic bomb, tested in July 1945 at Trinity site in New Mexico. Featuring candid interviews with several Manhattan Project scientists, as well as newly declassified archival footage, The Day After Trinity was nominated for an Academy Award for Best Documentary Feature of 1980, and received a Peabody Award in 1981.",
          "poster_path": "/yvNoCvCe4F52KumCuoUePsw7dsN.jpg",
          "media_type": "movie",
          "genre_ids": [
            99
          ],
          "popularity": 8.783,
          "release_date": "1981-01-20",
          "video": false,
          "vote_average": 7.1,
          "vote_count": 8
        },
        {
          "adult": false,
          "backdrop_path": "/wDcf9tpfIbyQ47da81LOTNRWWwn.jpg",
          "id": 1142906,
          "title": "Oppenheimer: The Real Story",
          "original_language": "en",
          "original_title": "Oppenheimer: The Real Story",
          "overview": "J. Robert Oppenheimer, a physics professor known for creating the atomic bomb during WWII. He witnessed the first atomic bomb detonation in New Mexico in 1945. This film examines Oppenheimer's life, from his early years to his involvement with nuclear physics and his later advocacy for nuclear weapons controls, with interviews and insights from those who knew him and impacted by his legacy.",
          "poster_path": "/ecYTEmn3JBZyWbqwzjmBFfGvi3U.jpg",
          "media_type": "movie",
          "genre_ids": [
            99
          ],
          "popularity": 36.686,
          "release_date": "2023-07-17",
          "video": false,
          "vote_average": 7.6,
          "vote_count": 5
        }
      ]
    },
    {
      "adult": false,
      "backdrop_path": null,
      "id": 1156529,
      "title": "The Oppenheimer Case",
      "original_language": "sr",
      "original_title": "Slučaj Openhajmer",
      "overview": "During World War II, the American physicist Robert Oppenheimer was at the head of the research work for the production of the atomic bomb. He was removed from that position in 1953 due to disagreements with the US Atomic Commission regarding the development of the hydrogen bomb. The investigation that was conducted against him during the infamous time of anti-communist hysteria and the \"witch hunt\" during the time of Senator McCarthy is testimony to the great moral and psychological dilemma in which the scientists of that era found themselves.",
      "poster_path": null,
      "media_type": "movie",
      "genre_ids": [
        18
      ],
      "popularity": 1.4,
      "release_date": "",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "id": 232019,
      "name": "Evan Oppenheimer",
      "original_name": "Evan Oppenheimer",
      "media_type": "person",
      "popularity": 2.55,
      "gender": 2,
      "known_for_department": "Writing",
      "profile_path": null,
      "known_for": [
        {
          "adult": false,
          "backdrop_path": "/f63tvH8xi7TqPMEqu7JBKVgw6hH.jpg",
          "id": 431244,
          "title": "Lost in Florence",
          "original_language": "en",
          "original_title": "Lost in Florence",
          "overview": "Eric Lazard is a heartbroken former college football star who gets involved in a dangerous Florentine sport and a local woman, Stephanie, while visiting his cousin Anna, who lives in Italy and teaches the Italian language to foreigners.",
          "poster_path": "/dR7coGurPRpO3KuyKsQHztyVOoB.jpg",
          "media_type": "movie",
          "genre_ids": [
            12,
            18,
            10749
          ],
          "popularity": 8.669,
          "release_date": "2017-01-27",
          "video": false,
          "vote_average": 5.043,
          "vote_count": 46
        },
        {
          "adult": false,
          "backdrop_path": "/c1L67dzf8sLTPBSl6i0g6sYqzdF.jpg",
          "id": 60164,
          "title": "The Speed of Thought",
          "original_language": "en",
          "original_title": "The Speed of Thought",
          "overview": "Joshua Lazarus (Nick Stahl) is a telepath who has been raised in a NSA foster home. Lazarus helps the government by using his abilities. He is told by the agency that the telepathy is a side effect of Widmann's Disease, and that he will become insane in time and eventually die from the illness. However, Lazarus meets a woman with similar powers (Mía Maestro) who does not have any sign of the disease, launching Lazarus to confront the lies he has been told",
          "poster_path": "/iesdeGm2Honb13C6HrchbajnbS.jpg",
          "media_type": "movie",
          "genre_ids": [
            28,
            53,
            878
          ],
          "popularity": 3.236,
          "release_date": "2011-04-29",
          "video": false,
          "vote_average": 4.8,
          "vote_count": 34
        },
        {
          "adult": false,
          "backdrop_path": "/yg5lI9MEac8xhujf632C5Mr3hoY.jpg",
          "id": 310952,
          "title": "A Little Game",
          "original_language": "en",
          "original_title": "A Little Game",
          "overview": "Ostracized at her posh new uptown school and shaken by the death of her beloved grandmother, a 10 year-old downtown girl finds an unlikely mentor in the form of an irascible chess-master, who uses the game to teach Max lessons in resilience, perseverance, and how to embrace inevitable change.",
          "poster_path": "/v8Rs4xpUppakdZRWcAAqtqOIEu.jpg",
          "media_type": "movie",
          "genre_ids": [
            10751,
            12
          ],
          "popularity": 5.59,
          "release_date": "2014-04-26",
          "video": false,
          "vote_average": 6.6,
          "vote_count": 29
        }
      ]
    },
    {
      "adult": false,
      "backdrop_path": null,
      "id": 1143770,
      "title": "Oppenheimer After Trinity",
      "original_language": "en",
      "original_title": "Oppenheimer After Trinity",
      "overview": "This captivating documentary on J. Robert Oppenheimer, the architect of the atomic bomb, explores his journey before the historic test and reveals the burden he carried after. De-classified documents, rare film footage and exclusive interviews, including Oppenheimer's grandson, show an intimate exploration of the burden Oppenheimer carried and the profound global impact still being debated today.",
      "poster_path": "/6Mq4O6RyKXWnXOhor71qzV92n7n.jpg",
      "media_type": "movie",
      "genre_ids": [
        99
      ],
      "popularity": 18.28,
      "release_date": "2023-04-22",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": null,
      "id": 401783,
      "title": "The Trials of J. Robert Oppenheimer",
      "original_language": "en",
      "original_title": "The Trials of J. Robert Oppenheimer",
      "overview": "J. Robert Oppenheimer was a national hero, the brilliant scientist who during WWII led the scientific team that created the atomic bomb. But after the bomb brought the war to an end, in spite of his renown and his enormous achievement, America turned on him - humiliated and cast him aside. The question the film asks is, \"Why?\"",
      "poster_path": "/nw2snwOxddwZRhDL1cW9q3Lr9Gt.jpg",
      "media_type": "movie",
      "genre_ids": [
        99,
        36
      ],
      "popularity": 15.362,
      "release_date": "2008-03-24",
      "video": false,
      "vote_average": 4.4,
      "vote_count": 4
    },
    {
      "adult": false,
      "id": 53296,
      "name": "Joshua Oppenheimer",
      "original_name": "Joshua Oppenheimer",
      "media_type": "person",
      "popularity": 1.504,
      "gender": 2,
      "known_for_department": "Directing",
      "profile_path": "/dHlrnmh2X0xZYmEfEwcsLTuarAD.jpg",
      "known_for": [
        {
          "adult": false,
          "backdrop_path": "/1jLaJPdu7dMl0Nk3vLuafDx9PWS.jpg",
          "id": 123678,
          "title": "The Act of Killing",
          "original_language": "id",
          "original_title": "Jagal",
          "overview": "Filmmakers expose the horrifying mass executions of accused communists in Indonesia and those who are celebrated in their country for perpetrating the crime.",
          "poster_path": "/wg9QERtcZTTcOu6La3nZCfJUMHG.jpg",
          "media_type": "movie",
          "genre_ids": [
            99
          ],
          "popularity": 9.847,
          "release_date": "2012-11-01",
          "video": false,
          "vote_average": 7.688,
          "vote_count": 605
        },
        {
          "adult": false,
          "backdrop_path": "/eozLsgdW5VyUEdPDuDaBD4VB86o.jpg",
          "id": 267480,
          "title": "The Look of Silence",
          "original_language": "en",
          "original_title": "The Look of Silence",
          "overview": "A family that survives the genocide in Indonesia confronts the men who killed one of their brothers.",
          "poster_path": "/7TakQLT8gyzIMG8hX8RLTd5qROQ.jpg",
          "media_type": "movie",
          "genre_ids": [
            36,
            99
          ],
          "popularity": 7.035,
          "release_date": "2014-08-30",
          "video": false,
          "vote_average": 7.862,
          "vote_count": 247
        },
        {
          "adult": false,
          "backdrop_path": null,
          "id": 339139,
          "title": "The Entire History of the Louisiana Purchase",
          "original_language": "en",
          "original_title": "The Entire History of the Louisiana Purchase",
          "overview": "A kaleidoscopic history of the American heartland, nuclear weapons and the Native American genocide.",
          "poster_path": "/5EGGY96Qq7t0r2WVhq3ISUPI9XQ.jpg",
          "media_type": "movie",
          "genre_ids": [
            36
          ],
          "popularity": 0.6,
          "release_date": "1998-10-08",
          "video": false,
          "vote_average": 4.6,
          "vote_count": 5
        }
      ]
    },
    {
      "adult": false,
      "id": 1679903,
      "name": "Randy Oppenheimer",
      "original_name": "Randy Oppenheimer",
      "media_type": "person",
      "popularity": 1.977,
      "gender": 2,
      "known_for_department": "Acting",
      "profile_path": "/bz1mtLDBFmnHubdC6qrWNlGMoLi.jpg",
      "known_for": [
        {
          "adult": false,
          "backdrop_path": "/3EnOccKeaVp7YCZ2kQnFlFzfWWY.jpg",
          "id": 230619,
          "title": "Lizzie Borden's Revenge",
          "original_language": "en",
          "original_title": "Lizzie Borden's Revenge",
          "overview": "A group of sorority girls are having a slumber party at their house. One of the new sorority girls is Leslie Borden, a descendant of the infamous Lizzie Borden family. They believe that they are holding a harmless séance to conjure the ghost of Lizzie. But they get locked in the house with an evil, vengeful spirit as Lizzie Borden returns to wreak havoc with her axe. One by one, the girls are murdered as they try to figure out how to put an end to the return of Lizzie Borden.",
          "poster_path": "/t6UjPRwfB6DqfFPEIr6gpHzZKqb.jpg",
          "media_type": "movie",
          "genre_ids": [
            27
          ],
          "popularity": 5.013,
          "release_date": "2013-10-18",
          "video": false,
          "vote_average": 1.9,
          "vote_count": 16
        },
        {
          "adult": false,
          "backdrop_path": null,
          "id": 39700,
          "title": "Blood Moon Rising",
          "original_language": "en",
          "original_title": "Blood Moon Rising",
          "overview": "The Devil's daughter rises from the grave, bringing with her zombies, werewolves, vampires and the armies of Hell to destroy Earth. Mankind's only hope for salvation lies in a young hippie girl and a comic book geek.",
          "poster_path": "/i6YBg6dOT1gYfkmCzhpLAldrrtv.jpg",
          "media_type": "movie",
          "genre_ids": [
            27,
            35
          ],
          "popularity": 1.342,
          "release_date": "2009-11-24",
          "video": false,
          "vote_average": 4.4,
          "vote_count": 6
        },
        {
          "adult": false,
          "backdrop_path": null,
          "id": 203039,
          "title": "Snake Club: Revenge of the Snake Woman",
          "original_language": "en",
          "original_title": "Snake Club: Revenge of the Snake Woman",
          "overview": "An ancient legend tells of Lamia a beautiful queen and adulteress.... Her lover was put to death and she was transformed into a snake, roaming the earth on her belly, she murders and enslaves the innocent until the gods turn her to into a stone statue... She now waits for her time to return...",
          "poster_path": "/tELhDQGweL3B1KBJMuZyqpwreET.jpg",
          "media_type": "movie",
          "genre_ids": [
            27,
            14
          ],
          "popularity": 3.209,
          "release_date": "2013-02-28",
          "video": false,
          "vote_average": 4.7,
          "vote_count": 9
        }
      ]
    },
    {
      "adult": false,
      "id": 228228,
      "name": "Toby Oppenheimer",
      "original_name": "Toby Oppenheimer",
      "media_type": "person",
      "popularity": 1.739,
      "gender": 0,
      "known_for_department": "Directing",
      "profile_path": null,
      "known_for": [
        {
          "adult": false,
          "backdrop_path": "/jjNoYDccWdQBOtKfW92NPVda4Ia.jpg",
          "id": 390393,
          "title": "Check It",
          "original_language": "en",
          "original_title": "Check It",
          "overview": "Fed up with being pushed around, a group of gay and trans teens of color form a gang and fight back on the brutal streets of Washington D.C. They call their gang ‘Check it’ and this group of one-time victims of bullying, rape and abuse have turned the tables on anyone trying to hurt them. The group formed to provide its members safety in numbers and let people know that if they jump a queer kid in D.C., they may get beaten into a coma. This raw and intimate portrait follows three childhood friends as they struggle to survive and claw their way out of gang life through an unlikely avenue: fashion.",
          "poster_path": "/kGwxXqHg3n3vGkzz0QGmesPVx7K.jpg",
          "media_type": "movie",
          "genre_ids": [
            99
          ],
          "popularity": 0.845,
          "release_date": "2016-04-16",
          "video": false,
          "vote_average": 5,
          "vote_count": 7
        },
        {
          "adult": false,
          "backdrop_path": null,
          "id": 101877,
          "title": "The Nine Lives of Marion Barry",
          "original_language": "en",
          "original_title": "The Nine Lives of Marion Barry",
          "overview": "Many people remember Marion Barry as the philandering drug-addled mayor of the nation's capital. He's the poster boy for corruption, a pariah. Yet to others, Marion Barry is a folk hero who has dominated Washington D.C. city politics for over 40 years. Today, Barry is once again in the political limelight. Who is Marion Barry, really? A hero? A scoundrel?",
          "poster_path": null,
          "media_type": "movie",
          "genre_ids": [
            99
          ],
          "popularity": 0.826,
          "release_date": "2009-06-21",
          "video": false,
          "vote_average": 5.6,
          "vote_count": 4
        },
        {
          "adult": false,
          "backdrop_path": "/eKHou6kdL01Etrjcmj5IbiZzM1T.jpg",
          "id": 728921,
          "title": "On the Trail: Inside the 2020 Primaries",
          "original_language": "en",
          "original_title": "On the Trail: Inside the 2020 Primaries",
          "overview": "CNN's team of female journalists and embeds pack up and leave their families to fan out across the country and report on the president and his would-be rivals as the candidates launch campaigns and contend for voters.",
          "poster_path": "/yf8K70yw3rxtG5oeU6Ap6wC4EHt.jpg",
          "media_type": "movie",
          "genre_ids": [
            99
          ],
          "popularity": 2.441,
          "release_date": "2020-08-06",
          "video": false,
          "vote_average": 5.7,
          "vote_count": 3
        }
      ]
    },
    {
      "adult": false,
      "backdrop_path": "/wDcf9tpfIbyQ47da81LOTNRWWwn.jpg",
      "id": 1142906,
      "title": "Oppenheimer: The Real Story",
      "original_language": "en",
      "original_title": "Oppenheimer: The Real Story",
      "overview": "J. Robert Oppenheimer, a physics professor known for creating the atomic bomb during WWII. He witnessed the first atomic bomb detonation in New Mexico in 1945. This film examines Oppenheimer's life, from his early years to his involvement with nuclear physics and his later advocacy for nuclear weapons controls, with interviews and insights from those who knew him and impacted by his legacy.",
      "poster_path": "/ecYTEmn3JBZyWbqwzjmBFfGvi3U.jpg",
      "media_type": "movie",
      "genre_ids": [
        99
      ],
      "popularity": 36.686,
      "release_date": "2023-07-17",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 5
    },
    {
      "adult": false,
      "id": 1023389,
      "name": "Meaghan Oppenheimer",
      "original_name": "Meaghan Oppenheimer",
      "media_type": "person",
      "popularity": 1.891,
      "gender": 0,
      "known_for_department": "Writing",
      "profile_path": "/b5jt0M5eIS271Vnb0fA7XTuycry.jpg",
      "known_for": [
        {
          "adult": false,
          "backdrop_path": "/vUzBwKNDgy5wf3keQUVWU2eWBVQ.jpg",
          "id": 62286,
          "name": "Fear the Walking Dead",
          "original_language": "en",
          "original_name": "Fear the Walking Dead",
          "overview": "What did the world look like as it was transforming into the horrifying apocalypse depicted in \"The Walking Dead\"? This spin-off set in Los Angeles, following new characters as they face the beginning of the end of the world, will answer that question.",
          "poster_path": "/sQleNHhKl32QFnSlahb5IHDWcDq.jpg",
          "media_type": "tv",
          "genre_ids": [
            10759,
            18
          ],
          "popularity": 296.727,
          "first_air_date": "2015-08-23",
          "vote_average": 7.7,
          "vote_count": 4537,
          "origin_country": [
            "US"
          ]
        },
        {
          "adult": false,
          "backdrop_path": "/pLEaJ0zGXxkSLmACjDh2owdari1.jpg",
          "id": 301351,
          "title": "We Are Your Friends",
          "original_language": "en",
          "original_title": "We Are Your Friends",
          "overview": "Young Cole Carter dreams of hitting the big time as a Hollywood disc jockey, spending his days and nights hanging with buddies and working on the one track that will set the world on fire. Opportunity comes knocking when he meets James Reed, a charismatic DJ who takes the 23-year-old under his wing. Soon, his seemingly clear path to success gets complicated when he starts falling for his mentor's girlfriend, jeopardizing his new friendship and the future he seems destined to fulfill.",
          "poster_path": "/k8SfiPoh3zUkDpHOT22ATegS2FU.jpg",
          "media_type": "movie",
          "genre_ids": [
            18,
            10402,
            10749,
            35
          ],
          "popularity": 23.958,
          "release_date": "2015-08-26",
          "video": false,
          "vote_average": 6.728,
          "vote_count": 2147
        },
        {
          "adult": false,
          "backdrop_path": "/uVe8fWCLMqIhgMTI9maIUncfZAP.jpg",
          "id": 130464,
          "name": "Tell Me Lies",
          "original_language": "en",
          "original_name": "Tell Me Lies",
          "overview": "When Lucy Albright arrives on the campus of her small college, away from her mother whom she's never forgiven for an act of betrayal in her early teen years, Lucy embraces college life and all it has to offer. But everything changes when she meets Stephen DeMarco, who has a mysterious past of his own. Their addicting entanglement will have consequences they never could have imagined.",
          "poster_path": "/tc5c5X1ZbJx5guaQUo1Xqt24S8z.jpg",
          "media_type": "tv",
          "genre_ids": [
            18
          ],
          "popularity": 16.075,
          "first_air_date": "2022-09-07",
          "vote_average": 7.305,
          "vote_count": 64,
          "origin_country": [
            "US"
          ]
        }
      ]
    },
    {
      "adult": false,
      "id": 1368723,
      "name": "Cameron Oppenheimer",
      "original_name": "Cameron Oppenheimer",
      "media_type": "person",
      "popularity": 7.881,
      "gender": 1,
      "known_for_department": "Acting",
      "profile_path": null,
      "known_for": [
        {
          "adult": false,
          "backdrop_path": "/wygUDDRNpeKUnkekRGeLCZM93tA.jpg",
          "id": 199,
          "title": "Star Trek: First Contact",
          "original_language": "en",
          "original_title": "Star Trek: First Contact",
          "overview": "The Borg, a relentless race of cyborgs, are on a direct course for Earth. Violating orders to stay away from the battle, Captain Picard and the crew of the newly-commissioned USS Enterprise E pursue the Borg back in time to prevent the invaders from changing Federation history and assimilating the galaxy.",
          "poster_path": "/vrC1lkTktFQ4AqBfqf4PXoDDLcw.jpg",
          "media_type": "movie",
          "genre_ids": [
            878,
            28,
            12,
            53
          ],
          "popularity": 23.574,
          "release_date": "1996-11-22",
          "video": false,
          "vote_average": 7.295,
          "vote_count": 1562
        },
        {
          "adult": false,
          "backdrop_path": "/mNdsbVuRdsyo8eitW2IBW2BWRkU.jpg",
          "id": 193,
          "title": "Star Trek: Generations",
          "original_language": "en",
          "original_title": "Star Trek: Generations",
          "overview": "Captain Jean-Luc Picard and the crew of the Enterprise-D find themselves at odds with the renegade scientist Soran who is destroying entire star systems. Only one man can help Picard stop Soran's scheme...and he's been dead for seventy-eight years.",
          "poster_path": "/rHsCYDGHFUarGh5k987b0EFU6kC.jpg",
          "media_type": "movie",
          "genre_ids": [
            878,
            28,
            12,
            53
          ],
          "popularity": 14.634,
          "release_date": "1994-11-18",
          "video": false,
          "vote_average": 6.51,
          "vote_count": 1164
        },
        {
          "adult": false,
          "backdrop_path": "/9tMxMZA4L5YOSAeYa7wdq1Hg93c.jpg",
          "id": 65374,
          "title": "Samurai Cop",
          "original_language": "en",
          "original_title": "Samurai Cop",
          "overview": "When Japanese organized crime imbeds itself within LA, the police turn to one man to take down the deadly Yakuza — Joe Marshall, aka \"The Samurai.\" With his fearless swagger and rock hard jaw, The Samurai tears a two-fisted hole through the mob and doesn't stop until the job is done.",
          "poster_path": "/jOlz0kpxlLY5xixyDYpcYUi2SJy.jpg",
          "media_type": "movie",
          "genre_ids": [
            28,
            80,
            35,
            53
          ],
          "popularity": 8.561,
          "release_date": "1991-11-30",
          "video": false,
          "vote_average": 4.6,
          "vote_count": 138
        }
      ]
    },
    {
      "adult": false,
      "id": 1209612,
      "name": "Julie Oppenheimer",
      "original_name": "Julie Oppenheimer",
      "media_type": "person",
      "popularity": 0.732,
      "gender": 1,
      "known_for_department": "Directing",
      "profile_path": null,
      "known_for": [
        {
          "adult": false,
          "backdrop_path": "/sHkq7IaklVd8mPTliThtIvE2PDQ.jpg",
          "id": 1584,
          "title": "School of Rock",
          "original_language": "en",
          "original_title": "School of Rock",
          "overview": "Fired from his band and hard up for cash, guitarist and vocalist Dewey Finn finagles his way into a job as a fifth-grade substitute teacher at a private school, where he secretly begins teaching his students the finer points of rock 'n' roll. The school's hard-nosed principal is rightly suspicious of Finn's activities. But Finn's roommate remains in the dark about what he's doing.",
          "poster_path": "/zXLXaepIBvFVLU25DH3wv4IPSbe.jpg",
          "media_type": "movie",
          "genre_ids": [
            35,
            10402
          ],
          "popularity": 28.16,
          "release_date": "2003-10-03",
          "video": false,
          "vote_average": 7.068,
          "vote_count": 5101
        },
        {
          "adult": false,
          "backdrop_path": "/tcFHLS1AWBbMscI6KuI8X0ygloK.jpg",
          "id": 19457,
          "title": "The Yards",
          "original_language": "en",
          "original_title": "The Yards",
          "overview": "In the rail yards of Queens, contractors repair and rebuild the city's subway cars. These contracts are lucrative, so graft and corruption are rife. When Leo Handler gets out of prison, he finds his aunt married to Frank Olchin, one of the big contractors; he's battling with a minority-owned firm for contracts.",
          "poster_path": "/AtwXtU8CDWvVADgOwRkOSRZFPWI.jpg",
          "media_type": "movie",
          "genre_ids": [
            80,
            18,
            53
          ],
          "popularity": 12.875,
          "release_date": "2000-04-27",
          "video": false,
          "vote_average": 6.146,
          "vote_count": 384
        },
        {
          "adult": false,
          "backdrop_path": "/pg26fglBbwXGuIZ8KmwBOYl4ZT0.jpg",
          "id": 9685,
          "title": "Igby Goes Down",
          "original_language": "en",
          "original_title": "Igby Goes Down",
          "overview": "Igby Slocumb, a rebellious and sarcastic 17-year-old boy, is at war with the stifling world of old money privilege he was born into. With a schizophrenic father, a self-absorbed, distant mother, and a shark-like young Republican big brother, Igby figures there must be a better life out there -- and sets about finding it.",
          "poster_path": "/uZnVVsdbR0fUkME4JFlfcchePS2.jpg",
          "media_type": "movie",
          "genre_ids": [
            35,
            18
          ],
          "popularity": 11.223,
          "release_date": "2002-09-13",
          "video": false,
          "vote_average": 6.6,
          "vote_count": 250
        }
      ]
    },
    {
      "adult": false,
      "id": 70981,
      "name": "George Oppenheimer",
      "original_name": "George Oppenheimer",
      "media_type": "person",
      "popularity": 1.715,
      "gender": 2,
      "known_for_department": "Writing",
      "profile_path": null,
      "known_for": [
        {
          "adult": false,
          "backdrop_path": "/oZDRp2YU6op4nsixT69fz8MfH1J.jpg",
          "id": 11939,
          "title": "A Day at the Races",
          "original_language": "en",
          "original_title": "A Day at the Races",
          "overview": "Doctor Hugo Hackenbush, Tony, and Stuffy try and save Judy's farm by winning a big race with her horse. There are a few problems. Hackenbush runs a high priced clinic for the wealthy who don't know he has his degree in Veterinary Medicine.",
          "poster_path": "/atJhISCddr3z8LWCr93yaGGv6YV.jpg",
          "media_type": "movie",
          "genre_ids": [
            35,
            10402
          ],
          "popularity": 6.681,
          "release_date": "1937-06-11",
          "video": false,
          "vote_average": 7.094,
          "vote_count": 171
        },
        {
          "adult": false,
          "backdrop_path": "/yIj4Y2BXbjr8Qem6Ly8QJWt4PgL.jpg",
          "id": 31773,
          "title": "Libeled Lady",
          "original_language": "en",
          "original_title": "Libeled Lady",
          "overview": "When a major newspaper accuses wealthy socialite Connie Allenbury of being a home-wrecker, and she files a multi-million-dollar libel lawsuit, the publication's frazzled head editor, Warren Haggerty, must find a way to turn the tables on her. Soon Haggerty's harried fiancée, Gladys Benton, and his dashing friend Bill Chandler are in on a scheme that aims to discredit Connie, with amusing and unexpected results.",
          "poster_path": "/mu2zGdHZJ9IASvnQktjGLZ4kU13.jpg",
          "media_type": "movie",
          "genre_ids": [
            35,
            10749
          ],
          "popularity": 8.665,
          "release_date": "1936-10-09",
          "video": false,
          "vote_average": 7.298,
          "vote_count": 99
        },
        {
          "adult": false,
          "backdrop_path": "/xdin9zkEh2g73kZIZGjlT6k2HOZ.jpg",
          "id": 50271,
          "title": "Strange Cargo",
          "original_language": "en",
          "original_title": "Strange Cargo",
          "overview": "Convicts escaping from Devil's Island come under the influence of a strange Christ-like figure.",
          "poster_path": "/gquGUJwVw2emUu8I4RprKcRpWTO.jpg",
          "media_type": "movie",
          "genre_ids": [
            18,
            10749,
            12
          ],
          "popularity": 6.229,
          "release_date": "1940-03-01",
          "video": false,
          "vote_average": 7,
          "vote_count": 46
        }
      ]
    },
    {
      "adult": false,
      "id": 590029,
      "name": "Peer J. Oppenheimer",
      "original_name": "Peer J. Oppenheimer",
      "media_type": "person",
      "popularity": 1.4,
      "gender": 0,
      "known_for_department": "Writing",
      "profile_path": null,
      "known_for": [
        {
          "adult": false,
          "backdrop_path": "/u3yn4r1T7nBxNb1ufOeNo9Rjxkd.jpg",
          "id": 80656,
          "title": "Nashville Girl",
          "original_language": "en",
          "original_title": "Nashville Girl",
          "overview": "A Kentucky-born maiden realizes her dream of becoming a country music star. However, she discovers that her single-minded determination has caused her to lose things far more precious than fame or money when she gets involved with a group of corrupt music executives.",
          "poster_path": "/tdXhMvLB40P4WbqYo5jaezjaMGc.jpg",
          "media_type": "movie",
          "genre_ids": [
            18,
            10402
          ],
          "popularity": 2.226,
          "release_date": "1976-03-01",
          "video": false,
          "vote_average": 5.3,
          "vote_count": 6
        },
        {
          "adult": false,
          "backdrop_path": "/TSuzUJQ3OwbcPlhEvRUAN1xvAr.jpg",
          "id": 107335,
          "title": "Operation C.I.A.",
          "original_language": "en",
          "original_title": "Operation C.I.A.",
          "overview": "A young CIA agent is assigned to Saigon to stop a planned political assassination.",
          "poster_path": "/rem4KjNsoWRBckmNaL7jmnu1UsV.jpg",
          "media_type": "movie",
          "genre_ids": [
            18,
            53
          ],
          "popularity": 0.6,
          "release_date": "1965-09-08",
          "video": false,
          "vote_average": 5,
          "vote_count": 1
        },
        {
          "adult": false,
          "backdrop_path": "/7R2YAqtKW8S0Sv88QG0dsQV0dPf.jpg",
          "id": 163695,
          "title": "Sex Play",
          "original_language": "en",
          "original_title": "Sex Play",
          "overview": "Young daughter of High ranking political figure gets into trouble when she and her friends compete at bedding the foreign diplomats.",
          "poster_path": "/4ohWxvESnrRdA82bQ5xDjroDMfU.jpg",
          "media_type": "movie",
          "genre_ids": [
            35
          ],
          "popularity": 1.397,
          "release_date": "1974-12-01",
          "video": false,
          "vote_average": 2,
          "vote_count": 1
        }
      ]
    }
  ],
  "total_pages": 4,
  "total_results": 69
}
 */


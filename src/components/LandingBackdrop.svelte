<script>
    export let image_url;
    export let backdrop_data;
    import { tweened } from 'svelte/motion';
	import { fade, scale } from 'svelte/transition';
    import { goto } from '$app/navigation';

    let goto_media_page = (id_number,media_type) =>{
        goto(`/${media_type}/${id_number}`)
    }
    let goto_media_page_keyHandler = (id_number,media_type,e) =>{
        if (e.key == 'Enter' )
            goto(`/${media_type}/${id_number}`)
    }

    let original = 1 * 8; // TYPE NUMBER OF SECONDS HERE
	let timer = tweened(original)

    $:current = 0;

    setInterval(() => {
        if ($timer > 0){
            $timer--;
        } else{
            right_button()
        }
    },1000);

    let left_button = ()=> {
        if(current <= 0){
            current = movie_day_trends.length-1
            timer=tweened(original)
        }else{
            current--
            timer=tweened(original)
        }
    }

    let right_button = ()=> {
        if(current >= movie_day_trends.length-1){
            current = 0
            timer=tweened(original)
        }else{
            current++
            timer=tweened(original)
        }
    }

    console.log("backdrop data:",backdrop_data)

    let movie_day_trends = backdrop_data.day_trends.filter(x =>(x.media_type == "movie"))
    console.log(movie_day_trends)
                        
</script>
<!-- <progress class="rounded-none" value={$timer/original}></progress> -->
<!-- <div class="px-4">
    <div class="h-3 w-full bg-opacity-30 dark:bg-opacity-60 mb-0 mx-auto bg-black"></div>
</div> -->

<div class="relative mt-8 xl:mt-10 2xl:mt-14">
    {#key current}
    <div in:fade class="relative w-full px-0 bg-black mb-0 bg-opacity-10">
        <div class=" relative">
            <div class="absolute bottom-0 left-0 right-0 m-auto flex w-fit space-x-6 p-3 z-50 font-bold text-white">
                <div on:click={left_button} class="cursor-pointer opacity-30 hover:opacity-50 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clip-rule="evenodd" />
                      </svg>                      
                </div>
                <div on:click={right_button} class="cursor-pointer opacity-30 hover:opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 hover:scale-105 text-white active:text-blue-500">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" />
                    </svg>                  
                </div>
            </div>
            <div class="absolute right-0 z-40 w-fit flex items-center px-2 mr md:mr-6 2xl:mr-16  h-full">
                <img on:click={()=>{goto_media_page(movie_day_trends[current].id,'movie')}}  class="shadow-lg h-44 w-32 sm:h-72 sm:w-48 2xl:h-80 2xl:w-60 hover:border-opacity-100 border-opacity-90 cursor-pointer border-2 border-white   rounded opacity-90 hover:opacity-100 transition duration-500 drop-shadow-lg" src={`https://www.themoviedb.org/t/p/original${movie_day_trends[current].poster_path}`}  alt={movie_day_trends.title}>
            </div>
            <div class="absolute inset-0 flex items-end">
                <div class="w-[100%] text h-[100%] px-2 pr-0 md:px-8 py-4 text-white bg-black bg-opacity-20 flex items-center">
                    <div class="flex flex-col space-y-4 p-2 h-fit w-2/3 lg:w-8/12 bg-orange-700 bg-opacity-0">
                        <!-- <p class="h1 font-bold text-indigo-400">{movie_day_trends[current].title}</p> -->
                        <p class="h1 lg:h1 font-bold text-white line-clamp-6">{movie_day_trends[current].title}</p>
                        <p class="hidden md:flex text-xs 2xl:text-base tracking-wide  text-white font-bold w-full ">{movie_day_trends[current].overview}</p>
                        <div class="hidden md:flex gap-4">
                            <p class="text-xs">Rating: {parseFloat(movie_day_trends[current].vote_average).toFixed(1)}</p>
                            <p class="text-xs">🇺🇸 English</p>
                        </div>
                        <div class="hidden md:flex">
                            <button on:click={()=>{goto_media_page(movie_day_trends[current].id,'movie')}} type="button" class="btn variant-filled-primary">Watch Trailer</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-96 md:h-[500px] xl:h-[500px] 2xl:h-[600px]">
                <img class="rounded object-cover h-full w-full rounde" alt="The project logo" src={`https://image.tmdb.org/t/p/original${movie_day_trends[current].backdrop_path}`} />
            </div>
        </div>
    </div>
    {/key}
</div>
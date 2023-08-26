<script>
    export let image_url;
    export let backdrop_data;
    import { tweened } from 'svelte/motion';
	import { fade, scale } from 'svelte/transition';

    let original = 1 * 8; // TYPE NUMBER OF SECONDS HERE
	let timer = tweened(original)

    $:current = 0;

    setInterval(() => {
        if ($timer > 0){
            $timer--;
        } else{
            current++
            timer=tweened(original)
            if (current>=movie_day_trends.length){
                current = 0
            }
        }
    },1000);

    console.log("backdrop data:",backdrop_data)

    let movie_day_trends = backdrop_data.day_trends.filter(x =>(x.media_type == "movie"))
                        
</script>
<!-- <progress class="rounded-none" value={$timer/original}></progress> -->

{#key current}
<div in:fade class="relative w-full px-0 bg-black mb-4 bg-opacity-10">
    <div class=" relative">
        <div class="absolute bottom-0 right-0 flex space-x-2 p-3 z-50 font-bold">
            <div class="">[-Left-]</div>
            <div class="">[-Right-]</div>
        </div>
        <div class="absolute right-0 z-40 w-fit flex items-center px-2 mr md:mr-6 2xl:mr-16  h-full">
            <img class="shadow-lg h-64 w-48 2xl:h-80 2xl:w-60  rounded opacity-80 drop-shadow-lg" src={`https://www.themoviedb.org/t/p/original${movie_day_trends[current].poster_path}`}  alt={movie_day_trends.title}>
        </div>
        <div class="absolute inset-0 flex items-end">
            <div class="w-[100%] text h-[100%] px-8 py-4 text-white bg-black bg-opacity-20 flex items-center">
                <div class="flex flex-col space-y-4 p-2 h-fit">
                    <!-- <p class="h1 font-bold text-indigo-400">{movie_day_trends[current].title}</p> -->
                    <p class="h1 font-bold text-white">{movie_day_trends[current].title}</p>
                    <p class=" text-xs tracking-wide  text-white font-bold w-full lg:w-2/3">{movie_day_trends[current].overview}</p>
                    <div class="flex gap-4">
                        <p class="text-xs">Rating: {parseFloat(movie_day_trends[current].vote_average).toFixed(1)}</p>
                        <p class="text-xs">🇺🇸 English</p>
                    </div>
                    <div class="">
                        <button type="button" class="btn variant-filled-primary">Watch Trailer</button>
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


<!-- <hr class="h-px ml-6 mt-3 bg-gray-200 border-0 dark:bg-gray-700"> -->
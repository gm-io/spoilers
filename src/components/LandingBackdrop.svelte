<script>
    export let image_url;
    export let backdrop_data;
    import { tweened } from 'svelte/motion';
	import { fade, scale } from 'svelte/transition';

    let original = 1 * 6; // TYPE NUMBER OF SECONDS HERE
	let timer = tweened(original)

    $:current = 0;


    setInterval(() => {
        if ($timer > 0){
            $timer--;
        } else{
            current++
            timer=tweened(original)
        }
    }, 1000);



    console.log("backdrop data:",backdrop_data)

    let movie_day_trends = backdrop_data.day_trends.filter(x =>(x.media_type == "movie"))

    let elemCarousel;

    function carouselLeft(){
        const x =
            elemCarousel.scrollLeft === 0
                ? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
                : elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
        elemCarousel.scroll(x, 0);
    }



    function carouselRight(){
        const x =
            elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
                ? 0 // loop
                : elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
        elemCarousel.scroll(x, 0);
    }

                        
		
</script>
<progress class="rounded-none" value={$timer/original}></progress>

{#key current}
<div in:fade class="relative w-full">
    <div class="mb-4 relative drop-shadow-lg">
        <div class="absolute inset-0 flex items-end">
            <div class="w-[100%] text h-[100%] px-8 py-4 text-white bg-black bg-opacity-30 flex items-center">
                <div class="flex flex-col space-y-4 p-2 h-fit">
                    <p class="h1 font-bold">{movie_day_trends[current].title}</p>
                    <p class=" text-xs w-full lg:w-2/3">{movie_day_trends[current].overview}</p>
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
        <div class="h-96 bg-blac">
            <img class="object-cover h-full w-full rounde" alt="The project logo" src={`https://image.tmdb.org/t/p/original${movie_day_trends[current].backdrop_path}`} />
        </div>
    </div>
</div>
{/key}


<!-- <hr class="h-px ml-6 mt-3 bg-gray-200 border-0 dark:bg-gray-700"> -->
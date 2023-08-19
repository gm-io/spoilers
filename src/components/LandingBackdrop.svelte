<script>
    export let image_url;
    export let backdrop_data;

    console.log("backdrop data:",backdrop_data)

    let movie_day_trends = backdrop_data.day_trends.filter(x =>(x.media_type == "movie"))
    let current = 0;

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

<div class="relative w-full">
    <div class="mb-4 relative drop-shadow-lg">
        <div class="absolute inset-0 flex">
            <div class="w-3/4 text h-fit my-auto px-8 py-4 text-white bg-black bg-opacity-10">
                <div class="flex flex-col space-y-4 p-2 bg-opacity-30">
                    <p class="h1 font-bold">{movie_day_trends[current].title}</p>
                    <p class=" text-xs w-full lg:w-2/3">{movie_day_trends[current].overview}</p>
                </div>
            </div>
        </div>
        <div class="h-96 bg-blac">
            <img class="object-cover h-full w-full rounded" alt="The project logo" src={`https://image.tmdb.org/t/p/original${movie_day_trends[current].backdrop_path}`} />
        </div>
    </div>
</div>

<!-- <hr class="h-px ml-6 mt-3 bg-gray-200 border-0 dark:bg-gray-700"> -->
<script>
    export let image_url;
    export let backdrop_data;

    console.log("backdrop data:",backdrop_data)

    let movie_day_trends = backdrop_data.day_trends.filter(x =>(x.media_type == "movie"))


    let elemCarousel;
    const unsplashIds = ['vjUokUWbFOs', '1aJuPtQJX_I', 'Jp6O3FFRdEI', 'I3C_eojFVQY', 's0fXOuyTH1M', 'z_X0PxmBuIQ'];


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
            <div class="w-3/4 text h-fit my-auto px-8 py-4 text-white bg-black bg-opacity-0">
                <div class="flex flex-col space-y-4 p-2 bg-opacity-30">
                    <p class="h1 font-bold">{image_url.title}</p>
                    <p class=" text-xs w-full lg:w-2/3">{image_url.overview}</p>
                </div>
            </div>
        </div>
        <!-- <div class="h-96 bg-blac">
            <img class="object-cover h-full w-full rounded" alt="The project logo" src={`https://image.tmdb.org/t/p/w1280/i2GVEvltEu3BXn5crBSxgKuTaca.jpg`} />
        </div> -->
        <div class="card h-96 overflow-y-hidden">
            <!-- <button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
                <i class="fa-solid fa-arrow-left" />
            </button> -->
            <!-- Full Images -->
            <div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
                {#each unsplashIds as unsplashId}
                    <img
                        class="snap-center w-full h-full object-fit"
                        src="https://source.unsplash.com/{unsplashId}/1024x768"
                        alt={unsplashId}
                        loading="lazy"
                    />
                {/each}
            </div>
            <!-- <button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
                <i class="fa-solid fa-arrow-right" />
            </button> -->
        </div>
    </div>
</div>

<!-- <hr class="h-px ml-6 mt-3 bg-gray-200 border-0 dark:bg-gray-700"> -->
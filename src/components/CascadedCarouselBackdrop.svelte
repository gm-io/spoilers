<script>
    export let image_url;
    export let backdrop_data;

    let movie_day_trends = backdrop_data.day_trends.filter(x =>(x.media_type == "movie"))
    let tv_day_trends = backdrop_data.day_trends.filter(x =>(x.media_type == "tv"))



           
		
</script>

<div class="relative w-full">
    <div class="mb-4 relative drop-shadow-lg">
        <div class="car h-96 overflow-y-hidden">
            <div class="snap-x snap-mandatory scroll-smooth gap-2 flex overflow-x-aut">
                {#each Array.from({ length: 7 }) as _ , i}
                <div class="h-full w-full">
                    <img
                        class="w-full h-96 object-cover"
                        src={`https://image.tmdb.org/t/p/original${tv_day_trends[i].backdrop_path}`}
                        alt={tv_day_trends[i].name}
                        loading="lazy"
                    />
                </div>
                {/each}
            </div>
        </div>
    </div>
</div>
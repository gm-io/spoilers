<script>
// let elemMovies;
// export let day_trends;
// console.log(day_trends)

// let movie_day_trends = day_trends.filter(x =>(x.media_type == "movie"))

// console.log(movie_day_trends)

// function multiColumnLeft(){
// 	let x = elemMovies.scrollWidth;
// 	if (elemMovies.scrollLeft !== 0) x = elemMovies.scrollLeft - elemMovies.clientWidth;
// 	elemMovies.scroll(x, 0);
// }

// function multiColumnRight(){
// 	let x = 0;
// 	// -1 is used because different browsers use different methods to round scrollWidth pixels.
// 	if (elemMovies.scrollLeft < elemMovies.scrollWidth - elemMovies.clientWidth - 1) x = elemMovies.scrollLeft + elemMovies.clientWidth;
// 	elemMovies.scroll(x, 0);
// }
					
</script>

<!-- <div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
	<button type="button" class="btn-icon variant-filled" on:click={multiColumnLeft}>
		<i class="fa-solid fa-arrow-left" />
	</button>
	<div bind:this={elemMovies} class="snap-x snap-mandatory scroll-smooth flex hide-scrollbar pb-2 overflow-x-auto">
        <div class="flex space-x-3">
            {#each Array.from({ length: 10 }) as _ , i}
                    <img class="rounded-xl w-24" src={`https://image.tmdb.org/t/p/w780${movie_day_trends[i].backdrop_path}`} alt="">
            {/each}
        </div>
	</div>
	<button type="button" class="btn-icon variant-filled" on:click={multiColumnRight}>
		<i class="fa-solid fa-arrow-right" />
	</button>
</div>
					 -->
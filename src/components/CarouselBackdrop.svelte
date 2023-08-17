<script>
    
let elemMovies;

function multiColumnLeft(){
	let x = elemMovies.scrollWidth;
	if (elemMovies.scrollLeft !== 0) x = elemMovies.scrollLeft - elemMovies.clientWidth;
	elemMovies.scroll(x, 0);
}

function multiColumnRight(){
	let x = 0;
	// -1 is used because different browsers use different methods to round scrollWidth pixels.
	if (elemMovies.scrollLeft < elemMovies.scrollWidth - elemMovies.clientWidth - 1) x = elemMovies.scrollLeft + elemMovies.clientWidth;
	elemMovies.scroll(x, 0);
}
					
</script>

test
<div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
	<!-- Button: Left -->
	<button type="button" class="btn-icon variant-filled" on:click={multiColumnLeft}>
		<i class="fa-solid fa-arrow-left" />
	</button>
	<!-- Carousel -->
	<div bind:this={elemMovies} class="snap-x snap-mandatory scroll-smooth flex gap-2 hide-scrollbar pb-2 overflow-x-auto">
        <div class="h-20 w-20 bg-gray-400">test</div>
        <div class="h-20 w-20 bg-gray-400">test</div>
        <div class="h-20 w-20 bg-gray-400">test</div>
        <div class="h-20 w-20 bg-gray-400">test</div>
        <div class="h-20 w-20 bg-green-400">test</div>
        <div class="h-20 w-20 bg-gray-400">test</div>
        <div class="h-20 w-20 bg-gray-400">test</div>
        <div class="h-20 w-20 bg-gray-400">test</div>
        <div class="h-20 w-20 bg-gray-400">test</div>
        <div class="h-20 w-20 bg-gray-400">test</div>
        <div class="h-20 w-20 bg-gray-400">test</div>
        <div class="h-20 w-20 bg-green-400">test</div>
        <div class="h-20 w-20 bg-gray-400">test</div>
        <div class="h-20 w-20 bg-gray-400">test</div>
        <div class="h-20 w-20 bg-gray-400">test</div>

	</div>
	<!-- Button-Right -->
	<button type="button" class="btn-icon variant-filled" on:click={multiColumnRight}>
		<i class="fa-solid fa-arrow-right" />
	</button>
</div>
					
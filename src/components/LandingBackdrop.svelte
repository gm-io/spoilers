<script>
    export let image_url;
</script>

<div class="mb-4 relative">
    <div class="absolute inset-0 flex">
        <div class="w-3/4 text h-fit my-auto px-8 py-4 text-white bg-black bg-opacity-0">
            <div class="flex flex-col space-y-4 p-2 bg-opacity-30">
                <p class="h1 font-bold">{image_url.title}</p>
                <p class=" text-xs w-full lg:w-2/3">{image_url.overview}</p>
            </div>
        </div>
    </div>
    <div class="h-96 bg-blac">
        <img class="object-cover h-full w-full" alt="The project logo" src={`https://image.tmdb.org/t/p/w1280/i2GVEvltEu3BXn5crBSxgKuTaca.jpg`} />
    </div>
</div>
<!-- <hr class="h-px ml-6 mt-3 bg-gray-200 border-0 dark:bg-gray-700"> -->
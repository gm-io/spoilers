<script>
    export let image_url;
</script>

<div class="mb-8 relative">
    <div class="absolute inset-0 flex">
        <div class="w-10/12 text h-fit my-auto px-8 py-4 text-white bg-black bg-opacity-20">
            <div class="flex flex-col space-y-4 p-2 bg-opacity-30">
                <p class="h1 font-bold">{image_url.title}</p>
                <p class=" text-xs w-full lg:w-2/3">{image_url.overview}</p>
            </div>
        </div>
    </div>
    <img class="" alt="The project logo" src={`https://image.tmdb.org/t/p/w1280/i2GVEvltEu3BXn5crBSxgKuTaca.jpg`} />
</div>
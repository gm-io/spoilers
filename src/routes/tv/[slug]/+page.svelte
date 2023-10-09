<script>
    export let data;
</script>
<!-- <div class="w-5/6 mx-auto">
    <div class="w-full flex bg-red-500">
        <div class="h-[600px] w-full">
            <img class="h-full w-full object-cover" src={`https://www.themoviedb.org/t/p/original${data.backdrop_path}`} alt="">
        </div>
    </div>

</div> -->
<div class="w-fit mx-auto">
    <div class="flex space-x-10">
        <div class="details">
            <p class="">Title: {data.name}</p>
            <p class="">Rating: {parseFloat(data.vote_average).toFixed(1)}</p>
            <p class="">Seasons: {data.seasons.length}</p>
            <p class="">Genre:{data.genres.map((x) => " " + x.name)}</p>
            <p class="">Year: {data.first_air_date.substring(0, 4)}</p>
            <p class="">Start date: {data.first_air_date}</p>
            <p class="">Language: {[...data.languages]}</p>
            <p class="">Type: {data.type}</p>
            <p class="">Networks:{data.networks.map((x) => " " + x.name)}</p>
            <p class="">Status: {data.status}</p>
            <p class="">Runtime: {data.episode_run_time[0]} minutes</p>
        </div>
        <div class="poster">
            <img class="h-44" src={`https://www.themoviedb.org/t/p/original${data.poster_path}`} alt="">
        </div>
    </div>
</div>

<!-- <div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div> -->
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
<div class="">
    <div class="flex">
        <div class="details">
            <p class="">{data.name}</p>
            <p class="">Rating: {parseFloat(data.vote_average).toFixed(1)}</p>
            <p class="">Seasons: {data.seasons.length}</p>
            <p class="">Genre:{data.genres.map((x)=> " "+x.name)}</p>
            <p class="">Year: {data.first_air_date.substring(0,4)}</p>
            <p class="">Language: {[...data.languages]}</p>
            <p class="">Type: {data.type}</p>
            <p class="">Networks:{data.networks.map((x)=>" "+x.name)}</p>
        </div>
        <div class="poster"></div>
    </div>
</div>

<!-- <div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div> -->
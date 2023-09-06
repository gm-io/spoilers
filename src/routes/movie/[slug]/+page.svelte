<script>
    export let data;
</script>

<div class="w-fit mx-auto">
    <div class="flex space-x-10">
        <div class="details">
            <p class="">Title: {data.title}</p>
            <p class="">Rating: {parseFloat(data.vote_average).toFixed(1)}</p>
            <p class="">Genre:{data.genres.map((x)=> " "+x.name)}</p>
            <p class="">Year: {data.release_date.substring(0,4)}</p>
            <p class="">Language: {data.spoken_languages.map((language)=> " " + language.english_name)}</p>
            <p class="">Production:{data.production_companies.map((production_company)=> " "+ production_company.name )}</p>
            <p class="">Status: {data.status}</p>
            <p class="">Runtime: {data.runtime} minutes</p>





            

<!-- 
            <p class="">Type: {data.type}</p>
            <p class="">Networks:{data.networks.map((x)=>" "+x.name)}</p>
             -->
        </div>
        <div class="poster">
            <img class="h-44" src={`https://www.themoviedb.org/t/p/original${data.poster_path}`} alt={data.title}>
        </div>
    </div>
</div>

<!-- <div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div> -->
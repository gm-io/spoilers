<script>
    export let data;
    
    const cast_10 = data.cast.splice(0,11)
</script>

<div class="bg-orange-500 w-full">
    <div class="grid grid-cols-5 gap-4">
        {#each cast_10 as cast}
            <div class="flex flex-col border-2 rounded-lg border-black">
                <img src={`https://image.tmdb.org/t/p/original${cast.profile_path}`} alt={`${cast.name} profile`}>
                <div class="">{cast.name}</div>
                <div class="">{cast.character}</div>
            </div>
            
        {/each}
    </div>
</div>



<div>
    <pre>{JSON.stringify(data.cast, null, 2)}</pre>
</div>
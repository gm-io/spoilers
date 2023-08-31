<script>
    export let data;
</script>
<div class="">
    <div class="w-full bg-red-500">
        <div class="h-96 w-5/6">
            <img class="h-full w-full object-contain" src={`https://www.themoviedb.org/t/p/original${data.backdrop_path}`} alt="">
        </div>
    </div>

</div>

<!-- <div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div> -->
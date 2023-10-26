<script>
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    export let data;
    let person = data.data
    let value = 0
</script>

this is a person page
<div class="">Name: {person.name}</div>
<div class="">Gender: {person.gender}</div>
<div class="">Age: Calc age from birthday</div>
<div class="">D.O.B: {person.birthday}</div>
<div class="">Bio: {person.biography}</div>
<div class="">From: {person.place_of_birth}</div>
<div class="">Image: {person.profile_path}</div>
<div class="">Department: {person.known_for_department}</div>
<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
    <RadioItem bind:group={value} name="justify" value={0}>Movie</RadioItem>
	<RadioItem bind:group={value} name="justify" value={1}>TV</RadioItem>

</RadioGroup>


<div class="border-b border-4 border-black w-full my-2"></div>
<div class=""></div>
<div class="grid grid-cols-3 gap-2">
    {#each person.appears_in.cast as role }
        <div class="flex flex-col bg-black bg-opacity-20">
            <div class="font-bold">{role.media_type=="movie"?role.title:role.name}</div>

            <div class="text-xs">As {role.character}</div>
        </div>
    {/each}
</div>
<div class="border-b border-4 border-black w-full my-2"></div>


<div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div>
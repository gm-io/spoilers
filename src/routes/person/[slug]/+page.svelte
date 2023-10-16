<script>
    export let data;
    let person = data.data
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

<div class="border-b border-4 border-black w-full my-2"></div>

<div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div>
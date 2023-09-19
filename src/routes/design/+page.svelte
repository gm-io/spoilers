<script>

    import { modalStore } from '@skeletonlabs/skeleton';

    let myModal = () => {
        const modal = {
            type: 'alert',
            title: 'Example Alert',
            body: 'This is an example modal.',
            image: 'https://i.imgur.com/WOgTG96.gif',
        };

        // Trigger the modal:
        modalStore.trigger(modal);

    }

    let customModal = () =>{
        const modal = {
            type: 'component',
            component: 'modalComponentTwo',
            image:'dG91B3hHyY4'
        }
        modalStore.trigger(modal)
        console.log($modalStore[0].meta?.someKey)
    }
</script>


design page

<div class="flex">
    <div on:click={myModal} class="p-4 bg-black w-fit m-4 rounded cursor-pointer">Click Me</div>
    <div on:click={customModal} class="p-4 bg-blue-600 w-fit m-4 rounded cursor-pointer">Click Me</div>

</div>

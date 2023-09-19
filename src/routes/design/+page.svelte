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

    // Provide the modal settings

                    
</script>


design page

<div on:click={myModal} class="p-4 bg-black w-fit m-4 rounded cursor-pointer">Click Me</div>


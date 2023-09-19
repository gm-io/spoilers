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
            component: 'modalComponentTwo'
        }
        modalStore.trigger(modal)
    }

    // Provide the modal settings

    const cBase = 'relative w-modal-wide shadow-xl';
	const cButton = 'absolute -top-3 -right-3 z-1 btn-icon variant-filled';
	const cIframe = 'bg-black w-full aspect-video rounded-container-token overflow-hidden';
</script>


design page

<div class="flex">
    <div on:click={myModal} class="p-4 bg-black w-fit m-4 rounded cursor-pointer">Click Me</div>
    <div on:click={customModal} class="p-4 bg-blue-600 w-fit m-4 rounded cursor-pointer">Click Me</div>

</div>



<!-- {#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<iframe
			class={cIframe}
			src="https://www.youtube.com/embed/vOGhAV-84iI"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</div>
{/if} -->
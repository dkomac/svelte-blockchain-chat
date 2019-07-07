<script>
	import io from 'socket.io-client';
	const socket = io('http://localhost:3000');
	
	import MessageBox from './components/MessageBox.svelte'

	export let name;
	let message = '';
	let messageChain = [];

	function sendMessage() {
		console.log(message)
		socket.emit('message', { data: message})
		message = '';
	}

	socket.on('send-chain', (chain) => {
		messageChain = chain.chain;
	})
	
</script>

<style>
	h1 {
		color: purple;
	}
	.container {
		display: flex;
   		justify-content: space-between;
	}
</style>

<h1>Hello {name}!</h1>
<div class="container">
	<div class="message-box">
		<input id="text-message" bind:value="{message}" type="text">
		<input id="text-submit" on:click={sendMessage}  type="submit">
	</div>
	<div>
		{#each messageChain as item}
			{#if item.data.user}
				<MessageBox item={item} />
			{/if}
		{/each}
	</div>
</div>
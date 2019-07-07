<script>
    export let item;
    console.log("iutete", item)
</script>

<style>
	.container {
		padding: 10px;
        background-color: lightblue;
	}
    .username {
        color: purple;
    }
</style>

<div class="container">
    <div class="username">{item.data.user}</div>
    <div>{item.data.message}</div>
</div>
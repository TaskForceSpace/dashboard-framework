<template>
	<div class="loader"></div>
</template>
<script setup>
</script>

<style scoped lang="scss">
.loader {
	width: 40px;
	height: 40px;
	border: 4px solid transparent;
	border-top: 4px solid #4caf50;
	/* Grün */
	border-radius: 50%;
	animation: spin 0.8s ease infinite;
}

@keyframes spin {
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
}
</style>
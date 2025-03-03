<template>
	<div class="formcontainer">
		<slot></slot>
	</div>
</template>

<script setup>
const props = defineProps({})
</script>

<style scoped lang="scss">
.formcontainer {
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
}
</style>
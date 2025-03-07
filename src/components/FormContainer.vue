<template>
	<div class="formcontainer">
		<div class="formcontainer__header">
			<span>{{ props.title }}</span>
		</div>
		<slot></slot>
	</div>
</template>

<script setup>
const props = defineProps({
	title: {
		type: String,
		default: null
	}
})
</script>

<style scoped lang="scss">
.formcontainer {
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;

	&__header {
		width: 100%;
		padding: 20px;
		text-align: center;
		font-size: 1.5rem;
	}
}
</style>
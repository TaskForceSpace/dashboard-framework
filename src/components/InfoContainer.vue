<template>
	<div class="infocontainer">
		<div class="infocontainer__header">
			<span>{{ props.title }}</span>
		</div>
		<div class="infocontainer__content">
			<table class="infocontainer__left">
				<slot name="default"></slot>
			</table>
			<div class="infocontainer__right">
				<slot name="right"></slot>
			</div>
		</div>
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
.infocontainer {
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: start;
	width: 100%;
	max-width: 700px;
	padding: 10px;

	.infocontainer__content {
		display: flex;
		flex-flow: row;
		justify-content: center;
		align-items: center;
	}

	.infocontainer__header {
		font-size: 1.2rem;
		font-weight: 500;
		margin-bottom: 10px;
	}
}
</style>
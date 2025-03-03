<template>
<div class="headerdata">
	<div class="headerdata__right">
		<slot name="right"></slot>
	</div>

	<div class="headerdata__left">
		<slot name="left"></slot>
	</div>
</div>
</template>

<script setup>
const props = defineProps({})
</script>

<style scoped lang="scss">
.headerdata {
	display: flex;
	flex-flow: column;
	padding: 20px;

	&__left {
		display: flex;
		flex-flow: row;
		justify-content: flex-start;
		align-items: center;
	}

	&__right {
		display: flex;
		flex-flow: row;
		justify-content: flex-end;
		align-items: center;
	}
}
</style>
<template>
	<div class="header">
		<div class="header__title"></div>
		<div class="header__right">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({})

</script>

<style scoped lang="scss">
.header {
	padding-top: 28px;
	display: flex;
	flex-flow: row;
	width: 100%;

	&__right{
		display: flex;
		flex-flow: row;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		margin: 0 10px;
	}
}
</style>
<template>
	<div class="headereditor">
		<div class="headereditor__left"></div>

		<h2>{{title}}</h2>

		<div class="headereditor__actions">
			<Button label="Abbrechen" />
			<Button label="Speichern" />
		</div>
	</div>
</template>

<script setup>
import Button from './Button.vue'

const props = defineProps({
	title: {
		type: String,
		default: 'Page Title'
	}
})
</script>

<style scoped lang="scss">
.headereditor {
	background-color: rgba(218, 218, 218, 0.849);
	padding: 40px 0;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	z-index: 999;

	h2 {
		width: 33%;
		text-align: center;
		margin: 0;
		padding: 0;
	}

	&__left {
		width: 33%;
	}

	&__actions {
		display: flex;
		flex-direction: row;
		justify-content: end;
		align-items: center;
		width: 33%;

		.btn {
			margin: 0 10px;
		}
	}
}
</style>
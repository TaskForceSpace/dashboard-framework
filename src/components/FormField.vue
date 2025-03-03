<template>
	<div class="formfield">
		<div class="formfield__label">
			<label for="">{{props.label}}</label>
		</div>
		<div class="formfield__input">
			<slot></slot>
			<div class="formfield__input--info"></div>
			<div class="formfield__input--error"></div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	label: {
		type: String,
		default: 'Label'
		}
	})
</script>

<style scoped lang="scss">
.formfield {
	display: flex;
	flex-direction: row;
	margin-bottom: 20px;
	font-size: 16px;
	width: 100%;
	max-width: 700px;
	align-items: center;
	padding: 4px 0;

	&__label {
		width: 30%;
		padding-right: 16px;

		label {
			font-weight: bold;
			width: 100%;
		}
	}

	&__input {
		width: 70%;
		display: flex;
		flex-direction: column;
		
		input {
			padding: 10px;
			border: 1px solid #ccc;
			border-radius: 5px;
			width: 100%;
		}
	}
}
</style>
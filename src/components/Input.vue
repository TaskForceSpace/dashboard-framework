<template>
	<div class="input">
		<label v-if="props.label" >{{ props.label }}</label>
		<input :type="props.type" :value="props.value"/>
	</div>
</template>

<script setup>
const props = defineProps({
	label: {
		type: String,
		default: ''
	},
	type: {
		type: String,
		default: 'text'
	},
	value: {},
	placeholder: {
		type: String,
		default: ''
	}
})
</script>

<style scoped lang="scss">
.input {
	display: flex;
	flex-flow: column;
	margin: 10px 0;
}

input {
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
}
</style>
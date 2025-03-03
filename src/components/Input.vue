<template>
	<input :type="props.type" :value="props.value"/>
</template>

<script setup>
const props = defineProps({
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
input {
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
}
</style>
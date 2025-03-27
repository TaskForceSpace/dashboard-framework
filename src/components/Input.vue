<template>
	<div class="input">
		<label v-if="props.label">{{ props.label }}</label>
		<input :type="props.type" v-bind:value="value" @change="updateValue" @keydown="updateValue" />
	</div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
	label: {
		type: String,
		default: ''
	},
	type: {
		type: String,
		default: 'text'
	},
	modelValue: {
		type: [String, Number],
		default: ''
	},
	placeholder: {
		type: String,
		default: ''
	}
})

const value = ref();
const emit = defineEmits(['update:modelValue'])

function updateValue(event) {
	value.value = event.target.value
	emit('update:modelValue', value.value);
}
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
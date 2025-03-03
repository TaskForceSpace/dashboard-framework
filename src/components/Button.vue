<template>
	<button class="btn">
		<span class="btn__text" :class="[btnClass, { 'active': props.active }]">{{ label }}</span>
	</button>
</template>
<script setup>
const props =  defineProps({
	label: {
		type:String,
		default: "Button Text"
	},
	active: {
		type: Boolean,
		default: false
	},
	btnClass: {
		type: [String, Array, Object],
		default: ''
	}
})
</script>
<style scoped lang="scss">
.btn {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row-reverse;
	padding: 10px;
	border: 1px solid grey;
	min-height: 37px;
	border-radius: 12px;
	background-color: transparent;
	font-size: 14px;
	text-align: center;
	font-weight: 500;
	cursor: pointer;
	transition: 300ms all ease;
	margin: 0 4px;

	&:hover {
		color: var(--quaternary-color);
		background-color: var(--secondary-color);
	}

	&.active {
		color: var(--quaternary-color);
		background-color: var(--secondary-color);
	}

	img {
		width: 20px;
		height: 20px;
		margin: 0;

		&.with-margin {
			margin: 0 8px 0 0;
		}
	}
}
</style>

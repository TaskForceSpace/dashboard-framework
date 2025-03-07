<template>
	<tr class="inforow">
		<td class="inforow__label">{{ props.label }}:</td>
		<td class="inforow__value">{{ props.value }}</td>
	</tr>
</template>

<script setup>

const props = defineProps({
	label: {
		type: String,
		default: null
	},
	value: {
		type: String,
		default: null
	}
})

</script>

<style scoped lang="scss">
.inforow {
	padding: 6px 0;
	&__label {
		font-weight: 600;
		padding-right: 20px;
	}

	&__value {
		font-weight: 400;
		color: #848484;
	}
}
</style>
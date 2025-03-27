<template>
	<div v-if="isShow" class="dialog">
		<div class="dialog__container">
			<div v-if="!loading" class="dialog__content">
				<div class="dialog__header">
					<div class="dialog__close"><span class="dialog__close--action" @click="end()">X</span></div>
					<slot name="header"></slot>
				</div>

				<div class="dialog__body">
					<slot name="body"></slot>
				</div>

				<div class="dialog__footer">
					<slot name="footer"></slot>
				</div>
			</div>

			<div v-else class="dialog__loading">
				<Spinner />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import Spinner from './Spinner.vue'

const props = defineProps({
	loading: {
		type: Boolean,
		default: false
	},
	show: {
		type: Boolean,
		default: true
	}
})

const isShow = ref(false)
const emit = defineEmits(['update:show']);

watch(() => props.show, (newVal) => {
	isShow.value = newVal;
	if (newVal) {
		document.body.style.overflow = 'hidden';
		window.scrollTo(0, 0);

	} else {
		document.body.style.overflow = '';
	}
});

function end() {
	document.body.style.overflow = '';
	isShow.value = false;
	emit('update:show', isShow.value);
}

onMounted(
	() => {
		isShow.value = props.show;
	}
)
</script>

<style lang="scss" scoped>
.dialog {
	background-color: rgba(0, 0, 0, 0.603);
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 999;

	&__container {
		background-color: #fff;
		border-radius: 12px;
		width: 100%;
		max-width: 500px;
		padding: 15px;
		margin: 15px;
		box-sizing: border-box;
		min-height: 200px;
		display: flex;
		flex-flow: column;
		justify-content: start;
	}

	&__loading {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 200px;
	}

	&__close {
		display: flex;
		justify-content: end;

		&--action {
			background-color: rgba(192, 192, 192, 0.397);
			font-size: 24px;
			padding: 4px 13px;
			border-radius: 100%;
			cursor: pointer;

			&:hover {
				background-color: rgb(199, 199, 199);
			}
		}
	}

}
</style>
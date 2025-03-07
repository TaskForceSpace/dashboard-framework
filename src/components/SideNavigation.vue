<template>
	<nav class="navigation">
		<a class="navigation__logo" href="/">
			<img v-if="logo" :src="logo" />
			<h1 v-else>Dashboard</h1>
		</a>

		<div class="navigation__items">
			<slot></slot>
		</div>

		<div class="navigation__footer">
			<p v-if="props.version" class="navigation__footer--version">{{ props.version }}</p>
		</div>
	</nav>

	<!-- TODO: Mobile Version -->
</template>

<script setup>
import { version } from 'vue';

const props = defineProps({
	logo: {
		type: String,
		default: null
	},
	version: {
		type: String,
		default: null
	}
})
</script>

<style scoped lang="scss">
.navigation {
	position: fixed;
	width: 250px;
	z-index: 999;
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	height: 100vh;
	top: 0;
	left: 0;
	border-right: 3px solid rgba(80, 80, 80, 0.781);
	background-color: #fff;

	&__logo {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		margin: 30px 20px;

		img {
			width: 100px;
			object-fit: contain;
		}
	}

	&__items {
		display: flex;
		flex-flow: column;
		justify-content: flex-start;
		align-items: start;
		margin: 10px;
		height: 100%;
	}

	&__footer {
		&--version {
			text-align: center;
			font-size: 0.8rem;
			color: #666;
		}
	}
}
</style>
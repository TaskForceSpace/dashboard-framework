<template>
	<div class="loginview">
		<div class="loginview__card">

			<div v-if="!props.loading" class="loginview__form">

				<div v-if="props.logo" class="loginview__logo">
					<img :src="props.logo" alt="Logo" />
				</div>

				<h2 class="loginview__title">{{props.title}}</h2>

				<div class="loginview__input">
					<Input label="E-Mail" />
					<Input label="Passwort" type="password"/>
				</div>

				<div v-if="props.error" class="loginview__error">
					<p>{{ props.error }}</p>
				</div>

				<div class="loginview__actions">
					<Button label="Anmelden" @click="submitForm" />
				</div>
			</div>

			<div v-if="props.loading" class="loginview__loading">
				<LoadingSpinner />
			</div>

		</div>
	</div>
</template>

<script setup >
import { ref } from 'vue'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'

const props = defineProps({
	logo: {
		type: String,
		default: ''
	},
	error: {
		type: String,
		default: ''
	},
	title: {
		type: String,
		default: 'Login'
	},
	loading: {
		type: Boolean,
		default: false
	}
})

function submitForm() {
	console.log('Form submitted')
}

</script>

<style lang="scss" scoped>
.loginview {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	background-color: rgb(159, 155, 155);

	&__card {
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		min-height: 400px;
		max-width: 450px;
		background-color: white;
		padding: 20px;
		border-radius: 5px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		border-radius: 12px;
	}

	&__form {
		display: flex;
		flex-flow: column;
		width: 100%;
	}

	&__title {
		text-align: center;
		font-size: 1.5rem
	}

	&__logo {
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: 150px;
			height: 150px;
			object-fit: contain;
		}
	}

	&__input {
		display: flex;
		flex-flow: column;
	}

	&__error {
		background-color: #f8d7da;
		color: #721c24;
		padding: 2px;
		border-radius: 5px;
		margin: 10px 0;
	}

	&__actions {
		display: flex;
		justify-content: center;
		margin: 30px 0;
	}

	&__loading {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
}
</style>
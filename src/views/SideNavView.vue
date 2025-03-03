<template>
	<section class="sidenavview">
		<SideNavigation v-if="!props.hideNav" :logo="props.logo">
			<slot name="sidenavitems"></slot>
		</SideNavigation>
		<div class="sidenavview__content" :class="{ 'hide-nav': props.hideNav }">
			<slot name="content"></slot>
		</div>
	</section>
</template>

<script setup>
import SideNavigation from '../components/SideNavigation.vue'

const props = defineProps({
	hideNav: {
		type: Boolean,
		default: false
	},
	logo: {
		type: String,
		default: null
	}
})
</script>

<style scoped lang="scss">
.sidenavview {
	&__content {
		margin-left: 250px;

		&.hide-nav {
			margin-left: 0;
		}
	}
}
</style>
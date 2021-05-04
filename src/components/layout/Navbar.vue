<template>
	<div class="nav text-center">
		<router-link to="/">
			<img class="logo" src="@/assets/images/fedo-logo.png" alt="Fedo logo">
		</router-link>
	</div>
	
</template>

<script>
export default {
	name: "Navbar"
}
</script>

<style lang="scss">
.nav {
	padding: 1rem;
	
	.logo {
		max-width: 8rem;
	}
}
</style>
<template>
	<div id="app">
		<Navbar/>
		<main>
			<router-view/>
		</main>
	</div>
</template>
<script>
import Navbar from "./components/layout/Navbar";

export default {
	components: {
		Navbar
	}
}
</script>
<style lang="scss">
@import "./src/assets/sass/app.scss";

#nav {
	padding: 30px;
	
	a {
		font-weight: bold;
		color: #2c3e50;
		
		&.router-link-exact-active {
			color: #42b983;
		}
	}
}

.brand-text {
	color: #482e91;
}

</style>

<template>
	<div id="app">
		<Navbar/>
		<main>
			<router-view/>
			<div class="toaster" v-if="updateExists" ref="updateApp">
				<img src="@/assets/images/update-icon.svg" alt="">
				<span>An update is available!</span>
				<a href="javascript:void(0)" @click="refreshApp">Update</a>
			</div>
		</main>
	</div>
</template>
<script>
import Navbar from "./components/layout/Navbar";
import updateServiceWorker from "./mixins/updateServiceWorker";

export default {
	components: {
		Navbar
	},
	mixins: [updateServiceWorker],
	mounted() {
		if (this.updateExists) {
			setTimeout(()=>{
				this.$refs.updateApp.style.right = '1rem';
			}, 1000)
		}
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

.toaster {
	display: flex;
	position: fixed;
	z-index: 1;
	bottom: 1rem;
	right: -50rem;
	border: 2px solid #472f91;
	background: #f9f8fffa;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem;
	width: 22.5rem;
	min-height: 2rem;
	border-radius: 10px;
	box-shadow: 0 8px 20px 0 #00000033, 0 2px 4px 0 #0000001a;
	margin: 0 1rem;
	transition: .3s right ease-in;
	
	a {
		text-decoration: none !important;
	}
	
	img {
		max-width: 2rem;
	}
	
}

</style>

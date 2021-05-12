<template>
	<div class="text-center home d-flex">
		<h1 class="brand-text slogan mb-3">Predict Your Health Risk</h1>
		<h2 class="brand-text mb-4">Through AI</h2>
		<div class="fedo-avatar-wrapper">
			<div class="fedo-avatar-container">
				<img class="" src="../assets/images/fedo-avatar.png">
			</div>
			<div class="fedo-avatar-shadow"></div>
		</div>
		<router-link to="/assessment" class="btn btn-brand">Take Assessment</router-link>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'Home',
	components: {
		HelloWorld
	}
}
</script>
<style lang="scss">
.home {
	display: inline-flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	min-height: 80vh;
	justify-content: center;
	
	.slogan {
		margin-top: 0;
		font-size: 3rem;
	}
	
	@media (max-width: 767px) {
		.slogan {
			font-size: 2rem;
		}
	}
	@media (max-width: 360px) {
		.slogan {
			font-size: 1.8rem;
		}
	}
}

.fedo-avatar-wrapper {
	width: 100px;
	height: 100%;
	margin: 3rem auto;
	
	.fedo-avatar-container {
		box-sizing: border-box;
		overflow: hidden;
		transform: translatey(0px);
		animation: float 6s ease-in-out infinite;
		
		img {
			width: 100%;
			height: auto;
			min-height: 177px;
		}
	}
	
	.fedo-avatar-shadow {
		height: 20px;
		width: 90%;
		border-radius: 50%;
		box-shadow: 0 3px 12px -2px #0000004f;
		background-color: #00000024;
		animation: shadow 6s ease-in-out infinite;
		margin: -0.35rem auto 0;
	}
}


@keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
}

@keyframes shadow {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(0.5);
	}
	100% {
		transform: scale(1);
	}
}
</style>
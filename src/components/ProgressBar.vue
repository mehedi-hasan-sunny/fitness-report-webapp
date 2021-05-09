<template>
	<div class="progress">
		<div class="progress-bar" :style="'width: '+ completion +'%'"></div>
	</div>
</template>

<script>
export default {
	name: "ProgressBar",
	props: {
		completion: {
			type: Number,
			default: 0,
			validator: function (value) {
				return value >= 0 && value <= 100
			}
		}
	}
}
</script>

<style scoped>
@-webkit-keyframes progress-bar-animate {
	from {
		background-position: 40px 0;
	}
	to {
		background-position: 0 0;
	}
}

@keyframes progress-bar-animate {
	from {
		background-position: 40px 0;
	}
	to {
		background-position: 0 0;
	}
}

.progress {
	overflow: hidden;
	height: 20px;
	border-radius: 10px;
	background-image: -webkit-linear-gradient(top, #ccc 0%, #ddd 100%);
	background-image: linear-gradient(to bottom, #ccc 0%, #ddd 100%);
	-webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
	-moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
	box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

.progress-bar {
	width: 0%;
	height: 100%;
	float: left;
	box-sizing: border-box;
	background-color: #472f91;
	background-size: 40px 40px;
	border-radius: 10px 0 0 10px;
	background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.2) 30%, rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0.1) 33%, transparent 33%, transparent 46%, rgba(0, 0, 0, 0.1) 46%, rgba(0, 0, 0, 0.1) 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 80%, rgba(0, 0, 0, 0.1) 80%, rgba(0, 0, 0, 0.1) 83%, transparent 83%, transparent 97%, rgba(0, 0, 0, 0.1) 97%, rgba(0, 0, 0, 0.1));
	background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.2) 30%, rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0.1) 34%, transparent 34%, transparent 46%, rgba(0, 0, 0, 0.1) 46%, rgba(0, 0, 0, 0.1) 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 80%, rgba(0, 0, 0, 0.1) 80%, rgba(0, 0, 0, 0.1) 84%, transparent 84%, transparent 96%, rgba(0, 0, 0, 0.1) 96%, rgba(0, 0, 0, 0.1));
	-webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.1);
	-moz-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.1);
	box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.1);
	-webkit-transition: width 200ms ease;
	-moz-transition: width 200ms ease;
	-o-transition: width 200ms ease;
	transition: width 200ms ease;
	-webkit-animation: progress-bar-animate 1s linear infinite;
	animation: progress-bar-animate 1s linear infinite;
}

</style>
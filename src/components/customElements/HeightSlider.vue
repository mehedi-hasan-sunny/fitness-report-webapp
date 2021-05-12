<template>
	<div class="height-slider-container">
		<div class="row align-center justify-center">
			<div class="col-4">
				<span class="d-block text-right" style="font-size: 1.5rem;">{{ height }}</span>
			</div>
			
			<div class="col-4">
				<div class="position-relative" style="display: table">
					<div class="text-center height-slider">
						<input v-bind="$attrs" :step="step" type="range" class="vertical-slider" :min="min" :max="max" id="heightSlider"
						       v-model="modelValue">
						<div id="tickmarks">
							<div :value="sliderValue" :key="index" v-for="(sliderValue, index) in sliderArray"
							        :class="parseFloat(modelValue) >= parseFloat(sliderValue) ? 'filled' : null"></div>
						</div>
					
					</div>
				</div>
			</div>
			
			<div class="col-4 text-left">
			<span class="text-center">
					<span style="font-size: 1.5rem;">	{{ modelValue }}</span>
				<br>
				<small> cms</small>
			</span>
			</div>
		</div>
	</div>
	
</template>

<script>
export default {
	name: "HeightSlider",
	props: {
		value: [String, Number, Array],
		min: {
			type: [Number, String],
			default: 0
		},
		max: {
			type: [Number, String],
			default: 0
		},
		step: {
			type: [Number, String],
			default: 0.1
		},
		valueText: String
	},
	computed: {
		modelValue: {
			get() {
				return this.value
			},
			set(value) {
				this.$emit('input', value);
			}
		},
		height() {
			let realFeet = ((this.value * 0.393700) / 12);
			let feet = Math.floor(realFeet);
			let inches = Math.floor(parseFloat(((realFeet - feet) * 12).toFixed(2)));
			return inches === 12 ? feet + 1 + "'" : feet + "'" + inches + '" ';
		},
		sliderArray() {
			let arr = [];
			for (let i = parseFloat(this.min); i <= parseFloat(this.max); i += parseFloat(this.step)) {
				arr.push(i.toFixed(2));
			}
			return arr
		},
	},
	mounted() {
		function stopScrolling( touchEvent ) {
			if (touchEvent.target.id === "heightSlider")
			{
				document.body.style.overflowY = 'hidden';
			}
		}
		function setScrolling( touchEvent ) {
			if (touchEvent.target.id === "heightSlider")
			{
				document.body.removeAttribute('style');
			}
		}
		document.addEventListener( 'touchmove' , stopScrolling , false );
		document.addEventListener( 'touchstart' , stopScrolling , false );
		document.addEventListener( 'touchend' , setScrolling , false );
	}
}
</script>
<style lang="scss">
.height-slider {
	//padding: 50% 0;
	width: 390px;
	position: relative;
	left: -35%;
	top: -10rem;
	
	.vertical-slider {
		display: block;
		transform-origin: top center;
		transform: rotate(-90deg) translate(-49%);
		//margin-top: -50%;
		white-space: nowrap;
		background: transparent;
	}
	
	input[type="range"] {
		-webkit-appearance: none;
		width: 100%;
		position: relative;
		z-index: 1;
		background-color: transparent;
		-webkit-tap-highlight-color: transparent;
		margin: 0;
	}
	_::-webkit-full-page-media, _:future, :root input[type=range] {
		width: 100%;
		position: relative;
		z-index: 1;
		background: transparent;
		background-color: transparent;
	}
	
	input[type="range"]::-webkit-slider-runnable-track {
		width: 100%;
		height: 1.5rem;
		cursor: pointer;
		background: transparent;
		background-color: transparent;
		overflow: hidden;
	}
	input[type="range"]::-moz-range-track {
		width: 100%;
		height: 1.5rem;
		cursor: pointer;
		background-color: transparent;
		overflow: hidden;
	}
	input[type="range"]::-ms-fill-lower,
	input[type="range"]::-ms-fill-upper {
		background: transparent;
	}
	
	input[type="range"]::-webkit-slider-thumb {
		height: 1.5rem;
		width: 0.4rem;
		cursor: pointer;
		-webkit-appearance: none;
		background-color: #472f91;
		border: 0;
	}
	
	//input[type="range"]::-webkit-slider-thumb:hover {
	//	//background-color: #472F916F;
	//	//box-shadow: 0 1px 6px 0 #472F916F;
	//}
	
	input[type="range"]::-moz-range-thumb {
		height: 1.5rem;
		width: 0.4rem;
		cursor: pointer;
		background-color: #472f91;
		border: 0;
		
	}
	
	#tickmarks {
		display: flex;
		justify-content: space-between;
		transform: rotate(-90deg) translate(-41.5%, 132%);
		white-space: nowrap;
		background: transparent;
		position: relative;
		z-index: 0;
		width: calc(100% - 0.4rem);
	}
	
	#tickmarks div {
		border-right: 1px solid #d3d3d3;
		min-height: 0.75rem;
	}
	
	//#tickmarks div:first-child {
	//	opacity: 0;
	//}
	
	
	#tickmarks div.filled {
		border-color: #7f67caf7;
	}
	
	input[type="range"]:focus {
		outline: none;
	}
}
@media(max-width: 350px){
	.height-slider{
		left: -40%;
	}
}
@media(max-width: 480px){
	.height-slider-container{
		margin-left: -2.5rem;
	}
}
</style>
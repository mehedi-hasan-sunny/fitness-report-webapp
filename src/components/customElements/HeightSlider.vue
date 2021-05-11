<template>
	<div class="height-slider-container">
		<div class="row align-center justify-center">
			<div class="col-4">
				<span class="d-block text-right" style="font-size: 1.5rem;">{{ height }}</span>
			</div>
			
			<div class="col-4">
				<div class="position-relative" style="display: table">
					<div class="text-center height-slider">
						<input v-bind="$attrs" :step="step" type="range" class="vertical-slider" :min="min" :max="max"
						       v-model="modelValue" list="tickmarks">
						<datalist id="tickmarks">
							<option :value="sliderValue" :key="index" v-for="(sliderValue, index) in sliderArray"
							        :class="parseFloat(modelValue) >= parseFloat(sliderValue) ? 'filled' : null"></option>
						</datalist>
					
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
			let inches = Math.round((realFeet - feet) * 12);
			return inches === 12 ? feet + 1 + "'" : feet + "'" + inches + '" ';
		},
		sliderArray() {
			let arr = [];
			for (let i = parseFloat(this.min); i <= parseFloat(this.max); i += parseFloat(this.step)) {
				arr.push(i.toFixed(2));
			}
			return arr
		},
	}
}
</script>
<style lang="scss">
.height-slider {
	//padding: 50% 0;
	height: 0;
	position: relative;
	left: -35%;
	top: -8rem;
	
	.vertical-slider {
		display: block;
		transform-origin: top center;
		transform: rotate(-90deg) translate(-50%);
		//margin-top: -50%;
		white-space: nowrap;
	}
	
	input[type="range"] {
		-webkit-appearance: none;
		width: 100%;
		position: relative;
		z-index: 1;
		background-color: transparent;
		//writing-mode: bt-lr; /* IE */
		//-webkit-appearance: slider-vertical; /* WebKit */
	}
	
	input[type="range"]::-webkit-slider-runnable-track {
		width: 100%;
		height: 1.5rem;
		cursor: pointer;
		background-color: transparent;
		overflow: hidden;
	}
	
	input[type="range"]::-webkit-slider-thumb {
		height: 1.5rem;
		width: 1px;
		cursor: pointer;
		-webkit-appearance: none;
		border-right: 2px solid #472f91;
		border-left: 2px solid #472f91;
	}
	
	input[type="range"]::-webkit-slider-thumb:hover {
		//background-color: #472F916F;
		box-shadow: 0 1px 6px 0 #472F916F;
	}
	
	input[type="range"]::-moz-range-thumb {
		height: 1.5rem;
		width: 1px;
		cursor: pointer;
		border-right: 2px solid #472f91;
		border-left: 1px solid #472f91;
	}
	
	#tickmarks {
		display: flex;
		justify-content: space-between;
		transform-origin: top center;
		transform: rotate(-90deg) translate(calc(-50% - -1.4rem));
		white-space: nowrap;
	}
	
	#tickmarks option {
		position: relative;
		top: 0.5rem;
		//border-left: 1px solid black;
		border-right: 1px solid #d3d3d3;
		min-height: 0.75rem;
		z-index: 0;
	}
	
	#tickmarks option.filled {
		border-color: #7f67caf7;
	}
	
	input[type="range"]:focus {
		outline: none;
	}
}
@media(max-width: 480px){
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
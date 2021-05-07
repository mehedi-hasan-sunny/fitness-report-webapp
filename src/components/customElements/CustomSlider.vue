<template>
	<div class="text-center">
		<div class="my-4">
			<img :src="image" alt="" class="mb-3 custom-slider-image" v-if="image">
			<span class="d-block slider-text" :style="items ? 'font-size: 1.5rem;' : ''">{{ showValue }}</span>
			<small v-if="height" class="d-block mt-3" style="font-size: 1.5rem;">
				{{ heightInCm }}
			</small>
		</div>
		
		<input v-bind="$attrs" type="range" :min="min" :max="max" v-model="modelValue" class="slider">
	</div>
</template>

<script>
export default {
	name: "CustomSlider",
	props: {
		value: [String, Number, Array],
		min: [Number, String],
		max: [Number, String],
		height: Boolean,
		valueText: String,
		items: Array,
		image: String
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
		showValue() {
			if (this.height) {
				let realFeet = ((this.value * 0.393700) / 12);
				let feet = Math.floor(realFeet);
				let inches = Math.round((realFeet - feet) * 12);
				return inches == 12 ? feet + 1 + "'" : feet + "'" + inches + '" ';
			} else if (this.items && this.items.length) {
				return this.items[this.value - 1]
			} else if (this.valueText) {
				return this.value + ' ' + this.valueText
			}
			return this.value
		},
		heightInCm() {
			return this.value + 'cms'
		}
	}
}
</script>

<style lang="scss">
.slider-text {
	font-size: 5.5rem;
}
.custom-slider-image{
	max-width: 6.5rem;
}

.slider {
	-webkit-appearance: none;
	width: 100%;
	height: 8px;
	background: #d3d3d3;
	border-radius: 10px;
	outline: none;
	opacity: 0.8;
	-webkit-transition: .2s;
	transition: opacity .2s;
}

.slider:hover {
	opacity: 1;
}

.slider::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 20px;
	height: 20px;
	background: #7f67caf7;
	border-radius: 50%;
	cursor: pointer;
}

.slider::-moz-range-thumb {
	width: 20px;
	height: 20px;
	background: #7f67caf7;
	border-radius: 50%;
	cursor: pointer;
}
</style>
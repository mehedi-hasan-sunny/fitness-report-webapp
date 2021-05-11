<template>
	<div class="step-container position-relative">
		<VueRoundSlider style="margin-bottom: -1rem;"  rangeColor="#472f91" keyboardAction="false" showTooltip="true" start-angle="315" end-angle="+270" min="30" max="240" step="0.5" radius="120" v-model="weight"></VueRoundSlider>
	</div>
</template>

<script>
import CustomSlider from "../customElements/CustomSlider";
import setStepData from "../../mixins/setStepData";
import VueRoundSlider from "vue-round-slider";

export default {
	name: "Step5",
	components: {
		CustomSlider,
		VueRoundSlider
	},
	computed: {
		weight: {
			get() {
				return this.stepData.weight;
			},
			set(value) {
				this.setStep({weight: value})
			}
		},
	},
	mixins:[setStepData],
	mounted() {
		let slider = document.querySelector('.rs-tooltip.rs-tooltip-text.rs-edit')
		slider.style.marginLeft = '-60px'
		slider.style.fontFamily = ' \'Rubik\', sans-serif';
		slider.style.fontWeight = '400';
		slider.style.fontSize = '3rem'
		slider.style.width = '120px'
		slider.style.textAlign = 'center'
		slider.classList.remove('rs-edit')
		let sliderContainer = document.querySelector('.rs-container.rs-full')
		let ele =  document.createElement("span")
		ele.textContent = "kgs";
		ele.style.position = "relative";
		ele.style.top = "65%";
		ele.style.fontSize = "1.5rem";
		sliderContainer.appendChild(ele)
	}
	
}
</script>
<style>
svg > path:first-child{
	stroke-dasharray: 4;
}
</style>
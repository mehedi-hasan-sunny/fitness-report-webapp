<template>
	<div class="step-container">
		<HeightSlider min="120" max="220" step="1" v-model="height"/>
	</div>
</template>

<script>
import setStepData from "../../mixins/setStepData";
import HeightSlider from "../customElements/HeightSlider";

export default {
	name: "Step4",
	components: {
		HeightSlider
	},
	computed: {
		height: {
			get() {
				return this.stepData.height ;
			},
			set(value) {
				this.setStep({height: value})
			}
		},
	},
	mixins:[setStepData]
}
</script>
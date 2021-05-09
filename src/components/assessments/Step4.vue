<template>
	<div class="step-container">
		<CustomSlider height class="mb-4" min="91.44" max="243.84" step="2.54" v-model="height"/>
	</div>
</template>

<script>
import CustomSlider from "../customElements/CustomSlider";
import setStepData from "../../mixins/setStepData";

export default {
	name: "Step4",
	components: {
		CustomSlider
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
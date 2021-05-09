<template>
	<div class="step-container">
		<CustomSlider class="mb-4" min="30" max="240" step="0.5" value-text="kgs" v-model="weight"/>
	</div>
</template>

<script>
import CustomSlider from "../customElements/CustomSlider";
import setStepData from "../../mixins/setStepData";

export default {
	name: "Step5",
	components: {
		CustomSlider
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
	mixins:[setStepData]
	
}
</script>
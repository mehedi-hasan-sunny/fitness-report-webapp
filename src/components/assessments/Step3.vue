<template>
	<div class="step-container">
		<h3 class="font-weight-normal mb-4">Your age in years</h3>
		<CustomSlider class="mb-4" min="18" max="100" v-model="age"/>
	</div>
</template>

<script>
import CustomSlider from "../customElements/CustomSlider";
import setStepData from "../../mixins/setStepData";

export default {
	name: "Step3",
	components: {
		CustomSlider
	},
	computed: {
		age: {
			get() {
				return this.stepData.age;
			},
			set(value) {
				this.setStep({age: value})
			}
		},
	},
	mixins:[setStepData]
}
</script>
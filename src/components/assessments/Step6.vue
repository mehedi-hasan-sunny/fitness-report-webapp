<template>
	<div class="container">
		<div class="row">
			<CustomRadio value="Non Smoker" class="col-6 mb-4" label="Non Smoker"
			             :image-src="require('@/assets/images/non-smoker.png')"
			             v-model="smoker" image-class="smoker-image"/>
			<CustomRadio value="Former Smoker" class="col-6 mb-4" label="Former Smoker"
			             :image-src="require('@/assets/images/former-smoker.png')"
			             v-model="smoker" image-class="smoker-image"/>
			<CustomRadio value="<5 Per Week" class="col-6" label="<5 Per Week"
			             :image-src="require('@/assets/images/light-smoker.png')"
			             v-model="smoker" image-class="smoker-image"/>
			<CustomRadio value=">10 Per Week" class="col-6" label=">10 Per Week"
			             :image-src="require('@/assets/images/heavy-smoker.png')"
			             v-model="smoker" image-class="smoker-image"/>
		</div>
	</div>
</template>

<script>
import CustomRadio from "../customElements/CustomRadio";
import setStepData from "../../mixins/setStepData";

export default {
	name: "Step6",
	components: {
		CustomRadio
	},
	computed: {
		smoker: {
			get() {
				return this.stepData.smoker;
			},
			set(value) {
				this.setStep({smoker: value});
				this.$emit('gotoNextStep');
			}
		},
	},
	mixins: [setStepData]
}
</script>
<style>
.smoker-image {
	height: auto !important;
	width: 3.5rem !important;
	max-width: 3.5rem !important;
}
</style>
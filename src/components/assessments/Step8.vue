<template>
	<div>
		<div class="d-inline-flex">
			<CustomRadio value="regular" class="mr-3" label="Regular" :image-src="require('@/assets/images/exercise.png')" v-model="exercise"/>
			<CustomRadio value="never" class="ml-3" label="Never" :image-src="require('@/assets/images/never.png')" v-model="exercise"/>
		</div>
	</div>
</template>

<script>
import CustomRadio from "../customElements/CustomRadio";
import setStepData from "../../mixins/setStepData";

export default {
	name: "Step8",
	components: {
		CustomRadio
	},
	computed: {
		exercise: {
			get() {
				return this.stepData.exercise;
			},
			set(value) {
				this.setStep({exercise: value});
				this.$emit('gotoNextStep');
			}
		},
	},
	mixins: [setStepData]
}
</script>
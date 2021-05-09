<template>
	<div class="row drinker">
		<CustomRadio value="Non Smoker" class="col-6 mb-3" label="I don't Drink"
		             :image-src="require('@/assets/images/non-drinker.png')"
		             v-model="drinker" image-class="smoker-image"/>
		<CustomRadio value="Occasional Drinker (1-3 drink in month)" class="col-6 mb-3"
		             label="Occasional Drinker (1-3 drink in month)"
		             :image-src="require('@/assets/images/occasional-drinker.png')"
		             v-model="drinker" image-class="smoker-image"/>
		<CustomRadio value="Regular Drinker (>5 in week)" class="col-6" label="Regular Drinker (>5 in week)"
		             :image-src="require('@/assets/images/regular-drinker.png')"
		             v-model="drinker" image-class="smoker-image"/>
		<CustomRadio value="Binge Drinker" class="col-6" label="Binge Drinker"
		             :image-src="require('@/assets/images/binge-drinker.png')"
		             v-model="drinker" image-class="smoker-image"/>
	</div>
</template>

<script>

import CustomRadio from "../customElements/CustomRadio";
import setStepData from "../../mixins/setStepData";

export default {
	name: "Step7",
	components: {
		CustomRadio
	},
	computed: {
		drinker: {
			get() {
				return this.stepData.drinker;
			},
			set(value) {
				this.setStep({drinker: value});
				this.$emit('gotoNextStep');
			}
		},
	},
	mixins: [setStepData]
}
</script>

<style lang="scss">
.drinker {
	label {
		.card {
			max-width: 6.75rem;
			margin: 0 auto;
		}
		
		span:nth-child(2) {
			max-width: 8.750rem;
			//(2){
			//	max-width: 9.5rem;
			//}
		}
	}
}

</style>
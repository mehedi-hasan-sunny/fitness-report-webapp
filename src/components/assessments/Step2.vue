<template>
	<div>
		<div class="d-inline-flex">
			<CustomRadio value="male" class="mr-3" card-class="px-4" label="Male" :image-src="require('@/assets/images/male.png')"
			             v-model="gender"/>
			<CustomRadio value="female" card-class="px-4" label="Female" :image-src="require('@/assets/images/female.png')" v-model="gender"/>
		</div>
	</div>
</template>

<script>
import CustomRadio from "../customElements/CustomRadio";
import setStepData from "../../mixins/setStepData";

export default {
	name: "Step2",
	components: {
		CustomRadio
	},
	computed: {
		gender: {
			get() {
				return this.stepData.gender;
			},
			set(value) {
				this.setStep({gender: value});
				this.$emit('gotoNextStep');
			}
		},
	},
	mixins:[setStepData],
}
</script>
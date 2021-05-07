<template>
	<div>
		<h3 class="font-weight-normal mb-4">Do you have any medical history?</h3>
		<img :src="require('@/assets/images/doctor.png')" alt="" class="medical-history-image">
		<div class="d-inline-flex">
			<label for="medical-yes" class="custom-radio mr-2">
				<input type="radio" id="medical-yes" value="yes" v-model="medicalHistory"/>
				Yes
			</label>
			<label for="medical-no" class="custom-radio ml-2">
				<input type="radio" id="medical-no" value="no" v-model="medicalHistory"/>
				No
			</label>
		</div>
	</div>
</template>

<script>
import CustomRadio from "../customElements/CustomRadio";

export default {
	name: "Step9",
	components: {
		CustomRadio
	},
	data() {
		return {
			medicalHistory: '',
		}
	}
}
</script>
<style lang="scss">
.medical-history-image {
	display: block;
	margin: 0 auto 1rem;
	max-width: 6.5rem;
}
</style>
<template>
	<div>
		<img :src="require('@/assets/images/doctor.png')" alt="" class="medical-history-image"
		     v-if="!hasMedicalHistory || hasMedicalHistory === 'no'">
		<h3 class="font-weight-normal mb-2">Do you have medical history?</h3>
		<div class="d-inline-flex">
			<label for="medical-yes" class="custom-radio mr-2">
				<input type="radio" id="medical-yes" value="yes" v-model="hasMedicalHistory"/>
				Yes
			</label>
			<label for="medical-no" class="custom-radio ml-2">
				<input type="radio" id="medical-no" value="no" v-model="hasMedicalHistory"/>
				No
			</label>
		</div>
		<div class="mt-3" v-if="hasMedicalHistory === 'yes'">
			<CustomCheckbox :label="medicalHistoryItem" :value="medicalHistoryItem" :key="index"
			                v-for="(medicalHistoryItem, index) in medicalHistories" v-model="medicalHistory"/>
		</div>
	
	</div>
</template>

<script>

import CustomCheckbox from "../customElements/CustomCheckbox";
import setStepData from "../../mixins/setStepData";

export default {
	name: "Step9",
	components: {
		CustomCheckbox
	},
	data() {
		return {
			medicalHistories: [
				'High Cholesterol',
				'Respiratory Issues',
				'Heart Related',
				'Liver',
				'Hypertension',
				'Diabetes',
				'Asthma',
				'Kidney',
			]
		}
	},
	computed: {
		hasMedicalHistory: {
			get() {
				return this.stepData.hasMedicalHistory;
			},
			set(value) {
				if(value === 'no'){
					this.setStep({medicalHistory: []});
				}
				this.setStep({hasMedicalHistory: value});
			}
		},
		medicalHistory: {
			get() {
				return this.stepData.medicalHistory;
			},
			set(value) {
				this.setStep({medicalHistory: value});
			}
		},
	},
	mixins: [setStepData]
}
</script>
<style lang="scss">
.medical-history-image {
	display: block;
	margin: 0 auto 1rem;
	max-width: 6.5rem;
}
</style>
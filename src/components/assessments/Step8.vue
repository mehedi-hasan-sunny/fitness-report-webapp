<template>
	<div>
		<h3 class="font-weight-normal mb-4">Your Exercise</h3>
		<div class="d-inline-flex">
			<CustomRadio value="regular" class="mr-3" label="Regular" :image-src="require('@/assets/images/exercise-1.png')" v-model="gender"/>
			<CustomRadio value="never" label="Never" :image-src="require('@/assets/images/exercise-2.png')" v-model="gender"/>
		</div>
	</div>
</template>

<script>
import CustomRadio from "../customElements/CustomRadio";

export default {
	name: "Step8",
	components: {
		CustomRadio
	},
	data() {
		return {
			gender: '',
			genders: [
				{
					value: 'male',
					image: require("@/assets/images/male.svg"),
				},
				{
					value: 'female',
					image: require("@/assets/images/female.svg"),
				}
			]
		}
	}
}
</script>
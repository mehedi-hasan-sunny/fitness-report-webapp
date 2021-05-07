<template>
	<div class="step-container">
		<h3 class="font-weight-normal mb-4">Your are a</h3>
		<CustomSlider class="mb-4" min="1" max="4" step="1" :image="require('@/assets/images/smoking.png')" :items="items" v-model="range"/>
	</div>
</template>

<script>
import CustomSlider from "../customElements/CustomSlider";

export default {
	name: "Step6",
	components: {
		CustomSlider
	},
	data() {
		return {
			range: 1,
			items: [
				'Non Smoker',
				'Former  Smoker',
				'<5 Per Week',
				'>10 Per Week',
			]
		}
	}
}
</script>
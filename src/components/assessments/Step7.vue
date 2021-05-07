<template>
	<div class="step-container">
		<h3 class="font-weight-normal mb-4">Your are a</h3>
		<CustomSlider class="mb-4" min="1" max="4" step="1" :image="require('@/assets/images/drinker.png')" :items="items" v-model="range"/>
	</div>
</template>

<script>
import CustomSlider from "../customElements/CustomSlider";

export default {
	name: "Step7",
	components: {
		CustomSlider
	},
	data() {
		return {
			range: 1,
			items: [
				"I don't Drink",
				'Occasional Drinker (1-3 drink in month)',
				'Regular Drinker (>5 in week)',
				'Binge Drinker',
			]
		}
	}
}
</script>
<template>
	<div class="step-container">
		<h3 class="font-weight-normal mb-4">Your age in years</h3>
		<CustomSlider class="mb-4" min="18" max="120" v-model="range"/>
	</div>
</template>

<script>
import CustomSlider from "../customElements/CustomSlider";

export default {
	name: "Step3",
	components: {
		CustomSlider
	},
	data() {
		return {
			range: 18
		}
	}
}
</script>
<template>
	<div class="step-container">
		<h3 class="font-weight-normal mb-4">Your height in feet and inches</h3>
		<CustomSlider height class="mb-4" min="91.44" max="243.84" step="2.54" v-model="range"/>
	</div>
</template>

<script>
import CustomSlider from "../customElements/CustomSlider";

export default {
	name: "Step4",
	components: {
		CustomSlider
	},
	data() {
		return {
			range: 170.18
		}
	}
}
</script>
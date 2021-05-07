<template>
	<div class="step-container">
		<h3 class="font-weight-normal mb-4">Your weight in kgs</h3>
		<CustomSlider class="mb-4" min="30" max="240" step="0.5" value-text="kgs" v-model="range"/>
	</div>
</template>

<script>
import CustomSlider from "../customElements/CustomSlider";

export default {
	name: "Step5",
	components: {
		CustomSlider
	},
	data() {
		return {
			range: 65
		}
	}
}
</script>
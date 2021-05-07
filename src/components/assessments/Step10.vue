<template>
	<div>
		<h3 class="font-weight-normal mb-4">Your gender</h3>
		<div class="d-inline-flex">
			<CustomRadio value="tablet" label="Tablet" class="mr-3" image-class="medication-image" card-class="pa-3"
			             :image-src="require('@/assets/images/tablet.png')" v-model="medication"/>
			<CustomRadio value="inhaler" class="mr-3" label="Inhaler" image-class="medication-image" card-class="pa-3"
			             :image-src="require('@/assets/images/inhaler.png')"
			             v-model="medication"/>
			<CustomRadio value="injection" label="Injection" image-class="medication-image" card-class="pa-3"
			             :image-src="require('@/assets/images/injection.png')"
			             v-model="medication"/>
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
			medication: '',
		}
	}
}
</script>
<style>
.medication-image {
	height: auto !important;
	max-width: 3.5rem !important;
}
</style>
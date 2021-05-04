<template>
	<div class="d-inline-flex">
		<div class="card mx-3">
			<img src="../../../src/assets/images/male.svg" alt="Male" class="custom-checkbox-image">
			<br>
			<span class="mt-3">Male</span>
		</div>
		<div class="card mx-3">
			<img src="../../../src/assets/images/female.svg" alt="Female" class="custom-checkbox-image">
			<br>
			<span class="mt-3">Female</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "Step2"
}
</script>

<style lang="scss">
.custom-checkbox-image {
	max-height: 15rem;
	width: 100%;
}
</style>
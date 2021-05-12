<template>
	<div>
		<label :for="uniqueId" class="custom-radio">
			<input type="radio" class="d-none mb-0" :id="uniqueId" :value="value" v-bind="$attrs"
			       :checked="isChecked" @change="$emit('change',$event.target.value)" @click="$emit('change',$event.target.value)"/>
			<slot name="label">
				<div class="card outlined custom-checkbox-image-card" :class="[isChecked ? 'checked' : '', cardClass]">
					<img :src="imageSrc" alt="Checkbox image" class="custom-checkbox-image" :class="imageClass">
				</div>
				<span class="d-block text-center mt-3" :class="isChecked ? 'checked' : ''">{{ label }}</span>
			</slot>
		</label>
	
	</div>
</template>

<script>
export default {
	name: "CustomRadio",
	model: {
		prop: 'modelValue',
		event: 'change'
	},
	props: {
		checked: Boolean,
		label: String,
		modelValue: {
			default: ''
		},
		value: [String, Number, Boolean],
		imageSrc: String,
		cardClass: String,
		imageClass: String,
	},
	data() {
		return {
			uniqueId: Math.random().toString(16).slice(4)
		}
	},
	computed: {
		isChecked() {
			return this.modelValue === this.value
		}
	},
	
}
</script>
<style lang="scss">
.custom-radio {
	.checked{
		color: #472f91;
		font-weight: 500;
	}
	&:hover {
		cursor: pointer;
		.card {
			box-shadow: 0 1px 6px 0 #20212447;
		}
	}
	.custom-checkbox-image-card {
		padding: 1rem 1.5rem;
		.custom-checkbox-image {
			height: 12rem;
			max-width: 6rem;
			object-fit: contain;
		}
		&.checked{
			border-color: #472f9169;
			box-shadow: 0 1px 6px 0 #472f91bd;
		}
		
		@media (max-width: 380px) {
			.custom-checkbox-image {
				max-width: 4.4rem;
				height: auto;
				max-height: 9.5rem;
			}
		}
	}
	
}

</style>
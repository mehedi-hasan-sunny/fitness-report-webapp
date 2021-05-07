<template>
	<div>
		<input type="radio" class="d-none" :id="uniqueId" :value="value" v-bind="$attrs" v-on="$listeners"
		       :checked="isChecked" @change="$emit('change',$event.target.value)"/>
		<label :for="uniqueId">
			<slot name="label">
				{{ label }}
			</slot>
		</label>
	
	</div>
</template>

<script>
export default {
	name: "VRadio",
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
		value: [String,Number.Boolean]
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
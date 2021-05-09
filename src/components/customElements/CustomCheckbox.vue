<template>
	<div>
		<label :for="uniqueId" class="custom-checkbox">
			<input type="checkbox" class="d-none mb-0" :id="uniqueId" :value="value" v-bind="$attrs"
			       :checked="isChecked" @change="updateInput" @blur="$emit('blur')"/>
			<div class="custom-checkbox-label">
				<slot name="label">
					<span>	{{ label }}</span>
				</slot>
				<span class="material-icons-outlined ml-3" :class=" iconChecked ? 'checked' : 'not-checked'">{{ iconChecked ? 'check_circle' : 'radio_button_unchecked' }}</span>
			</div>
			
		</label>
	
	</div>
</template>

<script>
export default {
	name: "CustomCheckbox",
	model: {
		prop: 'modelValue',
		event: 'change'
	},
	props: {
		// checked: Boolean,
		label: String,
		value: [String, Number, Boolean, Array],
		imageSrc: String,
		cardClass: String,
		imageClass: String,
		modelValue: {
			default: ''
		},
		trueValue: {default: true},
		falseValue: {default: false}
		
	},
	data() {
		return {
			uniqueId: Math.random().toString(16).slice(4),
			iconChecked: false
		}
	},
	computed: {
		isChecked() {
			if (this.modelValue instanceof Array) {
				let check = this.modelValue.includes(this.value);
				this.iconChecked = check;
				return check;
			}
			return this.modelValue === true
		}
	},
	methods: {
		updateInput(event) {
			let isChecked = event.target.checked;
			if (this.modelValue instanceof Array) {
				let newValue = [...this.modelValue];
				isChecked ? newValue.push(event.target.value) : newValue.splice(newValue.indexOf(this.value), 1);
				this.$emit('change', newValue);
				this.iconChecked = isChecked
			} else {
				this.iconChecked = !!isChecked
				this.$emit('change', !!isChecked);
			}
		}
	}
	
}
</script>
<style lang="scss">
@import "src/assets/sass/abstracts/variables";
.custom-checkbox {
	padding: 0.35rem 0.75rem;
	background-color: #fff;
	border-radius: 3rem;
	border: 1px solid #d2d2d2;
	.custom-checkbox-label{
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
		min-width: 12.5rem;
	}
	span{
		vertical-align: middle;
	}
	.checked{
		color: $success-color;
	}
	.not-checked{
		color: grey;
	}
	&:hover {
		box-shadow: 0 1px 6px 0 #20212447;
		cursor: pointer;
	}
}
</style>
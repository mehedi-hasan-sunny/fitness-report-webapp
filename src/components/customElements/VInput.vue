<template>
	<input v-model="modelValue" :type="!$attrs.type ? 'text' : $attrs.type" class="form-control" v-bind="$attrs"/>
</template>

<script>
export default {
	name: "VInput",
	props: {
		value: [String, Number]
	},
	computed: {
		modelValue: {
			get() {
				return this.value
			},
			set(value) {
				this.$emit('input', value);
			}
		},
	}
}
</script>

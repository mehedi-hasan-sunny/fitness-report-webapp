<template>
	<div :id="id" class="modal" :ref="ref">
		
		<!-- Modal content -->
		<div class="modal-content slide-top rounded" v-bind="$attrs">
			<span class="close" v-if="!hideCloseButton">
				<span class="material-icons" @click="toggleModal; modelValue = false;">close</span>
			</span>
			<div class="modal-body">
				<slot name="default">
				</slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Modal",
	inheritAttrs: false,
	props: {
		id: [String, Number],
		value: Boolean,
		hideCloseButton: Boolean,
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
	},
	watch: {
		value: {
			handler(value) {
				this.toggleModal(value)
			}
		},
	},
	data() {
		return {
			ref: Math.random().toString(16).slice(4)
		}
	},
	methods: {
		toggleModal(value) {
			this.$refs[this.ref].style.display = value ? "block" : "none";
		}
	},

	mounted() {
		let instance = this;
		if(this.value === true){
			instance.toggleModal(this.value);
		}
		window.onclick = function (event) {
			if (event.target === instance.$refs[instance.ref]) {
				instance.toggleModal(false);
				instance.modelValue = false;
			}
		}
	}
}
</script>

<style scoped>
.modal-content.slide-top{
	position: relative;
	animation: slide-top 0.4s;
}
@keyframes slide-top{
	0% {
		top: -300px;
		opacity: 0;
	}
	
	100% {
		top: 0;
		opacity: 1;
	}
}
</style>
<template>
	<div class="step-container">
		<img :src="require('@/assets/images/intro.png')" alt="" class="intro-image">
		<h3 class="font-weight-normal mt-4 mb-3">What shall we call you?</h3>
		<div class="row align-center">
			<div class="col-12 mx-auto">
				<v-input id="name" v-model="name"/>
			</div>
		</div>
	</div>
</template>

<script>
import VInput from "../customElements/VInput";
import {mapGetters, mapActions} from 'vuex';

export default {
	name: "Step1",
	components: {
		VInput
	},
	computed: {
		...mapGetters({
			stepData: 'stepData',
		}),
		name: {
			get() {
				return this.stepData.name;
			},
			set(value) {
				this.setStep({name: value})
			}
		},
		email: {
			get() {
				return this.stepData.email;
			},
			set(value) {
				this.setStep({email: value})
			}
		},
		phoneNumber: {
			get() {
				return this.stepData.phoneNumber;
			},
			set(value) {
				this.setStep({phoneNumber: value})
			}
		},
		profilePicture: {
			get() {
				return this.stepData.profilePicture;
			},
			set(value) {
				this.setStep({profilePicture: value})
			}
		},
	},
	data: () => ({
		imageSrc: require('@/assets/images/avatar.svg'),
	}),
	methods: {
		...mapActions(['setStep']),
		readURL(event) {
			let files = event.target.files;
			if (files && files[0]) {
				let reader = new FileReader();
				reader.onload = (e) => {
					this.imageSrc = e.target.result;
				};
				reader.readAsDataURL(files[0]);
				this.profilePicture = this.imageSrc;
			}
		}
		
	},
	// watch: {
	// 	name: {
	// 		handler(value) {
	// 			this.setStep({name: value})
	// 		},
	// 		immediate: true
	// 	},
	// 	email: {
	// 		handler(value) {
	// 			this.setStep({email: value})
	// 		},
	// 		immediate: true
	// 	},
	// 	phoneNumber: {
	// 		handler(value) {
	// 			this.setStep({phoneNumber: value})
	// 		},
	// 		immediate: true
	// 	},
	// 	profilePicture: {
	// 		handler(value) {
	// 			this.setStep({profilePicture: value})
	// 		},
	// 		immediate: true
	// 	},
	// }
}
</script>
<style lang="scss">
.custom-image-upload {
	padding: 0.5rem 1.25rem;
	border: 1px solid rgb(190, 190, 190);
	border-radius: 0.375rem;
	display: inline-block;
	
	&:hover {
		cursor: pointer;
	}
	
	input {
		display: none;
	}
}

//.image-preview {
//	width: 7rem;
//	height: 7rem;
//	border-radius: 50%;
//	border: 1px solid #cbbff1;
//	object-fit: contain;
//}

.intro-image {
	display: block;
	margin: 0 auto 1rem;
	max-width: 14rem;
}
</style>
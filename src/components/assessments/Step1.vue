<template>
	<div class="step-container">
		<h3 class="font-weight-normal mb-3">Upload your picture</h3>
		<div class="mb-3">
			<img id="blah" :src="imageSrc" alt="your image" class="image-preview"/>
		</div>
		<label for="imageInput" class="custom-image-upload mb-3">
			Choose Image
			<input type='file' id="imageInput" accept="image/*" @change="readURL"/>
		</label>
		
		<div class="d-flex mb-3 align-center">
			<label for="name" class="mr-3 w-35 text-left">
				Name
			</label>
			<v-input class="" id="name" v-model="name"/>
		</div>
		<div class="d-flex mb-3 align-center">
			<label for="phone-number" class="mr-3 w-35 text-left">
				Phone Number
			</label>
			<v-input id="phone-number" v-model="phoneNumber"/>
		</div>
		<div class="d-flex mb-3 align-center">
			<label for="email" class="mr-3 w-35 text-left">
				Email
			</label>
			<v-input id="email" type="email" v-model="email"/>
		</div>
		
	</div>
</template>

<script>
import VInput from "../customElements/VInput";

export default {
	name: "Step1",
	components: {
		VInput
	},
	data() {
		return {
			imageSrc: require('@/assets/images/avatar.svg'),
			name: '',
			phoneNumber: '',
			email: '',
		}
	},
	methods: {
		readURL(event) {
			let files = event.target.files;
			if (files && files[0]) {
				let reader = new FileReader();
				reader.onload = (e) => {
					this.imageSrc = e.target.result;
				};
				reader.readAsDataURL(files[0]);
			}
			console.log(this.imageSrc)
		}
		
	}
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

.image-preview {
	width: 7rem;
	height: 7rem;
	border-radius: 50%;
	border: 1px solid #cbbff1;
	object-fit: contain;
}

.w-35 {
	width: 35%;
}
</style>
<template>
	<div class="container text-center pt-3">
		<div class="assessment-container">
			<div class="card">
				<div class="card-title">
					<a href="javascript:void(0)" class="step-back" v-if="currentStep > 0" @click.prevent="gotoBackStep">
						<span class="material-icons-outlined">arrow_back</span></a>
					<small> Step {{ (currentStep + 1) + ' of ' + steps.length }}</small>
					<h2 class="font-weight-normal mt-4">{{ steps[currentStep].title }}</h2>
				</div>
				<div class="card-body">
					<div class="d-flex step-wrapper" :style="!steps[currentStep].showNext ? 'margin-bottom: 4.125rem;' : ''">
						<transition name="slide-fade" mode="out-in">
							<Component :is="'Step' + (currentStep+1)" @gotoNextStep="gotoNextStep"></Component>
						</transition>
					</div>
					<div class="step-container mt-3" v-if="steps[currentStep].showNext">
						<button class="btn btn-brand btn-block" v-if="currentStep < steps.length-1"
						        @click="gotoNextStep(currentStep, true)">
							Next
						</button>
						<button type="submit" v-else class="btn btn-brand btn-block" @click="isModalOpen=true; gotoReport()">
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
		<Modal v-model="isModalOpen">
			<div class="my-5 mx-5">
				<h3>Please wait</h3>
				<ProgressBar :completion="100"></ProgressBar>
			</div>
		</Modal>
	</div>
</template>

<script>
import Step1 from "../components/assessments/Step1";
import Step2 from "../components/assessments/Step2";
import Step3 from "../components/assessments/Step3";
import Step4 from "../components/assessments/Step4";
import Step5 from "../components/assessments/Step5";
import Step6 from "../components/assessments/Step6";
import Step7 from "../components/assessments/Step7";
import Step8 from "../components/assessments/Step8";
import Step9 from "../components/assessments/Step9";
import Step10 from "../components/assessments/Step10";
import Modal from "../components/Modal";
import ProgressBar from "../components/ProgressBar";

export default {
	name: "Assessment",
	components: {
		Step1,
		Step2,
		Step3,
		Step4,
		Step5,
		Step6,
		Step7,
		Step8,
		Step9,
		Step10,
		Modal,
		ProgressBar
	},
	data() {
		return {
			steps: [
				{
					title: 'Let us get acquainted',
					showNext: true,
					complete: true
				},
				{
					title: 'I am a...',
					showNext: false,
					complete: false
				},
				{
					title: 'My age is...',
					showNext: true,
					complete: false
				},
				{
					title: 'My height is...',
					showNext: true,
					complete: false
				},
				{
					title: 'My weight is...',
					showNext: true,
					complete: false
				},
				{
					title: 'You are a...',
					showNext: false,
					complete: false
				},
				{
					title: 'You are a...',
					showNext: false,
					complete: false
				},
				{
					title: 'You exercise...',
					showNext: false,
					complete: false
				},
				{
					title: 'Medical history',
					showNext: true,
					complete: false
				},
			],
			currentStep: 0,
			isModalOpen: false
		}
	},
	methods: {
		gotoBackStep() {
			if (this.currentStep > 0) {
				this.currentStep--
			}
		},
		gotoNextStep() {
			if (this.currentStep < this.steps.length - 1) {
				this.currentStep++
			}
		},
		gotoReport() {
			setTimeout(() => {
				this.$router.push({name: 'Report'})
			}, 1500)
		}
	}
}
</script>

<style lang="scss">
@import "@/assets/sass/abstracts/_variables.scss";

.steps {
	.step {
		display: inline-block;
		height: 10px;
		width: 3rem;
		border-radius: 10px;
		border: 1px solid #d2d2d2;
		margin: 0 0.25rem;
		
		&:first-child {
			margin-left: 0;
		}
		
		&:last-child {
			margin-right: 0;
		}
		
		&:hover {
			background-color: #c2b1f3;
			border-color: #c2b1f3;
		}
		
		&.complete {
			background-color: $brand-color;
			border-color: $brand-color;
		}
		
		&.active {
			background-color: $success-color;
			border-color: $success-color;
		}
		
	}
}

.step-container {
	max-width: 450px;
	min-width: 250px;
	margin: 0 auto;
}

.step-wrapper {
	flex-direction: column;
	justify-content: center;
	//max-height: 500px;
	min-height: 450px;
}

.assessment-container {
	max-width: 550px;
	margin: 0 auto;
	background-image: url("../assets/images/fedo-logo-mini-v2.png");
	background-repeat: no-repeat;
	background-size: contain;
	padding-top: 4rem;
	
	> .card {
		max-width: 450px;
		margin: auto;
		background: transparent;
		overflow: hidden;
		border-top-left-radius: 0;
		
		.card-title {
			height: 8rem;
			background-color: #472f91;
			border-top-right-radius: 25% 100%;
			border-bottom-left-radius: 0;
			
			* {
				color: white;
			}
		}
		
		.card-body {
			background-color: #fff;
			border: 1px solid #d2d2d2;
			border-bottom-right-radius: 10px;
			border-bottom-left-radius: 10px;
		}
		
		@media (max-width: 440px) {
			.card-title {
				border-top-right-radius: 25% 65%;
			}
		}
		
	}
	
}

.step-back {
	display: inline-block;
	position: absolute;
	left: 1rem;
	top: 3.25rem;
}

@media (max-width: 549px) {
	.assessment-container {
		background-image: none;
		padding-top: 0rem;
	}
}

.slide-fade-enter-active {
	transition: all .3s ease;
}

.slide-fade-leave-active {
	transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active below version 2.1.8 */
{
	transform: translateX(10px);
	opacity: 0;
}
</style>
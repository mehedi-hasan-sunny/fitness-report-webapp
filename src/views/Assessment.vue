<template>
	<div class="container text-center pt-3">
		<h1>{{ title.primary }}</h1>
		<h2>{{ title.secondary }}</h2>
		<div class="card outlined my-4">
			<div class="card-title">
				<h4 class="font-weight-normal mb-3">Getting your FEDO score</h4>
				<div class="steps mb-2">
					<a href="javascript:void(0)" class="step"
					   :class="[step.active ? 'active' : '', step.complete ? 'complete' : '']" v-for="(step , index) in steps"
					   :key="index" @click="gotoStep(index)"></a>
				</div>
				<small> Step {{currentStep}} of 12</small>
			</div>
			<div class="card-body">
				<Component :is="'Step' + currentStep"></Component>
				<div class="step-container my-3">
					<button class="btn btn-brand btn-block" @click="gotoStep(currentStep)">Next</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Step1 from "../components/assessments/Step1";
import Step2 from "../components/assessments/Step2";

export default {
	name: "Assessment",
	components: {
		Step1,
		Step2
	},
	data() {
		return {
			steps: [
				{
					text: {
						primary: 'Let us get acquainted',
						secondary: 'What shall we call you?',
					},
					active: false,
					complete: true,
					step: 1
				},
				{
					text: {
						primary: 'Demography',
						secondary: 'I am a...',
					},
					active: false,
					complete: false,
					step: 2
				}
			],
			title: {
				primary: '',
				secondary: '',
			},
			currentStep: 1
		}
	},
	created() {
		this.gotoStep(0)
	},
	methods: {
		gotoStep(index) {
			console.log('hello')
			let step = this.steps[index];
			let previousStep = null;
			if (index > 0) {
				previousStep = this.steps[index - 1];
				previousStep = previousStep.complete
			}
			if (previousStep === null || previousStep === true) {
				this.title = step.text;
				this.steps[index].active = true;
				this.currentStep = index + 1
			}
			
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
		
		&.active {
			background-color: $success-color;
			border-color: $success-color;
		}
		
		&.complete {
			background-color: $brand-color;
			border-color: $brand-color;
		}
	}
}

.step-container {
	max-width: 450px;
	margin: auto;
}
</style>
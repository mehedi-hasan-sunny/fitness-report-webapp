<template>
	<div class="container text-center pt-3">
		<h1>{{ title.primary }}</h1>
		<h2>{{ title.secondary }}</h2>
		<div class="card outlined my-4">
			<div class="card-title">
				<h4 class="font-weight-normal mb-3">Getting your FEDO score</h4>
				<div class="steps mb-2">
					<a href="javascript:void(0)" class="step"
					   :class="[currentStep-1 === index  ? 'active' : '', step.complete ? 'complete' : '']" v-for="(step , index) in steps"
					   :key="index" @click="gotoStep(index)"></a>
				</div>
				<small> Step {{ currentStep }} of 10</small>
			</div>
			<div class="card-body">
				<Component :is="'Step' + currentStep"></Component>
				<div class="step-container mt-3">
					<button class="btn btn-brand btn-block" v-if="currentStep < 10" @click="gotoStep(currentStep, true)">
						Next
					</button>
					<button type="submit" v-else class="btn btn-brand btn-block" @click="">
						Submit
					</button>
				</div>
			</div>
		</div>
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
	},
	data() {
		return {
			steps: [
				{
					text: {
						primary: 'Let us get acquainted',
						secondary: 'What shall we call you?',
					},
					complete: true
				},
				{
					text: {
						primary: 'Demography',
						secondary: 'I am a...',
					},
					complete: true
				},
				{
					text: {
						primary: 'Demography',
						secondary: 'Tell me your age',
					},
					complete: true
				},
				{
					text: {
						primary: 'Demography',
						secondary: 'How tall are you?',
					},
					complete: false
				}, {
					text: {
						primary: 'Demography',
						secondary: 'Tell me your age',
					},
					complete: false
				},
				{
					text: {
						primary: 'Demography',
						secondary: 'Tell me your age',
					},
					complete: false
				},
				{
					text: {
						primary: 'Demography',
						secondary: 'Tell me your age',
					},
					complete: false
				}, {
					text: {
						primary: 'Demography',
						secondary: 'Tell me your age',
					},
					complete: false
				},
				{
					text: {
						primary: 'Demography',
						secondary: 'Tell me your age',
					},
					complete: false
				},
				{
					text: {
						primary: 'Demography',
						secondary: 'Tell me your age',
					},
					complete: false
				},
			],
			title: {
				primary: '',
				secondary: '',
			},
			currentStep: 3
		}
	},
	created() {
		this.gotoStep(2)
	},
	methods: {
		gotoStep(index, completeStep = false) {
			let step = this.steps[index];
			let previousStepComplete = index > 0 ? this.steps[index - 1].complete : true;
			if (previousStepComplete) {
				this.title = step.text;
				this.currentStep = index + 1;
				if(completeStep){
					this.steps[index].complete = completeStep
				}
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
	margin: auto;
}
</style>
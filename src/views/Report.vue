<template>
	<div class="container text-center pt-3 fedo-report-container">
		<div class="assessment-container report">
			<div class="card">
				<div class="card-title">
					<!--					<a href="javascript:void(0)" class="step-back">-->
					<!--						<span class="material-icons-outlined">arrow_back</span></a>-->
					
					<h2 class="font-weight-normal mt-4">Your Fedo Score</h2>
				</div>
				<div class="card-body position-relative">
					<div class="fedo-score circular success">
						640
					</div>
					<div class="d-flex justify-between mx-5 mt-4">
						<small class="dot success">Good</small>
						<small class="dot warning">Moderate</small>
						<small class="dot danger">At Risk</small>
					</div>
					<small class="mt-4 d-block"> Your are better than <strong> 30%</strong> people like you</small>
					
					<div class="card mt-4 mx-auto" style="max-width: 20rem; box-shadow: 0 1px 6px 0 #20212447;">
						<div class="card-body">
							<h3 class="font-weight-normal">Joe James</h3>
							
							<small class="d-inline-flex align-center">
								<span class="d-inline-flex align-center">
									<span class="material-icons" style="font-size: small">male</span>
									<span>Male</span>
								</span>
								<span class="mx-2">|</span>
								<span>25 years</span>
								<span class="mx-2">|</span>
								<span>70kgs</span>
							</small>
							<hr class="my-3">
							<span class="d-inline-flex align-center">
								<span class="d-inline-flex align-center">
									<h4 class="font-weight-normal mb-0">BMI: <strong>29</strong></h4>
								</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Report"
}
</script>
<style lang="scss">
@import "../assets/sass/abstracts/variables";
@import "../assets/sass/components/custom_mobile_card";

.fedo-report-container {
	
	.assessment-container > .card > .card-body{
		min-height: 550px;
	}
}

.bg-light-brand {
	background-color: #f7f4ff;
}

.fedo-score {
	width: 10rem;
	height: 10rem;
	background-color: #fff;
	border: 12px solid #b4b4b4;
	font-size: 3rem;
	line-height: 9rem;
	text-align: center;
	margin: auto;
	
	&.success {
		border-color: $success-color;
	}
	
	&.warning {
		border-color: $warning-color;
	}
	
	&.danger {
		border-color: $danger-color;
	}
}

.dot {
	&:before {
		content: " ";
		display: inline-block;
		margin-right: 0.5rem;
		height: 8px;
		width: 8px;
		background-color: #fff;
		border-radius: 50%;
		vertical-align: middle;
	}
	
	&.success {
		&:before {
			background-color: $success-color;
		}
	}
	
	&.warning {
		&:before {
			background-color: $warning-color;
		}
	}
	
	&.danger {
		&:before {
			background-color: $danger-color;
		}
	}
}


</style>
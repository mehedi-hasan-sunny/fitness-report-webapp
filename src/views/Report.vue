<template>
	<div class="container fluid">
		<div class="row">
			<div class="col-12 col-sm-4">
				<div class="card bg-light-brand fedo-report-card">
					<div class="card-title">
						<div class="d-flex">
							<img src="@/assets/images/avatar.svg" class="img-fluid avatar rounded" alt="Profile image">
							<div class="ml-3">
								About You
							</div>
						</div>
					</div>
					<div class="card-body">
					</div>
				</div>
			</div>
			<div class="col-12 col-sm-4">
				<div class="card bg-light-brand fedo-report-card">
					<div class="card-title">
						Your Fedo Score
					</div>
					<div class="card-body">
						<div class="row justify-center align-center">
							<div class="col-4 text-center">
								<div class="fedo-score rounded success">
									640
								</div>
							</div>
							<div class="col-8">
								<p class="text-center mb-0">
									Your are better than
									<br>
									<strong> 30%</strong>
									<br>
									People like you
								</p>
							</div>
						</div>
						<div class="d-flex justify-around mt-4">
							<small>Good</small>
							<small>Moderate</small>
							<small>At Risk</small>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 col-sm-4">
				<div class="card bg-light-brand fedo-report-card">
					<div class="card-title">
						Factor driving your score
					</div>
					<div class="card-body">
						<div class="row justify-center align-center">
							<div class="col-4 text-center">
								<div class="fedo-score rounded success">
									640
								</div>
							</div>
							<div class="col-8">
								<p class="text-center mb-0">
									Your are better than
									<br>
									<strong> 30%</strong>
									<br>
									People like you
								</p>
							</div>
						</div>
						<div class="d-flex justify-around mt-4">
							<small>Good</small>
							<small>Moderate</small>
							<small>At Risk</small>
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

.fedo-report-card {
	min-height: 13.5rem;
}
.bg-light-brand {
	background-color: #f7f4ff;
}

.fedo-score {
	width: 5rem;
	height: 5rem;
	background-color: #fff;
	border: 10px solid #b4b4b4;
	font-size: 1.2rem;
	line-height: 3.8rem;
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
</style>
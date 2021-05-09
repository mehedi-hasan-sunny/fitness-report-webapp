import {mapActions, mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			stepData: 'stepData',
		}),
	},
	methods: {
		...mapActions(['setStep']),
	}
}
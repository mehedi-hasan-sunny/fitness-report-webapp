<template>
    <div class="form-group mb-3" :class="error ? 'was-validated' : ''">
        <label class="form-label" v-if="label" :for="uniqueId">{{ label }} <span class="brand-text"
                                                              v-if="$attrs.required !== undefined"> *</span></label>
        <div class="input-group" :class="error ? 'has-validation' : ''">
              <span class="input-group-text rounded-left" :class="prependClass" v-if="$slots['prepend'] || prepend">
                    <slot name="prepend" v-if="$slots['prepend']"></slot>
                    <span v-else>{{ prepend }}</span>
                </span>
            <!--            <div class="input-group-append" v-if="$slots['prepend'] || prepend">-->
            <!--              -->
            <!--            </div>-->
            <input :id="uniqueId" class="form-control box-shadow-none" :class="[inputClass, error ? 'is-invalid' : '']" :ref="uniqueId"
                   :value="value" @input="updateInput($event.target.value)" v-bind="$attrs" @blur="$emit('blur')"/>
            <span class="input-group-text rounded-right" :class="appendClass" v-if="$slots['append'] || append">
                    <slot name="append" v-if="$slots['append']"></slot>
                    <span v-else>{{ append }}</span>
                </span>
            <div class="invalid-feedback" v-if="error">{{ error }}</div>
        </div>
    </div>
</template>

<script>
import SuTagAttributes from "../Mixins/SuTagAttributes";

export default {
    name: "suInput",
    props: {
        numberOnly: {
            type: Boolean,
            required: false
        },
        inputClass: {
            type: String,
            required: false
        },
        append: {
            type: String,
            required: false
        },
        prepend: {
            type: String,
            required: false
        },
        appendClass: {
            type: String,
            required: false
        },
        prependClass: {
            type: String,
            required: false
        },


    },
    mixins: [SuTagAttributes],
    // directives: {
    //     numberOnly: {
    //         bind: function (el, binding) {
    //             if (binding.value) {
    //                 console.log(el.value)
    //                 el.handler = function () {
    //                     el.value = el.value.replace(/^\D+$/, '')
    //                 }
    //                 el.addEventListener('input', el.handler)
    //             }
    //         },
    //         unbind: function (el, binding) {
    //             if (binding.value) {
    //                 el.removeEventListener('input', el.handler)
    //             }
    //         }
    //     },
    // },
    watch:{
        value(value){
            if(this.numberOnly)
            {
                this.$emit('input', value.replace(/\D+/, ''))
            }
        }
    }
}
</script>

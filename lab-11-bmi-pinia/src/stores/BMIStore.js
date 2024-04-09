import {defineStore} from 'pinia'

import {computed, ref} from 'vue'

// define store takes the name of the store and a function that has data the store uses
export const useBMIStore = defineStore('bmi', () => {

    const height = ref(0)
    const weight = ref(0)

    const calculatedBMI = computed( () => {
        return (weight.value / (height.value * height.value)).toFixed(2)
    })

    return {  // return all variable/function/computed property names
        height,
        weight,
        calculatedBMI
    }

})
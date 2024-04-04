import {defineStore} from 'pinia'

import {computed, ref} from 'vue'

export const useBMIStore = defineStore('bmi', () => {

    const height = ref(0)
    const weight = ref(0)

    const calculatedBMI = computed( () => {
        return (weight.value / (height.value * height.value)).toFixed(2)


    })

    return {
        height,
        weight,
        calculatedBMI
    }

})
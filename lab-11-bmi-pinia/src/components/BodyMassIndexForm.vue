<script setup>
// CHILD

import { useBMIStore } from '../stores/BMIStore.js'  // import store into component
import {storeToRefs} from 'pinia'  // import to convert data in store to ref within this component

const BMIStore = useBMIStore()  // get reference to the store

// allow access to height and weight reactive data from the store
const { height } = storeToRefs(BMIStore)
const { weight } = storeToRefs(BMIStore)


</script>

<template>

  <div id="bmi-form">

    <h2>Enter your height and weight</h2>

    <!--v-model links the input values with the reactive data weight and height-->
    <label for="height-meters">Height in meters</label>
    <input v-model="height" type="number">
    <br>
    <label for="weight-kilograms">Weight in kilograms</label>
    <input v-model="weight" type="number">

  </div>

</template>

<style scoped>

#bmi-form {
  background-color: darkblue;
}

</style>


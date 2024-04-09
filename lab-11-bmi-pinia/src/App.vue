<script setup>
// PARENT

import BodyMassIndexForm from './components/BodyMassIndexForm.vue'

import { useBMIStore } from './stores/BMIStore.js'  // import store into component
import {storeToRefs} from 'pinia'  // import to convert data in store to ref within this component

const BMIStore = useBMIStore()  // get reference to the store

const { calculatedBMI } = storeToRefs(BMIStore)

</script>

<template>

  <div id="app-component">

    <h1>Body Mass Index Calculator</h1>

    <BodyMassIndexForm></BodyMassIndexForm>

    <p id="bmi-result-paragraph">{{ calculatedBMI }}</p>

  </div>

</template>

<style scoped>

#app-component {
  background-color: yellowgreen;
  padding: 40px;
}

#bmi-result-paragraph {
  font-size: 50px;
}

</style>

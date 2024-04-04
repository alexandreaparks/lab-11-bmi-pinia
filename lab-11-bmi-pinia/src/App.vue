<script setup>
// PARENT

import BodyMassIndexForm from './components/BodyMassIndexForm.vue'

import { useBMIStore } from './stores/BMIStore.js'
import {storeToRefs} from 'pinia'


const BMIStore = useBMIStore()

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

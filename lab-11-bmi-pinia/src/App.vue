<script setup>
// PARENT

import BodyMassIndexForm from './components/BodyMassIndexForm.vue'

import { ref } from 'vue'

const bmiResult = ref('')

// this function is called when the Child component emits an event
function calculateBMI(weight, height) {  // arguments come from 2 values in Child event emitted
  const bmi = (weight / ( height * height )).toFixed(2)
  bmiResult.value = `Your BMI is: ${bmi}`
}

</script>

<template>

  <div id="app-component">

    <h1>Body Mass Index Calculator</h1>

    <!--v-on receives event emitted from Child and calls calculateBMI function-->
    <BodyMassIndexForm v-on:stats-entered="calculateBMI"></BodyMassIndexForm>

    <p id="bmi-result-paragraph">{{ bmiResult }}</p>

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

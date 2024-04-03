<script setup>
// CHILD

import { ref } from 'vue'

const emit = defineEmits([
  'stats-entered'
])

// reactive data to store height and weight user enters
const weight = ref('')
const height = ref('')

function calculateClicked () {
  // validate that both height and weight were entered
  if (weight.value === '' || height.value === '') {
    alert('Enter a height and weight!')
  } else {
    // emit event to tell the Parent component that the user clicked on Calculate button
    // include weight and height values
    emit('stats-entered', weight.value, height.value)
  }

}

</script>

<template>

  <div id="bmi-form">

    <h2>Enter your height and weight</h2>

    <!--v-model links the input values with the reactive data weight and height-->
    <label for="height-meters">Height in meters</label>
    <input v-model="height" type="number" id="height-meters">
    <br>
    <label for="weight-kilograms">Weight in kilograms</label>
    <input v-model="weight" type="number" id="weight-kilograms">
    <br>
    <!--v-on click calls calculateClicked function that will emit the event and values to Parent component-->
    <button v-on:click="calculateClicked" id="calculate-button">Calculate</button>


  </div>

</template>

<style scoped>

#bmi-form {
  background-color: darkblue;
}

#calculate-button {
  background-color: indianred;
  margin: 30px;
}

</style>


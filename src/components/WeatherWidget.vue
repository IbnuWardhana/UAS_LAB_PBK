<template>
    <div>
      <h2>Weather Widget</h2>
      <p>{{ temperature }}°C</p>
      <p>{{ weather }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        temperature: '',
        weather: '',
      };
    },
    created() {
      // Simulating data
      this.temperature = '25';
      this.weather = 'Sunny';
    },
  };
  </script>
  
<template>
    <div>
      <h2>Location Widget</h2>
      <p>{{ location }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        location: '',
      };
    },
    created() {
      // Simulating data
      this.location = 'New York';
    },
  };
  </script>
  
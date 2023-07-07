<template>
    <div>
      <h2>Stopwatch Widget</h2>
      <p>Elapsed Time: {{ elapsedTime }} seconds</p>
      <button @click="startStopwatch">Start</button>
      <button @click="stopStopwatch">Stop</button>
      <button @click="resetStopwatch">Reset</button>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        elapsedTime: 0,
        timer: null,
      };
    },
    methods: {
      startStopwatch() {
        if (!this.timer) {
          this.timer = setInterval(() => {
            this.elapsedTime++;
          }, 1000);
        }
      },
      stopStopwatch() {
        clearInterval(this.timer);
        this.timer = null;
      },
      resetStopwatch() {
        this.elapsedTime = 0;
        clearInterval(this.timer);
        this.timer = null;
      },
    },
  };
</script>
  
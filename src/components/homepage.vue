<template>
  <div>
    <h1>Welcome to the Home Page!</h1>
    <router-link to="/weather">Weather Widget</router-link>
    <router-link to="/location">Location Widget</router-link>
    <router-link to="/stopwatch">Stopwatch Widget</router-link>
    <router-link to="/tictactoe">Tic Tac Toe Widget</router-link>
    <router-link to="/photos">Photos Widget</router-link>
    <router-view></router-view>
  </div>
</template>

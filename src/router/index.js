import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../components/HomePage.vue';
import WeatherWidget from '../components/WeatherWidget.vue';
import LocationWidget from '../components/LocationWidget.vue';
import StopwatchWidget from '../components/StopwatchWidget.vue';
import TicTacToeWidget from '../components/TicTacToeWidget.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/weather',
    name: 'WeatherWidget',
    component: WeatherWidget,
  },
  {
    path: '/location',
    name: 'LocationWidget',
    component: LocationWidget,
  },
  {
    path: '/stopwatch',
    name: 'StopwatchWidget',
    component: StopwatchWidget,
  },
  {
    path: '/tictactoe',
    name: 'TicTacToeWidget',
    component: TicTacToeWidget,
  },
  {
    path: '/photos',
    name: 'PhotosWidget',
    component: PhotosWidget,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

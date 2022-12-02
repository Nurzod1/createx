import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoursesView from '../views/CoursesView.vue'
import AboutCourse from '../views/AboutCourse.vue'
import EventsList from '../views/EventsList.vue'
import EventView from '../views/EventView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import BlogView from '../views/BlogView.vue'
import SinglePostView from '../views/SinglePostView.vue'
import ContactsView from '../views/ContactsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/course',
    name: 'course',
    component: CoursesView
  },
  {
    path: '/course/:slug',
    name: 'AboutCourse',
    component: AboutCourse
  },
  {
    path: '/EventsList',
    name: 'EventsList',
    component: EventsList,
  },
  {
    path: '/EventView/:slug',
    name: 'EventView',
    component: EventView,
  },
  {
    path: '/AboutUsView',
    name: 'AboutUsView',
    component: AboutUsView,
  },
  {
    path: '/BlogView',
    name: 'BlogView',
    component: BlogView,
  },
  {
    path: '/SinglePostView/:slug',
    name: 'SinglePostView',
    component: SinglePostView,
  },
  {
    path: '/ContactsView',
    name: 'ContactsView',
    component: ContactsView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

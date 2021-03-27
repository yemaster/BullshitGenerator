import Vue from 'vue'
import App from './App.vue'

//Styles
import '../style/fonts.css'
import '../style/common.css'
import '../style/semantic.min.css'
import '../style/typo.css'
import $ from 'jquery'
import jQuery from 'jquery'
window.$ = $
window.jQuery = jQuery
import '../style/semantic.min.js'
import '../style/tablesort.js'

var bsg = new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
})
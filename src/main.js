import {createApp} from 'vue';
import App from './App.vue';
import './app.css';
/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
/* import specific icons */
import {faLinkedin, faTwitter, faGithub, faStackOverflow, faPython, faJava} from '@fortawesome/free-brands-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTwitter, faLinkedin, faGithub, faStackOverflow,faPython,faJava, faC)
createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

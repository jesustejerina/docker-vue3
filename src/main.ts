import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//Material Design Icons
import { aliases, mdi } from 'vuetify/iconsets/mdi'


//FONT AWESOME
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faHouse)
/* NOTA: Si no se utiliza library.add, no aparece el icono en el componente ni en la página.
JODER.... Hay que poner toooodos los íconos que se usarán aquí???*/


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const icons = {
  defaultSet: 'mdi',
  aliases,
  sets: {
      mdi,
  }
}

const vuetify = createVuetify({
  components,
  directives,
  icons,
})

import './assets/main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(vuetify)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

import App from './App.vue'
import router from './router'

import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { 
    faChevronDown,
    faCircle, faEllipsisVertical, 
    faMagnifyingGlass, faPlus, faSort, 
    faSquarePhone, 
    faSquarePlus, faUsers, faVideo,
    faMicrophone,
    faFaceSmile

} from '@fortawesome/free-solid-svg-icons'


library.add(
    faUsers, faCircle,
    faSquarePlus, faEllipsisVertical, faPlus,
    faSort, faMagnifyingGlass,
    faChevronDown, faVideo, 
    faSquarePhone, faMicrophone,
    faFaceSmile            
)



createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

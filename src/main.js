import App from './App.vue'
import router from './router'

import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createPinia } from 'pinia';

import { 
    faChevronDown,
    faCircle, faEllipsisVertical, 
    faMagnifyingGlass, faPlus, faSort, 
    faSquarePhone, faSquarePlus, faUsers, faVideo,
    faMicrophone,faFaceSmile,faArrowLeft,
    faFile,faImages,faCamera, faUser,
    faSquarePollVertical,faCircleXmark,
    faBell, faStar, faArrowRotateRight,
    faLock,faTrash,faBan,
    faThumbsDown

} from '@fortawesome/free-solid-svg-icons'


library.add(
    faUsers, faCircle,faUser,
    faSquarePlus, faEllipsisVertical, faPlus,
    faSort, faMagnifyingGlass,
    faChevronDown, faVideo, faThumbsDown,
    faSquarePhone, faMicrophone,
    faFaceSmile, faArrowLeft,faTrash,
    faFile, faImages, faCamera,faBan,
    faSquarePollVertical, faCircleXmark, faBell,
    faStar, faArrowRotateRight, faLock
)



createApp(App)
.use(router)
.use(createPinia())
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

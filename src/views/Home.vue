<template>
    <div @click="resetRefs" class="container">
      <div class="chats">
        <ChatsContainer/>
      </div>
  
      <div :class="viewChatProfile ? 'messages-profile': 'messages'">
        <MessagesContainer @view-chat-profile="changeView"/>
      </div>
    </div>
  </template>
  
  
  <script setup>
        import {ref} from 'vue'
        import ChatsContainer from "@/components/containers/ChatComponentsContainer.vue"
        import MessagesContainer from "@/components/containers/MessageComponentsContainer.vue"

        const viewChatProfile = ref(false)

        const changeView = () =>{
            viewChatProfile.value = !viewChatProfile.value
        }

        const resetRefs = () => {
            
        }

  </script>
  
  <style>

  .container{
    display: flex;
  }
  
  .container .chats{
    flex-basis: 25%;
    border-right:1px solid rgb(78, 78, 78) ;
   
  }
  
  .container .messages{
    flex-basis: 75%;
    transition: flex-basis 1s ease;
  }

  .container .messages-profile{
    flex-basis: 50%;
    transition: flex-basis 1s ease;

  }
  </style>
  
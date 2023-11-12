<template>
  <div class="container">
    <div class="chats">
      <Navbar  
        @view-profile="setProfile" 
        @view-chat-drop="setChatDrop" 
        :viewChatDrop="viewChatDrop"
      />
      <Search/>
      <ChatList 
        @view-chat-drop="setChatDrop" 
      />
      <Profile :viewProfile="viewProfile" @view-profile="setProfile" />
    </div>

    <div class="messages">
      <MessageNav 
        @view-profile="setProfile"
        @view-message-drop ="setMessageDrop"
        :viewProfile="viewProfile"  
        :viewMessageDrop="viewMessageDrop"
      />
      <MessageList/>
      <MessageInput
        :viewFileMessage="viewFileMessage"
        @view-file-message="setFileMessage"
      />
    </div>
  </div>
</template>


<script setup>
  import {ref} from "vue"
  import Navbar from "@/components/chats/Navbar.vue"
  import Search from "@/components/chats/Search.vue"
  import ChatList from "@/components/chats/ChatsList.vue"
  import MessageNav from "@/components/messages/Navbar.vue"
  import MessageList from "@/components/messages/MessagesList.vue"
  import MessageInput from "@/components/messages/MessageInput.vue"
  import Profile from "@/components/profile/Profile.vue"


  const viewProfile = ref(false);
  const viewChatDrop = ref(false)
  const viewMessageDrop = ref(false)
  const viewFileMessage = ref(false)


  const setProfile = (profileState) => {
    viewProfile.value = profileState
  }

  const setChatDrop = (chatDropState) => {
    viewChatDrop.value = chatDropState
  }  

  const setMessageDrop = (messageDropState) => {
    viewMessageDrop.value = messageDropState
  }  

  const setFileMessage = (messageFileState) => {
    viewFileMessage.value = messageFileState
  }  


</script>

<style>
body {
  padding: 0;
  margin: 0;
  background: #202C33;
  font-family: Calibri, 'Trebuchet MS', sans-serif;
  overflow-y: hidden;

}

.container{
  display: flex;
}

.container .chats{
  flex-basis: 25%;
  border-right:1px solid rgb(78, 78, 78) ;
 
}

.container .messages{
  flex-basis: 75%;
}
</style>

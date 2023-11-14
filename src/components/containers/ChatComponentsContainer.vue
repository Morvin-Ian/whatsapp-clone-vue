<template>
    <Navbar  
        @view-profile="setProfile" 
        @view-chat-drop="setChatDrop" 
        :viewChatDrop="viewChatDrop"
    />
    <Search/>
    <ChatList 
        @view-chat-drop="setChatDrop" 
    />
    <Profile 
        :viewProfile="viewProfile" 
        @view-profile="setProfile" 
    />
</template>

<script setup>
    import {ref} from "vue"
    import Navbar from "@/components/chats/Navbar.vue"
    import Search from "@/components/chats/Search.vue"
    import ChatList from "@/components/chats/ChatsList.vue"
    import Profile from "@/components/profiles/UserProfile.vue"


    const viewProfile = ref(false);
    const viewChatDrop = ref(false);

      
    const setProfile = (profileState) => {
      viewProfile.value = profileState
    }
  

    const setChatDrop = (chatDropState) => {
      viewChatDrop.value = chatDropState
    }  
  

</script>
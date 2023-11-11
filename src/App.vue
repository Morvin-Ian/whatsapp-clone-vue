<template>
  <div class="container">
    <div class="chats">
      <Navbar />
      <Search/>
      <ChatList/>
    </div>

    <div class="messages">
      <MessageNav/>
      <MessageList/>
      <MessageInput/>
    </div>
  </div>
</template>


<script setup>
  import Navbar from "@/components/chats/Navbar.vue"
  import Search from "@/components/chats/Search.vue"
  import ChatList from "@/components/chats/ChatsList.vue"
  import MessageNav from "@/components/messages/Navbar.vue"
  import MessageList from "@/components/messages/MessagesList.vue"
  import MessageInput from "@/components/messages/MessageInput.vue"



</script>

<style>
body {
  padding: 0;
  margin: 0;
  background: #202C33;
  font-family: Calibri, 'Trebuchet MS', sans-serif;
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

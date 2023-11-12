<template>
    <div class="chat-list">
        <div class="chat" v-for="chat in chats">
            <Chat/>
        </div>
    </div>
</template>

<script setup>
    import Chat from "@/components/chats/Chat.vue";
    const chats = 10;

</script>

<style scoped>
    .chat-list {
        margin-top: 5px; 
        height: 85vh;
        overflow-y: scroll;       
    }

</style>
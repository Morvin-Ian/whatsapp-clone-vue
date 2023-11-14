<template>
    <div class="chat-list">
        <div class="chat" 
            v-for="chat in chats" 
            :key="chat.id">
                <Chat :chat="chat"/>
        </div>
    </div>
</template>

<script setup>
    import Chat from "@/components/chats/Chat.vue";
    import {chatList} from "@/apis/chats.js"
    import {ref, onMounted} from 'vue'

    const chats = ref([]);

    onMounted(async () => {
        try {
            chats.value = await chatList; 
        } catch (error) {
            console.error("Error fetching chats:", error);
        }
    });
  

    
</script>

<style scoped>
    .chat-list {
        margin-top: 5px; 
        height: 85vh;
        overflow-y: scroll;       
    }

</style>
<template>
    <div class="messages-container">
        <div class="message" v-for="message in messages">
            <Message/>
        </div>
    </div>

</template>

<script setup>
    import Message from "@/components/messages/Message.vue"
    const messages = 20;
</script>

<style scoped>
    .messages-container{
        height: 82vh;
        overflow: scroll;
        background: url('../../assets/bg.jpg') ;
    }
</style>
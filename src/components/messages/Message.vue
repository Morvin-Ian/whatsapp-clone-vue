<template>
    <div :class="received ? 'message-container-received' : 'message-container-sent'">
        <div class="message">
            <div class="message-body">
                <div :class="fileExists ? 'file': 'no-file'">
                    <img :src="file" alt="file"/>
                </div>

                <div class="text">
                    <span>Good morning champ</span> <br>
                    <small class="time">2:30 PM</small>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
    import file from "@/assets/octo.jpg"
    const received = false;
    const fileExists = true
</script>

<style scoped>
.message-container-received {
    max-width: 80%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px;
}

.message-container-sent {
    display: flex;
    gap: 10px;
    margin: 10px;
    flex-direction: row-reverse;

}

.message-container-received .message{
    background: #202C33;
    color: #b6b6b6;
    padding: 10px;
    border-radius:0px 10px 10px 10px;
    max-width: max-content;
}

.message-container-sent .message{
    background-color: #075E54;
    color: #fff;
    padding: 10px;
    border-radius:0px 10px 10px 10px;
    max-width: max-content;
}

.file img{
    height: 250px;
    width: 200px;
    border-radius: 5px;
    object-fit: cover;
    cursor: pointer;

}

.no-file{
    display: none;
}

.text .time{
    float: right;
    color: #b6b6b6;

}


</style>
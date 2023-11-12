<template>
    <div class="chat-container">
        <div class="chat-profile">
            <img :src="profilePicture" alt="profile">
        </div>

        <div class="chat-details">
            <div>
                <span class="name">Nderitu Evans</span> <br>
                <div class="low">
                    <small class="last-msg">Budaa unatoka saa ngapi</small>
                    <font-awesome-icon class="icon" :icon="['fas', 'chevron-down']" />
                </div>
            </div>

        </div>

        <div class="last-seen">
            <small>11:00 AM</small>
        </div>
    </div>
</template>

<script setup>
    import profilePicture from "@/assets/octo.jpg"

</script>

<style scoped>
    .chat-container {
        display: flex;
        justify-content: space-around;
        padding: 5px;
        background-color: #141c20;;
        border-bottom: 1px solid rgb(78, 78, 78);

    }

    .chat-container:hover{
        background-color: #202C33;
        cursor: pointer;
    }
    .chat-container .last-seen{
        color: #b6b6b6;
        /* color: #25D366; */

    }
    .chat-profile{
        flex-basis: 15%;
    }

    .chat-profile img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        cursor: pointer;
        flex-basis: 10%;
        padding: 5px;
    }

    .chat-details{
        display: flex;
        padding: 5px;
        color: #b6b6b6;
    }

    .chat-details .name{
        color: #fff;
        font-weight: bolder;
    }

    .low .icon{
        margin-left: 55px;
        visibility: hidden;
        font-size: small;
    }

    .chat-container:hover .low .icon{
        visibility: visible;
    }


</style>
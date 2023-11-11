<template>
    <div class="nav-container">
        <div class="user-profile">
            <img :src="profilePicture" alt="profile">
        </div>

        <div class="nav-btns">
            <div class="community">
                <font-awesome-icon class="icon" :icon="['fas', 'users']" />
            </div>

            <div class="status">
                <font-awesome-icon class="icon" :icon="['fas', 'circle']" />
            </div>

            <div class="add-chat">
                <font-awesome-icon class="icon" :icon="['fas', 'square-plus']" />
            </div>

            <div class="more">
                <font-awesome-icon class="icon" :icon="['fas', 'ellipsis-vertical']" />
            </div>

        </div>

    </div>
</template>

<script setup>
    import profilePicture from "@/assets/octo.jpg"

</script>

<style scoped>
.nav-container {
    display: flex;
    padding: 5px;
    border-radius: 4px;
    background-color: #141c20;;

}

.user-profile img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
    flex-basis: 10%;
    padding: 5px;
}

.nav-btns{
    flex-basis: 80%;
    display: flex;
    justify-content: end;
    color: #b6b6b6;
    padding: 5px;
    margin-top: 10px;

}

.nav-btns div{
    margin-left: 15%;
}

.nav-btns div .icon{
    font-size: large;
    cursor: pointer;
}
</style>
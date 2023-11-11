<template>
    <div class="nav-container">
        <div class="user-profile">
            <img :src="profilePicture" alt="profile">
        </div>

        <div class="nav-btns">

            <div class="voice">
                <font-awesome-icon class="icon"  :icon="['fas', 'square-phone']" />
            </div>

            <div class="video">
                <font-awesome-icon class="icon"  :icon="['fas', 'video']" />
            </div>

            <div class="search">
                <font-awesome-icon class="icon"  :icon="['fas', 'magnifying-glass']" />         
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
    background-color: #141c20;

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
    flex-basis: 90%;
    display: flex;
    justify-content: flex-end;
    color: #b6b6b6;
    padding: 5px;
    margin-top: 10px;

}

.nav-btns div{
    margin-left: 5%;
}

.nav-btns .icon{
    font-size: large;
    cursor: pointer;
}
</style>
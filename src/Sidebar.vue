<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="menu">
        <router-link class="button" to="/"> 
            <span class="text">Home</span>
        </router-link>
    </div>
    <div class="menu-toggle-wrap" >
        <button class="toggle-wrap" @click="ToggleMenu">
            <span class="material-icons chevron">chevron_right</span>
        </button>
    </div>
  </aside>
</template>

<script setup>
import {ref} from 'vue'

const is_expanded = ref(localStorage.getItem("is_expanded")===true)

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
    console.log(is_expanded.value)
}
</script>

<style scoped lang="scss">
aside{
    display: flex;
    flex-direction: column;
    width: 80px;
    background: #fff;
    min-height: 100vh;
    overflow: hidden;
    position: absolute;
    box-shadow: 0px 0 32px #0000000e;
    border-radius: 0 12px 12px 0;
    transition: 200ms;

    &.is-expanded{
        width: 300px;


        .material-icons{
            transform: rotate(-180deg);
        }
    }
}

.menu-toggle-wrap{
    margin-top: auto;
    .toggle-wrap{
        margin-left: 21px;
        margin-bottom: 10px;
        padding: 6px;
        border-radius: 12px;
        border: 1px solid #d3d3d398;
        .material-icons{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            width: 24px;
            height: 24px;

            transition: 200ms;
        }
    }
}
</style>
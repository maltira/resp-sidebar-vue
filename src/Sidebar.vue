<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <header>
        <div class="logotype">
            <img src="../public/Logo.svg" alt="logotype">
            <p>Apple</p>
        </div>
        <div class="search-btn">
            <div class="search" @click="ToggleSearchMenu">
                <label for="search"><img src="../icons/search.svg" alt="search"></label>
                <input id="search" autocomplete="off" type="search" name="search" placeholder="Search">
            </div>
        </div>
        <hr>
    </header>
    <main>
        <span>MENU</span>
        <router-link class="button first" to="/"> 
            <img src="../icons/home.svg" alt="home">
            <span class="text">Dashboard</span>
        </router-link>
        <router-link class="button" to="/about"> 
            <img src="../icons/user.svg" alt="home">
            <span class="text">Profile</span>
        </router-link>
        <router-link class="button" to="/doc"> 
            <img src="../icons/document.svg" alt="home">
            <span class="text">Documents</span>
        </router-link>
        <router-link class="button last" to="/sch"> 
            <img src="../icons/schedule.svg" alt="home">
            <span class="text">Schedule</span>
        </router-link>
        <div>
            <hr>
        </div>
        <span>SETTINGS</span>
        <router-link class="button first" to="/set"> 
            <img src="../icons/settings.svg" alt="home">
            <span class="text">Settings</span>
        </router-link>
        <router-link class="button" to="/not"> 
            <img src="../icons/notific.svg" alt="home">
            <span class="text">Notifications</span>
        </router-link>
        <router-link class="button" to="/sec"> 
            <img src="../icons/security.svg" alt="home">
            <span class="text">Security</span>
        </router-link>
        <router-link class="button last" to="/sup"> 
            <img src="../icons/support.svg" alt="home">
            <span class="text">Support</span>
        </router-link>
    </main>
    <div class="menu-toggle-wrap" >
        <button class="toggle-wrap" @click="ToggleMenu">
            <span class="material-icons chevron">chevron_right</span>
        </button>
    </div>
  </aside>
</template>


<style scoped lang="scss">
aside{
    display: flex;
    flex-direction: column;
    width: 90px;
    background: #fff;
    min-height: 100vh;
    overflow: hidden;
    position: absolute;
    box-shadow: 0px 0 32px #0000000e;
    border-radius: 0 12px 12px 0;
    transition: 200ms;

    .router-link-active {

        background-color: var(--blueColor7);
        .text{
            color: var(--blueColor);
        }
        img{
            filter: invert(31%) sepia(71%) saturate(2810%) hue-rotate(216deg) brightness(98%) contrast(105%) !important;
        }
    }

    header{
        text-align: center;
        .logotype{
            display:flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            
            margin-top: 25px;
            margin-bottom: 24px;;
            margin-left: 58px;
            transition: 200ms;
            p{
                color: var(--darkColor);
                left: -40px;
                position: relative;
                transition: 200ms;
                font-weight: bold;
                opacity: 0;
            }
        }

        .search-btn{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;

            .search{
                cursor: text;
                display: flex;
                align-items: center;
                gap: 16px;
                border: 1px solid var(--grayColor);
                border-radius: 11px;
                height: 40px;
                width: 40px;
                
                transition: 200ms;  
                label{
                    display: flex;
                    appearance: button;
                    align-items: center;
                    img{
                        opacity: 0.5;
                        padding-left: 9px;
                        transition: 200ms;
                    }
                }
                input{
                    border: none;
                    opacity: 0;
                    position: relative;
                    left: -30px;
                    height: 40px;
                    width: 100%;
                    background: transparent;
                    outline: none;
                    font-size: 16px;

                    transition: 200ms;
                }
                
            }
        }
    }

    main{
        display: flex;
        flex-direction: column;

        & > span{
            margin-left: 10px;
            position: absolute;
            font-size: 8px;
            font-weight: bold;
            letter-spacing: 0.5px;
            color: var(--darkColor);
            opacity: 0;

            transition: 100ms;
        }
        .first {
            margin-top: 24px !important;
        }
        .last{
            margin-bottom: 24px !important;
        }
        .button{
            display: flex;
            align-items: center;
            gap: 12px;
            margin: 0 auto;
            margin-bottom: 16px;
            padding: 6px;
            border-radius: 11px;
            

            width:40px;
            height: 40px;
            color: var(--darkColor);
            text-decoration: none;

            transition: 200ms;

            
            img {
                filter: invert(17%) sepia(6%) saturate(440%) hue-rotate(349deg) brightness(101%) contrast(85%);
                transition: 50ms;
            }

            .text{
                opacity: 0;
                margin-left: 10px;
                font-size: 14px;
                letter-spacing: 0.75px;
                font-weight: 500;

                transition: 100ms;
            }

            &:hover{
                color: var(--blueColor);
                img{
                    filter: invert(31%) sepia(71%) saturate(2810%) hue-rotate(216deg) brightness(98%) contrast(105%) !important;
                }
            }   
            
        }
    }
    
    &.is-expanded{
        width: 300px;

        .logotype{
            margin-left: 0;
            p {
                left: 0;
                opacity: 1;
            }
        }

        .search-btn{
            .search{
                width: 250px;
                input{
                    left: 0;
                    opacity: 1;
                }
                img{
                    padding-left: 9px;
                }
            }
        }
        hr{
            opacity: 0;
            margin-top: 10px;
        }
        main {
            .button{
                width: 250px;
                height: 48px;
                padding: 10px 0 10px 16px;

                .text{
                    opacity: 1;
                    margin-left: 0;
                }
            }
            & > span {
                position: relative;
                opacity: 0.9;
                margin-left: 25px;
                font-size: 13px;
            }
        }
        
        .material-icons{
            transform: rotate(-180deg);
        }
    }
}

hr{
    width: 40px;
    position: absolute;
    color: var(--grayColor);
    margin-left: 25px;
    opacity: 0.2;

    transition: 200ms;
}
.menu-toggle-wrap{
    margin-top: auto;
    display: flex;
    justify-content: end;
    .toggle-wrap{
        margin-right: 21px;
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
            color: var(--grayColor);
            transition: 200ms;
        }
    }
}
</style>

<script setup>
import {ref} from 'vue'

const is_expanded = ref(localStorage.getItem("is_expanded")===true)

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
}
const ToggleSearchMenu = () => {
    if (is_expanded.value != true)
        is_expanded.value = !is_expanded.value

}
</script>
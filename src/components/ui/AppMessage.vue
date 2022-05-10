<template>
 <aside :class="['alert', message.type]" v-if="message">
    <h4 class="alert-title">{{title}}</h4>
    <p>{{message.value}}</p>
    <span class="alert-close" @click="close">&times;</span>
 </aside>
</template>

<script>
import {computed}   from 'vue'
import { useStore } from "vuex"

export default {
  setup(){
    const store = useStore()

    const TITLE_MAP = {
      primary: 'Успех – вот что создает великих людей',
      danger:'Не знал, да еще и забыл...',
      warning: 'Кто предупрежден, тот вооружен'
    }

    const message = computed(( ) => store.state.message)
    const title = computed(() => message.value ? TITLE_MAP[message.value.type] : null)
    return { 
      message,
      title,
      close: () => store.commit('clearMessage')
    }
  }

}
</script>

<style>

</style>
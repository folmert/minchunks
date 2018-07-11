<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <!--<cio></cio>-->
    </div>
</template>

<script>
//import cio from './ComponentImportedOnce.vue';

export default {
    name: 'HelloWorld',
    //components: {cio},
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>
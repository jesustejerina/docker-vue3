<template>
    <v-card>
        <v-layout>
        <v-navigation-drawer
            v-model="drawer"
            rail
            expand-on-hover
        >
            <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="John Leider"
            nav
            >
            </v-list-item>
            <v-divider></v-divider>

            <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            </v-list>
        </v-navigation-drawer>
        <!--
            <v-main style="height: 250px"></v-main>
        -->
        </v-layout>
    </v-card>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue';
    import 'vuetify/styles'
    import '@mdi/font/css/materialdesignicons.css'
    
    const drawer = ref(true)

</script>
    
<style>
    
</style>
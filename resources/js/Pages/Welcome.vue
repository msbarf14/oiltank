<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import {Footer} from "@/Components/Footer.jsx";
import {Header} from "@/Components/Header.jsx";
import {Hero} from "@/Components/Hero.jsx";

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});

const testong = () => console.log('testong')
</script>

<template>
    <Header />
    <main>
        <Hero />
    </main>
</template>

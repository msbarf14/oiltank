<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Breadcumb from '@/Components/Breadcumb.vue';
import route from '../../../../vendor/tightenco/ziggy/src/js';


const pages = [
  { name: 'Tank Oil', href: route('tank'), current: false },
  { name: 'Project Nero', href: '#', current: true },
]

</script>

<template>
    <AppLayout title="Dashboard">

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Breadcumb :pages="pages"/>
                <div class="py-2 px-4 bg-white mt-4">
                    <h1>Detail Data Tank</h1>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

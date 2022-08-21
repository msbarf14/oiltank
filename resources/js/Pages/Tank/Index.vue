<script setup>
import {ref } from "vue"
import AppLayout from '@/Layouts/AppLayout.vue';
import ButtonJet from '@/Jetstream/Button.vue';
import InputJet from '@/Jetstream/Input.vue';
import ModalJet from '@/Jetstream/Modal.vue'
import { useForm } from '@inertiajs/inertia-vue3';

import CardTank from "./Partials/CardTank.vue"

const modalForm = ref(false)

defineProps({
    data: Object
})

const form = useForm({
    name: null,
    volume: 0,
    max_volume: 0,
    capacity:0,
    temp: 0,
})

const submit = () => {
    console.log('submit')
    form.post('/tank', {
        onError: (err) => console.log(err),
        onProgress: (res) => console.log('progress', res),
        onSuccess: (res) => modalForm.value = false,
        onFinish: (res) => console.log('progress', res),
    })
}

</script>

<template>
    <AppLayout title="Dashboard">
        <div class="py-12">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="flex space-x-3">
                    <ButtonJet @click="modalForm = true">Tambah Data Tank</ButtonJet>
                </div>
                <div class="mt-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
                    <div v-for="item in data">
                        <CardTank :data="item"/>
                    </div>
                </div>
            </div>
            <ModalJet :show="modalForm" :closeable="false">
                <div class="px-4 py-4">
                    <h1 class="uppercase font-semibold text-gray-900">Tambahkan Tank</h1>
                    <hr class="mt-2 border-dashed">
                    <form class="mt-4 space-y-3" @submit.prevent="submit">
                        <div class="space-y-2 flex flex-col">
                            <label class="text-sm text-gray-600">Nama Tank</label>
                            <InputJet v-model="form.name" class="w-full  py-1 border" placeholder="ex: TNK001OIL" required/>
                        </div>
                        <div class="space-y-2 flex flex-col">
                            <label class="text-sm text-gray-600">Temperature (Celcius &#8451;)</label>
                            <InputJet v-model="form.temp" type="number" class="w-full py-1 border" placeholder="ex: 1000" required/>
                            <small class="text-xs italic text-gray-500">Seusikan dengan kondisi tanki saat ini</small>
                        </div>
                        <div class="space-y-2 flex flex-col">
                            <label class="text-sm text-gray-600">Capacity (KL)</label>
                            <InputJet v-model="form.capacity" type="number" class="w-full py-1 border" placeholder="ex: 1000" required/>
                            <small class="text-xs italic text-gray-500">Seusikan dengan kondisi tanki saat ini</small>
                        </div>
                        <div class="grid grid-cols-2 space-x-4 w-full">
                            <div class="space-y-2 flex flex-col">
                                <label class="text-sm text-gray-600">Volume (KL)</label>
                                <InputJet v-model="form.volume" type="number" class="w-full py-1 border" placeholder="ex: 1000" required/>
                            </div>
                            <div class="space-y-2 flex flex-col">
                                <label class="text-sm text-gray-600">Max Volume (KL)</label>
                                <InputJet v-model="form.max_volume" type="number" class="w-full py-1 border" placeholder="ex: 2000" required/>
                            </div>
                        </div>
                        <hr class="mt-2 border-dashed">
                        <div class="space-x-2">
                            <ButtonJet type="button" @click="modalForm = false" :isDark="false">BATAL</ButtonJet>
                            <ButtonJet type="submit">SIMPAN</ButtonJet>
                        </div>
                    </form>
                </div>
            </ModalJet>
        </div>
    </AppLayout>
</template>

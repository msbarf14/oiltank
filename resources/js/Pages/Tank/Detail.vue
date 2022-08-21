<script setup>
import {ref} from "vue"
import { PencilAltIcon, XCircleIcon, TrashIcon } from "@heroicons/vue/outline"
import { Inertia } from '@inertiajs/inertia'

import AppLayout from '@/Layouts/AppLayout.vue';
import ButtonJet from '@/Jetstream/Button.vue';
import CardTank from "./Partials/CardTank.vue"
import FormReport from "./Partials/FormReport.vue"

const props = defineProps({
    tank: Object,
    report: Object
})

const formReport = ref(false)
const destroy = () => {
    if (confirm("Menghapus data tank ini dapat menghapus data laporan didalamnya ! apakah anda yakin") == true) {
        Inertia.delete(route('tank.destroy', props.tank.id))
    } else {
        console.log('cancel')
    }
}

</script>

<template>
    <AppLayout title="Dashboard">
        <div class="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
                <div class="space-y-4 ">
                     <div class="flex justify-between items-center">
                        <div>
                            <h1 class=" text-gray-400">Detail Tank</h1>
                        </div>
                        <ButtonJet type="button" :isDark="false">
                           <div class="flex space-x-1 items-center">
                                <PencilAltIcon class="w-4 h-4"/>
                                <span>Edit</span>
                           </div>
                        </ButtonJet>
                    </div>
                    <CardTank :data="tank" :isRoute="false" />
                    <div>
                        <ButtonJet class="w-full" :isDark="false" @click="destroy">
                            <div class=" w-full flex justify-center items-center space-x-2">
                                <TrashIcon class="w-4 h-4"/>
                                <span>hapus data</span>
                            </div>
                        </ButtonJet>
                    </div>
                </div>
                <div class="lg:col-span-2 xl:col-span-3 space-y-4">
                    <div class="flex justify-between items-center">
                        <div>
                            <h1 class=" text-gray-400">Laporan Status</h1>
                        </div>
                        <ButtonJet type="button" @click="formReport = !formReport">
                           <div class="flex space-x-1 items-center">
                                <PencilAltIcon v-if="!formReport" class="w-4 h-4"/>
                                <XCircleIcon v-else class="w-4 h-4"/>
                                <span>{{formReport ? 'tutup': 'buat laporan'}}</span>
                           </div>
                        </ButtonJet>
                    </div>
                    <div class="px-4 py-6 bg-white rounded-lg border" v-if="formReport">
                        <FormReport :dataTank="tank" :closeForm="() => formReport = false"/>
                    </div>
                    <div class="px-4 py-6 bg-white rounded-lg border">
                        <div v-if="report.length > 0" class=" divide-y">
                            <div v-for="item in report" class="py-2 space-y-1">
                                <div class="flex justify-between">
                                    <div>
                                        <label class="text-sm text-gray-400">Petugas</label>
                                        <p class="capitalize font-semibold">{{item?.reporter}}</p>
                                    </div>
                                    <div class="text-right">
                                        <label class="text-sm text-gray-400">Tanggal Penginputan</label>
                                        <p>{{item?.datetime}}</p>
                                    </div>
                                </div>
                                <div class="flex space-x-4">
                                    <div>
                                        <label class="text-sm text-gray-400">Suhu</label>
                                        <p class="capitalize font-semibold">{{item?.temp}} &#8451;</p>
                                    </div>
                                    <div>
                                        <label class="text-sm text-gray-400">Volume</label>
                                        <p class="capitalize font-semibold">{{item?.volume}} KL</p>
                                    </div>
                                </div>
                                <div>
                                    <label class="text-sm text-gray-400">Catatan</label>
                                    <p>{{item?.notes}}</p>
                                </div>
                            </div>
                        </div>
                        <div v-else class="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="mx-auto text-gray-300 w-10">
                                <path fill="currentColor" d="m20.4 9-1 1.6-12.2-7 1-1.7 3 1.8 1.4-.4L17 5.8l.3 1.4 3 1.7M6 19V7h5l7 4v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z"/>
                            </svg>
                            <p class="text-gray-400">Laporan kosong</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

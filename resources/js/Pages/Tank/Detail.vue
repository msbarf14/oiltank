<script setup>
import {ref} from "vue"
import { PencilAltIcon, XCircleIcon } from "@heroicons/vue/outline"
import AppLayout from '@/Layouts/AppLayout.vue';
import ButtonJet from '@/Jetstream/Button.vue';
import CardTank from "./Partials/CardTank.vue"
import FormReport from "./Partials/FormReport.vue"

defineProps({
    tank: Object,
    report: Object
})

const formReport = ref(true)

</script>

<template>
    <AppLayout title="Dashboard">
        <div class="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
            <div class="flex space-x-4 mt-6">
                <div class="flex-0 space-y-4 w-[20rem]">
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
                </div>
                <div class="flex-1 space-y-4">
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
                        <FormReport :dataId="tank.id" :closeForm="() => formReport = false"/>
                    </div>
                    <div class="px-4 py-6 bg-white rounded-lg border divide-y">
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
                </div>
            </div>
        </div>
    </AppLayout>
</template>

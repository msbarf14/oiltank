<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import ButtonJet from '@/Jetstream/Button.vue';
import { DocumentReportIcon } from "@heroicons/vue/outline";
import { Inertia } from "@inertiajs/inertia"
import { Bar, Line } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale,  LineElement,
  PointElement, Filler)


const props = defineProps({
    tanks: Object,
    month: String
})


const dataLabel = (data) => {
    let properties = Object.keys(data)
    return properties;
}

const dataSet = (data) => {
    let properties = Object.values(data)
    return properties;
}


</script>

<template>
    <AppLayout title="Dashboard">
        <div class="py-2 px-4">
            <div class="max-w-7xl mx-auto space-y-2 sm:px-6 lg:px-8">
                <div class="py-2 text-gray-400">
                   <h1 class="text-2xl font-bold  ">Laporan {{month}}</h1> 
                   <p c>Grafik laporan harian dalam satu bulan.</p>
                </div>
                <div class="bg-white px-3 py-2 overflow-hidden shadow-xl sm:rounded-lg" v-for="item in tanks">
                    <div class="flex justify-between items-center">
                        <div class="flex space-x-4">
                            <div>
                                <p class="text-[14px] text-gray-400">Nama Tank</p>
                                <p class="font-semibold text-xl">{{item.label}}</p>
                            </div>
                            <div>
                                <p class="text-[14px] text-gray-400">Volume</p>
                                <p class="font-semibold text-xl">{{item.tank.volume}} <small class="text-gray-500">KL</small></p>
                            </div>
                            <div class="hidden lg:block">
                                <p class="text-[14px] text-gray-400">Max Volume</p>
                                <p class="font-semibold text-xl">{{item.tank.max_volume}} <small class="text-gray-500">KL</small></p>
                            </div>
                             <div class="hidden lg:block">
                                <p class="text-[14px] text-gray-400">Capacity</p>
                                <p class="font-semibold text-xl">{{item.tank.cap}} <small class="text-gray-500">KL</small></p>
                            </div>
                             <div class="hidden lg:block">
                                <p class="text-[14px] text-gray-400">Temperature</p>
                                <p class="font-semibold text-xl">{{item.tank.temp}} <small class="text-gray-500"> &#8451;</small></p>
                            </div>
                        </div>
                        <div>
                            <ButtonJet type="button" @click="Inertia.get(route('tank.detail', item.tank.id))">
                                <div class="flex space-x-2">
                                    <DocumentReportIcon class="w-4"/>
                                    <span>Report</span>
                                </div>
                            </ButtonJet>
                        </div>
                    </div>
                    <hr class="my-4 border-dashed">
                    <Bar 
                        :chart-data="{
                        labels: dataLabel(item.data),
                        datasets: [
                            { 
                                label: 'volume',
                                data: dataSet(item.data),
                                 fill: true,
                                borderColor: 'rgb(104, 117, 245)',
                                tension: 0.4,
                                backgroundColor: 'rgba(104, 117, 245, 0.4)'

                            }
                        ]
                    }" 
                    :height="100" 
                    />
                    <Line 
                        :chart-data="{
                        labels: dataLabel(item.data),
                        datasets: [
                             { 
                                label: 'Temperature',
                                data: dataSet(item.temp),
                                 fill: true,
                                borderColor: 'rgb(0, 216, 255)',
                                tension: 0.4,
                                backgroundColor: 'rgba(0, 216, 255, 0.4)'
                            },
                        ]
                    }" 
                    :height="100" 
                    />
                </div>
            </div>
        </div>
    </AppLayout>
</template>

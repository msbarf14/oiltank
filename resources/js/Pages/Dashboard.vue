<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    Filler
} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    Filler

)

const props = defineProps({
    tanks: Object
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
        <div class="py-12">
            <div class="max-w-7xl mx-auto space-y-2 sm:px-6 lg:px-8">
                <div class="bg-white px-3 py-2 overflow-hidden shadow-xl sm:rounded-lg" v-for="item in tanks">
                    {{ item.label }}
                    <Line :chart-data="{
                        labels: dataLabel(item.data),
                        datasets: [
                            { 
                                label: item.label,
                                data: dataSet(item.data),
                                fill: true,
                                borderColor: 'rgb(104, 117, 245)',
                                tension: 0.4,
                                backgroundColor: 'rgba(104, 117, 245, 0.4)'
                            }
                        ]
                    
                    }" :height="100" />
                </div>
            </div>
        </div>
    </AppLayout>
</template>

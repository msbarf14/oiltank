<script setup>
import { Inertia } from '@inertiajs/inertia'

const props = defineProps({
    data: Object
})

const labelStatus = () => {
    switch (props.data?.status) {
        case 'normal':
                return 'Normal'
            break;
        case 'refuelling':
                return 'Refuelling'
            break;
        case 'less_target':
                return 'Tidak Mencapai Target'
            break;
    
        default:
            break;
    }
}
</script>
<template>
 <div class="bg-white border p-3 rounded-lg relative hover:shadow-md" @click="Inertia.get(route('tank.detail', 1))">
    <div class="realtive"> 
        <p class="text-2xl font-semibold text-gray-600">{{data?.name}}</p>
        <span class="px-4 py-[0.5px] absolute right-3 bg-green-600 text-white text-sm rounded-full">{{labelStatus()}}</span>
    </div>
    <hr class="border-dashed mt-3">
    <div class="space-y-2 mt-6">
        <div class="flex justify-between">
            <div class="text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-6">
                    <path fill="currentColor" d="M22 8v8l1 2 1-2V8h-2zm-4 0v10l1 2 1-2V8h-2z"/>
                    <path fill="currentColor" d="M28 4a2 2 0 0 0-2 2v20H6v-4h4v-2H6v-4h4v-2H6v-4h8v4l1 2 1-2V8H6V6a2 2 0 0 0-2-2H2v2h2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6h2V4Z"/>
                </svg>
                <small class="text-[10px]">Capcity</small>
            </div>
            <div class="text-right">
                <h1 class="text-lg font-bold text-gray-700">{{data?.capacity}}</h1>
                <p class="text-[12px] text-gray-600">Kilo Liter (KL)</p>
            </div>
        </div>
        <div class="flex justify-between">
            <div class="text-rose-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-6">
                    <path fill="currentColor" d="M28 4a2 2 0 0 0-2 2v2h-2a3.4 3.4 0 0 1-3-2.3 1 1 0 0 0-1-.7 1 1 0 0 0-1 .7A3.4 3.4 0 0 1 16 8a3.4 3.4 0 0 1-3-2.3 1 1 0 0 0-1-.7 1 1 0 0 0-1 .7A3.4 3.4 0 0 1 8 8H6V6a2 2 0 0 0-2-2H2v2h2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6h2V4ZM6 26v-4h4v-2H6v-4h4v-2H6v-4h2a5 5 0 0 0 4-2 5 5 0 0 0 8 0 5 5 0 0 0 4 2h2v16Z"/>
                </svg>
                <small class="text-[10px]">Max Capcity</small>
            </div>
            <div class="text-right">
                <h1 class="text-lg font-bold text-gray-700">{{data?.max_volume}}</h1>
                <p class="text-[12px] text-gray-600">Kilo Liter (KL)</p>
            </div>
        </div>
        <div class="flex justify-between">
            <div class="text-cyan-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-6 ">
                    <path fill="currentColor" d="M25 30a5 5 0 0 1-3-9v-6a3 3 0 0 1 6 0v6a5 5 0 0 1-3 9zm0-16a1 1 0 0 0-1 1v7.1l-.5.3A3 3 0 0 0 22 25a3 3 0 0 0 6 0 3 3 0 0 0-1.5-2.6l-.5-.3V15a1 1 0 0 0-1-1zm-9 10h-2a11.9 11.9 0 0 1 3.8-8.7l1.3 1.4A10 10 0 0 0 16 24z"/>
                    <path fill="currentColor" d="M11 24H9A17 17 0 0 1 26 7h4v2h-4a15 15 0 0 0-15 15Z"/>
                    <path fill="currentColor" d="M26 2a21.9 21.9 0 0 0-12 3.6A21.9 21.9 0 0 0 2 2v2a19.9 19.9 0 0 1 10.3 2.8A22.2 22.2 0 0 0 9.9 9 17 17 0 0 0 2 7v2a15 15 0 0 1 6.6 1.5A22 22 0 0 0 7 13.1 12 12 0 0 0 2 12v2a9.9 9.9 0 0 1 4 .8A21.9 21.9 0 0 0 4 24h2A20 20 0 0 1 26 4h4V2Z"/>
                </svg>
                <small class="text-[10px]">temperature</small>
            </div>
            <div class="text-right">
                <h1 class="text-lg font-bold text-gray-700">{{data?.temp}}</h1>
                <p class="text-[12px] text-gray-600">Celcius &#8451;</p>
            </div>
        </div>
    </div>
</div>
</template>
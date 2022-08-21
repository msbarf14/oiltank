<script setup>
import InputJet from "@/Jetstream/Input.vue";
import ButtonJet from "@/Jetstream/Button.vue";
import { useForm } from '@inertiajs/inertia-vue3'

const props = defineProps({
    dataId: Number,
    closeForm: Function
})

const form = useForm({
    tank_id: props.dataId,
    reporter: null,
    temp: 0,
    datetime: null,
    volume: 0,
    notes: null,
    status: 'normal'
})

const submit = () => {
    form.post(route('report.store'), {
        onError: (err) => console.log(error),
        onSuccess: () => props.closeForm()
    })
}
</script>
<template>
    <form @submit.prevent="submit" class="space-y-2">
        <div class="space-y-2">
            <label class="text-sm text-gray-500">Tanggal & Waktu Laporan</label>
            <br>
            <InputJet v-model="form.datetime" type="datetime-local" class="border py-1 w-1/2" required/>
        </div>
        <div class="space-y-2">
            <label class="text-sm text-gray-500">Petugas</label>
            <InputJet v-model="form.reporter" class="border py-1 w-full" required/>
        </div>
        <div class="flex space-x-2">
            <div class="space-y-2">
                <label class="text-sm text-gray-600">Volume (KL)</label>
                <InputJet v-model="form.volume" type="number" class="w-full py-1 border" min="00" placeholder="ex: 1000" required />
            </div>
            <div class="space-y-2">
                <label class="text-sm text-gray-600">Temperature (Celcius &#8451;)</label>
                <InputJet v-model="form.temp" type="number" class="w-full py-1 border" min="0" placeholder="ex: 30" required />
            </div>
        </div>
        <div class="space-y-2">
            <label class="text-sm text-gray-500">Catatan</label>
            <InputJet v-model="form.notes" class="border py-1 w-full" />
        </div>
        <div class="space-y-2 flex flex-col">
            <label class="text-sm text-gray-500">Status</label>
            <select
            v-model="form.status"
                class="border-gray-300 w-[20rem] px-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm">
                <option value="normal">Normal</option>
                <option value="refuelling">Normal</option>
                <option value="less_target">Kurang Dari Target</option>
            </select>
        </div>
        <hr class="border-dashed">
        <div>
            <ButtonJet type="submit">Simpan</ButtonJet>
        </div>
    </form>
</template>
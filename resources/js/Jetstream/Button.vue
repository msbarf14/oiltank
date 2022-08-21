<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
    isDark: {
        type: Boolean,
        default: true
    }
});
</script>

<template>
    <button :type="type" 
    :class="[
        'inline-flex items-center px-4 py-2  border border-transparent rounded-md font-semibold text-xs  uppercase tracking-widest   focus:outline-none  focus:ring  disabled:opacity-25 transition',
        isDark  ? 'bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-900 focus:border-gray-900 focus:ring-gray-300' : 'bg-gray-100 text-gray-800 hover:bg-gray-50 active:bg-gray-100 focus:border-gray-100 focus:ring-gray-50',
    ]">
        <slot />
    </button>
</template>

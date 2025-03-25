<template>
  <div class="text-center">
    <h1 class="text-3xl font-bold text-gray-800 mb-4">欢迎使用你的应用</h1>
    <p class="text-lg text-gray-600 mb-8">Vue 3 + TypeScript + Vite + Tailwind CSS 项目</p>

    <div class="bg-white shadow rounded-lg p-6 max-w-md mx-auto">
      <h2 class="text-xl font-semibold mb-4">计数器示例</h2>
      <p class="mb-4">当前计数: {{ count }}</p>
      <div class="flex justify-center space-x-4">
        <button
            @click="increment"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          增加
        </button>
        <button
            @click="decrement"
            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          减少
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};
</script>

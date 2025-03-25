<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- 页眉 -->
    <header class="bg-white shadow">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="text-xl font-bold text-gray-800">团险智能助手</div>
        <div class="flex space-x-4">
          <router-link
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              class="px-3 py-2 rounded hover:bg-gray-100 transition"
              :class="{ 'bg-gray-100': $route.path === link.path }"
          >
            {{ link.name }}
          </router-link>
        </div>
      </nav>
    </header>

    <!-- 内容区域 - 通过插槽接收页面内容 -->
    <main class="container mx-auto px-4 py-8 flex-grow">
      <router-view></router-view>
    </main>

    <!-- 页脚 -->
    <footer class="bg-white shadow-inner py-4 mt-auto">
      <div class="container mx-auto px-4 text-center text-gray-600">
        &copy; {{ new Date().getFullYear() }} 团险智能助手. 版权所有.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const navLinks = [
  { name: '首页', path: '/' },
  { name: '关于', path: '/about' },
];
</script>

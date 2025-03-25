<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" :src="logoSrc" alt="团险智能助手" />
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">登录您的帐户</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

      <div v-if="authStore.error" class="mb-5 block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 bg-red-50 text-red-500">
        {{ authStore.error }}
      </div>

      <form class="space-y-6" @submit.prevent="handleLogin">
        <div>
          <label for="username" class="block text-sm/6 font-medium text-gray-900">用户名</label>
          <div class="mt-2">
            <input v-model="loginForm.username" type="text" name="username" id="username" autocomplete="username" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-900">密码</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">忘记密码？</a>
            </div>
          </div>
          <div class="mt-2">
            <input
                v-model="loginForm.password"
               type="password"
               name="password"
               id="password"
               autocomplete="current-password"
               required=""
               class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              :disabled="authStore.isLoading"
          >

          {{ authStore.isLoading ? '登录中...' : '登录' }}

          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        没有账号？
        {{ ' ' }}
        <a @click="handleSignUpAccount" class="font-semibold text-indigo-600 hover:text-indigo-500">请联系正辉老师添加账号</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useAuthStore } from '@/stores';
import type { LoginRequest } from '@/services/api/types/auth';
import logoSrc from '@/assets/images/giia_icon.svg';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuthStore();

const loginForm = reactive<LoginRequest>({
  username: '',
  password: ''
});

const handleSignUpAccount = async () => {
  router.push("/signup");
};
const handleLogin = async () => {
  await authStore.login(loginForm);
};
</script>

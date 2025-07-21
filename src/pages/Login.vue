<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import logo from "@/assets/image 30.png";
import illustrationPlaceholder from "@/assets/image 31.png";
import { login } from "../api/auth";

const router = useRouter();

const showPassword = ref(false);
const passwordType = computed(() => (showPassword.value ? "text" : "password"));

function togglePassword() {
  showPassword.value = !showPassword.value;
}

const email = ref("");
const password = ref("");
const loading = ref(false);
const error = ref("");

async function handleLogin(e: Event) {
  e.preventDefault();
  error.value = "";
  loading.value = true;
  try {
    const result = await login({
      email: email.value,
      password: password.value,
    });
    document.cookie = `token=${result.accessToken}; path=/;`;
    router.push("/dashboard");
  } catch (err: any) {
    error.value = err.message || "Login failed. Please try again.";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="min-h-screen flex flex-col md:flex-row bg-white">
    <div
      class="hidden md:flex flex-col justify-center items-center w-1/2 bg-purple-100 rounded-r-3xl p-12"
    >
      <div class="mb-8">
        <img :src="logo" alt="Team Achieve Logo" class="h-16 w-auto mx-auto" />
      </div>
      <div class="mb-8">
        <img
          :src="illustrationPlaceholder"
          alt="Illustration"
          class="rounded-2xl w-full max-w-md"
        />
      </div>
      <div class="text-center mt-4">
        <h2 class="text-2xl font-bold text-purple-900 mb-2">Team Achieve</h2>
        <p class="text-gray-700 font-medium">
          Your perfect solution for funding your desires
        </p>
      </div>
    </div>

    <div
      class="flex flex-1 flex-col justify-center items-center px-4 py-8 md:py-0 md:px-16"
    >
      <div class="md:hidden mb-8">
        <img :src="logo" alt="Team Achieve Logo" class="h-16 w-auto mx-auto" />
      </div>
      <h1 class="text-3xl font-bold text-purple-800 mb-2 text-center">
        Welcome Back
      </h1>
      <p class="text-gray-600 mb-6 text-center">
        Enter your email address and password to access your account.
      </p>
      <form class="w-full max-w-md space-y-4" @submit="handleLogin">
        <div v-if="error" class="text-red-600 text-center">{{ error }}</div>
        <div>
          <label for="email" class="block text-gray-800 font-medium mb-1"
            >Email Address <span class="text-red-500">*</span></label
          >
          <input
            id="email"
            v-model="email"
            type="email"
            required
            placeholder="Enter your email"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div>
          <label for="password" class="block text-gray-800 font-medium mb-1"
            >Password <span class="text-red-500">*</span></label
          >
          <div class="relative flex items-center">
            <input
              id="password"
              v-model="password"
              :type="passwordType"
              required
              placeholder="Enter your password"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 pr-12"
            />
            <button
              type="button"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 focus:outline-none border-l border-gray-300 pr-3.5"
              aria-label="Show password"
              @click="togglePassword"
              tabindex="0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <ellipse
                  cx="14"
                  cy="14"
                  rx="11"
                  ry="7"
                  stroke="#757575"
                  stroke-width="2"
                />
                <circle
                  cx="14"
                  cy="14"
                  r="3"
                  stroke="#757575"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <label class="flex items-center">
            <input
              type="checkbox"
              class="appearance-none h-4 w-4 bg-white border border-gray-300 rounded-sm checked:bg-purple-600 checked:border-transparent focus:outline-none"
            />
            <span class="ml-2 text-gray-700">Remember me</span>
          </label>
          <a href="#" class="text-purple-700 font-medium hover:underline"
            >Forgot Password?</a
          >
        </div>
        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-purple-800 text-white font-semibold rounded-lg py-3 mt-2 hover:bg-purple-900 transition disabled:opacity-50"
        >
          <span v-if="loading">Signing in...</span>
          <span v-else>Sign in</span>
        </button>
      </form>
      <p class="mt-6 text-center text-gray-700">
        Don’t have an account?
        <a href="#" class="text-purple-800 font-semibold hover:underline"
          >Sign up</a
        >
      </p>
    </div>
  </div>
</template>

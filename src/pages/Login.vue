<script setup lang="ts">
import { ref, computed } from "vue";
import logo from "@/assets/image 30.png";
import illustrationPlaceholder from "@/assets/image 31.png";

const showPassword = ref(false);
const passwordType = computed(() => (showPassword.value ? "text" : "password"));

function togglePassword() {
  showPassword.value = !showPassword.value;
}
</script>

<template>
  <div class="min-h-screen flex flex-col md:flex-row bg-white">
    <!-- Left Side (Desktop Only) -->
    <div
      class="hidden md:flex flex-col justify-center items-center w-1/2 bg-purple-100 rounded-r-3xl p-12"
    >
      <!-- Logo Placeholder -->
      <div class="mb-8">
        <img :src="logo" alt="Team Achieve Logo" class="h-16 w-auto mx-auto" />
      </div>
      <!-- Illustration Placeholder -->
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

    <!-- Right Side (Form) -->
    <div
      class="flex flex-1 flex-col justify-center items-center px-4 py-8 md:py-0 md:px-16"
    >
      <!-- Logo (Mobile Only) -->
      <div class="md:hidden mb-8">
        <img :src="logo" alt="Team Achieve Logo" class="h-16 w-auto mx-auto" />
      </div>
      <h1 class="text-3xl font-bold text-purple-800 mb-2 text-center">
        Welcome Back
      </h1>
      <p class="text-gray-600 mb-6 text-center">
        Enter your email address and password to access your account.
      </p>
      <form class="w-full max-w-md space-y-4">
        <div>
          <label for="email" class="block text-gray-800 font-medium mb-1"
            >Email Address <span class="text-red-500">*</span></label
          >
          <input
            id="email"
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
            >
              <!-- Updated Eye Icon -->
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
          class="w-full bg-purple-800 text-white font-semibold rounded-lg py-3 mt-2 hover:bg-purple-900 transition"
        >
          Sign in
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

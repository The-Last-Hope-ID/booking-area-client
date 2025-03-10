<script setup>
import Button from "primevue/button";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="flex gap-x-2">
      <Button
        label="Admin Panel"
        class="text-white"
        severity="secondary"
        @click="() => router.push('/admin')"
      />
      <Button label="User" @click="() => router.push('/user')" />
    </div>
  </div>
</template>

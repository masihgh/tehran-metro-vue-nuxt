<template>
    <header class="navbar bg-base-100 shadow-lg">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" href="/">
          My App
        </a>
      </div>
      <div class="flex-none gap-2">
        <DarkMode />
        <a class="btn btn-ghost" href="/about">About</a>
        <a class="btn btn-ghost" href="/contact">Contact</a>
      </div>
    </header>
  </template>
  
  <script setup>
  // No additional logic needed for now
  </script>
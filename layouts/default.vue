<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;700&display=swap');

html {
  font-family: 'Commissioner', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1,
h2,
h3,
button {
  @apply font-bold;
}

h1,
h2,
h3,
p {
  @apply mb-4;
}

h1 {
  @apply text-xl;
}

h2 {
  @apply text-lg;
}

p {
  @apply text-dark-gray;
}

a:hover {
  @apply underline;
}

section {
  @apply mb-8 py-8 px-6 sm:px-10;
  @apply bg-white rounded-lg border-gray-200 border-opacity-30;
  border-width: 1px;
}

button {
  @apply text-white bg-light-cyan py-4 px-10 rounded-full h-14 transition-colors;
}

button:hover,
button:focus {
  @apply bg-dark-cyan;
}

button:disabled {
  @apply bg-dark-gray;
}

.center-container {
  @apply w-full sm:w-10/12 md:w-3/4 lg:w-1/2 mx-auto;
}
</style>

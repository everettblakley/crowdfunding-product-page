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

.center-container {
  @apply w-full sm:w-10/12 md:w-3/4 lg:w-1/2 mx-auto;
}
</style>

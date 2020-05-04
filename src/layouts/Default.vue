<template>
  <div class="layout">
    <nav>
      <div class="w-full px-4 lg:px-0 mx-auto max-w-screen-lg">
        <nav class="py-6 flex justify-between max-w-md mx-auto uppercase font-semibold">
          <g-link class="hover:underline" to="/">Home</g-link>
          <g-link class="hover:underline" to="/">Blog</g-link>
          <g-link class="hover:underline" to="/about/">About</g-link>
        </nav>
      </div>
    </nav>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

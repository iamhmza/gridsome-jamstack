<template>
  <Layout>
    <article>
      <h2 class="text-3xl font-bold capitalize">{{ $page.post.title }}</h2>
      <span class="text-gray-600">{{ $page.post.date }}</span>

      <main class="mt-6" v-html="$page.post.content"></main>
    </article>
  </Layout>
</template>

<page-query>
query($id: ID!){
  post(id: $id) {
    title
    content
    date(format: "MMMM DD, YYYY")
  }
  
}
</page-query>

<script>
export default {};
</script>

<style></style>

<template>
  <Layout>
    <article>
      <h2 class="text-3xl font-bold capitalize mb-4">{{ $page.post.title }}</h2>
      <!-- <h3>sub title</h3>
      <span>jan 12, 2023</span>-->

      <main v-html="$page.post.content"></main>
    </article>
  </Layout>
</template>

<page-query>
query($id: ID!){
  post(id: $id) {
    title
    content
    date
  }
  
}
</page-query>

<script>
export default {};
</script>

<style></style>

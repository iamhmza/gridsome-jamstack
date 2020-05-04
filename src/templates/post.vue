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
export default {
  metaInfo() {
    return {
      title: `${this.$page.post.title}`
    };
  },
  mounted() {
    console.log(this);
  }
};
</script>


<style>
article {
  padding: 2rem 0;
}
article * + * {
  margin-top: 1rem;
}
/* Links
–––––––––––––––––––––––––––––––––––––––––––––––––– */
article a {
  color: #1eaedb;
}
article a:hover {
  color: #0fa0ce;
}
/* Lists
–––––––––––––––––––––––––––––––––––––––––––––––––– */
article ul {
  list-style: circle inside;
}
article ol {
  list-style: decimal inside;
}
article ol,
article ul {
  padding-left: 0;
  margin-top: 0;
}
article ul ul,
article ul ol,
article ol ol,
article ol ul {
  margin: 1.5rem 0 1.5rem 3rem;
  font-size: 90%;
}
article li {
  margin-bottom: 1rem;
}

/* Code
–––––––––––––––––––––––––––––––––––––––––––––––––– */
article code {
  padding: 0.2rem 0.5rem;
  margin: 0 0.2rem;
  font-size: 90%;
  white-space: nowrap;
  background: #f1f1f1;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
}
article pre > code {
  display: block;
  padding: 1rem 1.5rem;
  white-space: pre;
}
</style>

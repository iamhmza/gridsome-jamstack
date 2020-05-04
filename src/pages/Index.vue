<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <header class="bg-gray-900 text-gray-200 py-48 text-center">
      <div class="w-full px-4 lg:px-0 mx-auto max-w-screen-lg">
        <h2 class="text-6xl font-bold">Hamza Ouijane</h2>

        <p
          class="text-lg capitalize max-w-sm mx-auto"
        >Hello and welcome! Hero i occasionally post articles about web dev.</p>
      </div>
    </header>

    <section class="py-48">
      <div class="w-full px-4 lg:px-0 mx-auto max-w-screen-lg">
        <h3 class="text-xl font-semibold capitalize mb-6">Latest Posts</h3>
        <ul>
          <li
            class="mb-8 block shadow-lg rounded p-6"
            v-for="post in $page.allPost.edges"
            :key="post.node.id"
          >
            <div class="text-gray-500 uppercase mb-3">{{post.node.date}}</div>
            <h4 class="text-2xl font-bold capitalize mb-2">{{post.node.title}}</h4>

            <p class="mb-8" v-html="post.node.content.substring(0, 22)+'...'"></p>
            <g-link
              class="block w-40 text-sm text-center bg-green-400 text-white py-3 rounded-full"
              :to="post.node.path"
            >Read This Article</g-link>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
</template>


<page-query>
{
  allPost {
    edges {
      node {
      	id
        title
        content
        date(format: "MMMM DD, YYYY")
        path
    	}
  	}
  }
}
</page-query>  


<script>
export default {
  metaInfo: {
    title: 'Simple blog'
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

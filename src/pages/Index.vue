<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <ul>
      <li class="mb-4" v-for="post in $page.allPost.edges" :key="post.node.id">
        <g-link class="text-red-600 font-blod" :to="post.node.path">{{post.node.title}}</g-link>
        <br />
        <small>({{post.node.date}})</small>
      </li>
    </ul>
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

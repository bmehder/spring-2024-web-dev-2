<script>
  export let data
</script>

<article class="flow">
  <h1>{@html data.post.title}</h1>
  <img src="{data.post.featured_image}" alt="{data.post.title}">
  <div>{@html data.post.content}</div>
</article>
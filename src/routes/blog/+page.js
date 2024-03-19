export async function load({ fetch }) {
	const endpoint =
		'https://public-api.wordpress.com/rest/v1.1/sites/repo995752852.wordpress.com/posts/'
  
  const response = await fetch(endpoint)
  const posts = await response.json()

  return {
    posts: posts.posts
  }
}

// https://public-api.wordpress.com/rest/v1.1/sites/repo995752852.wordpress.com/posts/
//'https://public-api.wordpress.com/rest/v1.1/sites/repo995752852.wordpress.com/posts/slug:'

// https://public-api.wordpress.com/rest/v1.1/sites/brad34937f1e4bb.wordpress.com/posts/
//'https://public-api.wordpress.com/rest/v1.1/sites/brad34937f1e4bb.wordpress.com/posts/slug:'
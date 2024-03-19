export async function load({ fetch, params }) {
	const endpoint =
		'https://public-api.wordpress.com/rest/v1.1/sites/repo995752852.wordpress.com/posts/slug:' +
		params.slug

	const response = await fetch(endpoint)
	const post = await response.json()

	return {
		post,
	}
}

// https://public-api.wordpress.com/rest/v1.1/sites/repo995752852.wordpress.com/posts/
//'https://public-api.wordpress.com/rest/v1.1/sites/repo995752852.wordpress.com/posts/slug:'

// https://public-api.wordpress.com/rest/v1.1/sites/brad34937f1e4bb.wordpress.com/posts/
//'https://public-api.wordpress.com/rest/v1.1/sites/brad34937f1e4bb.wordpress.com/posts/slug:'

// &#8963;

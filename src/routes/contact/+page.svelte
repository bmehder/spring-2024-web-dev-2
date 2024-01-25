<script>
	let firstName = ''
	let lastName = ''
	let email = ''
	let message = ''

	function handleSubmit() {
		console.log(firstName, lastName, email, message)
	}
</script>

<h1>Contact</h1>

<section class="flow">
	<p>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita vel possimus
		accusamus blanditiis consequatur commodi, rerum quidem dolorem dignissimos provident
		sed facere? Similique eaque, ipsum tenetur nisi eos, voluptatum error saepe possimus
		dignissimos earum architecto harum!
	</p>

	<form on:submit|preventDefault={handleSubmit}>
		<div>
			<label for="first-name">First Name</label>
			<input
				type="text"
				id="first-name"
				name="first-name"
				bind:value={firstName}
				placeholder="Enter first name..."
        required
			/>
		</div>

		<div>
			<label for="last-name">Last Name</label>
			<input
				type="text"
				id="last-name"
				name="last-name"
				bind:value={lastName}
				placeholder="Enter last name..."
        required
			/>
		</div>

		<div>
			<label for="email">Email</label>
			<input
				type="email"
				id="email"
				name="email"
				bind:value={email}
				placeholder="Enter email address..."
        required
			/>
		</div>

		<div>
			<label for="message">Message</label>
			<textarea
				name="message"
				id="message"
				rows="10"
				bind:value={message}
				placeholder="Enter message..."
        required
			></textarea>
		</div>

		<button>Submit Message</button>
	</form>
</section>

<style>
	form {
    max-width: 32rem;
		display: grid;
		gap: 1.5rem;
	}

	div {
		display: grid;
		gap: 0.25rem;
	}

	input,
	textarea {
		padding: 0.5rem;
		font-family: inherit;
	}
</style>
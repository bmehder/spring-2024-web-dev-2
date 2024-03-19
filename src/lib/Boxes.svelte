<section class="section flow">
	<h2>Lorem ipsum</h2>
	<div class="boxes">
		<div class="flow">
			<img src="https://picsum.photos/300?random=1" alt="placeholder" />
			<div>
				<h3>Title One</h3>
				<div class="subheading">lorem ipsum</div>
			</div>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nostrum atque
				molestias odio illum tempora corrupti!
			</p>
			<a href="/" class="button">Read More</a>
		</div>

		<div class="flow">
			<img src="https://picsum.photos/300?random=2" alt="placeholder" />
			<div>
				<h3>Title Two</h3>
				<div class="subheading">lorem ipsum</div>
			</div>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nostrum atque
				molestias odio illum tempora corrupti!
			</p>
			<a href="/blog" class="button">Read More</a>
		</div>

		<div class="flow">
			<img src="https://picsum.photos/300?random=3" alt="placeholder" />
			<div>
        <h3>Title Three</h3>
        <div class="subheading">lorem ipsum</div>
      </div>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nostrum atque
				molestias odio illum tempora corrupti!
			</p>
			<a href="/contact" class="button">Read More</a>
		</div>
	</div>
</section>

<style>
  section {
    padding: 3rem;
    background-color: rgb(32, 32, 32);
    border-radius: 1rem;
		color: white;
  }
	.boxes {
    display: grid;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		gap: 3rem;
    color: white;
	}
	img {
		aspect-ratio: 16/9;
		object-fit: cover;
		object-position: center;
	}
  .subheading {
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }
  .button {
    display: inline-block;
    padding-inline: 1rem;
  }
</style>
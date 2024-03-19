<div>
  <h1>Lorem ipsum <span>dolor</span> sit.</h1>
  <p>Lorem ipsum dolor sit.</p>
  <a href="/blog" class="button">Let's Go!</a>
</div>

<style>
  div {
    padding-block: 6rem;
    padding-inline: 3rem;
    background-image: url('https://picsum.photos/1200');
    /* background-image: url('/hero.jpg'); */
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    text-shadow: 0 0 8px rgb(65, 65, 65);
  }

  h1 {
    max-width: 42rem;
    margin: 0;
    font-size: 6rem;
    line-height: 1.1;
  }

  span {
    color: hsl(189, 100%, 64%);
  }

  p {
    margin-block-start: 0.5rem;
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  a {
    display: inline-block;
    margin-block-start: 1.5rem;
    padding-inline: 2rem;
  }

  a:hover {
    background-color: hsl(189, 100%, 64%);
    text-decoration: none;
  }
</style>
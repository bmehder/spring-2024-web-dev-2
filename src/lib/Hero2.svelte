<div class="outer">
  <div class="container">
    <h1>Lorem ipsum <span>dolor</span> sit.</h1>
    <p>Lorem ipsum dolor sit.</p>
    <a href="/blog" class="button">Let's Go!</a>
  </div>
</div>

<style>
  .outer {
    padding-block: 8rem;
    padding-inline: 3rem;
    /* background-image: url('https://picsum.photos/1400'); */
    background-image: url('/hero.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    text-shadow: 0 0 8px rgb(99, 99, 99);
  }

  h1 {
    max-width: 42rem;
    margin: 0;
    color: white;
    font-size: 6rem;
    line-height: 1.1;
  }
  
  span {
    color: hsl(189, 100%, 64%);
  }
  
  p {
    margin-block-start: 0.5rem;
    color: white;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
  
  a {
    display: inline-block;
    margin-block-start: 2rem;
    padding-block: 1rem;
    padding-inline: 2rem;
  }
  
  a:hover {
    background-color: hsl(189, 100%, 64%);
    text-decoration: none;
  }
</style>
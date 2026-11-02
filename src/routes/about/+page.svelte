svelte 

<script> 

  let title = $state("About"); 

</script> 

 

<h1>{title}</h1> 

<p>This is the About page!</p> 

<nav> 

  <a href="/">Home</a> |  

  <a href="/about">About</a> |  

  <a href="/content">Content</a> 

</nav> 
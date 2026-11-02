svelte 

<script> 

let title = $state("Content"); 

</script> 

<h1>{title}</h1> 

<p>This is the Content page!</p> 

<nav> 

  <a href="/">Home</a> |  

  <a href="/about">About</a> |  

  <a href="/content">Content</a> 

</nav>
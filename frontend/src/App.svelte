<script>
	import { Router, Route } from "svelte-routing";
	import Nav from "./component/Nav.svelte";
	import Footer from "./component/Footer.svelte";
	import Home from "./page/Home.svelte";
	import SignUp from "./page/Signup.svelte";

	export let url = "";

</script>
<Router url="{url}">
	<div class="page">
	<Nav/>
	<div class="page-wraper">
	  <Route path="signup" component="{SignUp}" />
	  <Route path="/"><Home /></Route>
	</div>
	<Footer/>
	</div>
  </Router>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
	@tailwind utilities;  

	.page {
		position: relative;
  		min-height: 100vh;
	}
	.page-wraper{
		padding-bottom: 2.5rem;
	}
</style>
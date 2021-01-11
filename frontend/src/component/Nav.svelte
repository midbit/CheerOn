
<script>
	import {Link} from "svelte-routing";

</script>
<nav class="bg-onyx flex flex-row p-6 space-x-4">
    <div>
        <Link to="/" 
            class="
                text-lg 
                text-white"> 
            CheerOn 
        </Link>
    </div>
    <div class="
        flex 
        flex-row 
        justify-end 
        flex-grow
    ">
        <Link to="/signup" class="text-white"> Log In </Link>
    </div>  
</nav>


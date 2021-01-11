
<script lang="ts">
 
</script>
<form class="
mt-8 
space-y-6 
bg-white 
p-4 
lg:w-1/2
w-80
block 
rounded-md
m-auto
bg-opacity-50" 
action="#" 
method="POST">
    <h1 class="text-xl"> Sign Up!</h1>
    <h1 class="text-sm"> Start setting goal and cheering your friends! </h1>
    <input type="hidden" name="remember" value="true">
    <div class="rounded-md shadow-sm -space-y-px">
      <div>
        <label for="username" class="sr-only">Username</label>
        <input 
            id="username" 
            name="username"
            required 
            class="
            appearance-none 
            rounded-none 
            relative 
            block 
            w-52
            lg:w-1/3
            md:w-80
            m-auto
            sm:w-80
            xs:w-52
            mb-2
            px-3 
            py-2 
            border 
            border-gray-300 
            placeholder-gray-500 
            text-gray-900 
            rounded-md 
            focus:outline-none 
            focus:ring-aero 
            focus:border-aero 
            focus:z-10 
            sm:text-sm" 
            placeholder="Username">
      </div>
      <div>
        <label for="password" class="sr-only">Password</label>
        <input 
        id="password" 
        name="password" 
        type="password" 
        autocomplete="current-password" 
        required 
        class="
        appearance-none 
        rounded-none 
        relative 
        block
        w-52
        lg:w-1/3
        md:w-80
        sm:w-80
        xs:w-52 
        px-3 
        py-2 
        border 
        m-auto
        border-gray-300 
        placeholder-gray-500 
        text-gray-900 
        rounded-md 
        focus:outline-none 
        focus:ring-aero 
        focus:border-aero 
        focus:z-10 
        sm:text-sm
        mb-2" 
        placeholder="Password">
      </div>
      <div>
        <label for="confirm-password" class="sr-only">Confirm Password</label>
        <input 
        id="confirm-password" 
        name="confirm-password" 
        type="password" 
        autocomplete="current-password" 
        required 
        class="
        appearance-none 
        rounded-none 
        relative 
        block 
        w-52
        lg:w-1/3
        m-auto
        md:w-80
        sm:w-80
        xs:w-52
        px-3 
        py-2 
        border 
        border-gray-300 
        placeholder-gray-500 
        text-gray-900 
        rounded-md 
        focus:outline-none 
        focus:ring-aero 
        focus:border-aero 
        focus:z-10 
        sm:text-sm" 
        placeholder="Confirm Pasword">
      </div>
    </div>
    <div>
        <button type="submit" class="
        group 
        relative
        w-52
        lg:w-1/3
        md:w-80
        sm:w-80
        xs:w-52 
        py-2 
        px-4 
        border 
        border-transparent 
        text-sm 
        font-medium 
        rounded-md 
        text-white 
        bg-aero 
        hover:bg-beau-blue 
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2 
        focus:ring-aero">
            Sign Up
        </button>
    </div>
  </form>
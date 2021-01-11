
<script lang="ts">
 import BenefitGrid from "../component/BenefitGrid.svelte";
 import SignUpForm from "../component/SignUpForm.svelte";
</script>
<div class="">
<div class="p-4 xl:h-1/2  md:h-96 sm:h-96 xs:h-96 h-screen text-center bg-cover bg-opacity-0" style="background-image: url('https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')">
    <h1 class="
    text-xl
    md:text-2xl
    xl:text-3xl
    text-white
    "> 
        Spread Positivity by Supporting Others Achieving their Personal Goal!
     </h1>
    <SignUpForm/>
</div>
<div class="
    p-4 grid
    mt-20
    mb-20
    gap-y-28 
    md:grid-cols-2 
    sm:grid-cols-2
    grid-cols-1
    justify-center">
    <BenefitGrid src="https://www.flaticon.com/svg/static/icons/svg/1694/1694364.svg" header="Make Your Goal"description="We provide a easy and clean interface to set up your goal the SMART way."/>
    <BenefitGrid src="https://www.flaticon.com/svg/static/icons/svg/1312/1312202.svg" header="Track Your Goal" description="Divide your goal into smaller steps and make it into a check list."/>
    <BenefitGrid src="https://www.flaticon.com/svg/static/icons/svg/2333/2333383.svg" header="Cheers Your Friends" description="Let your friends know that you're supporting their endeavors by cheering for them."/>
    <BenefitGrid src="https://www.flaticon.com/svg/static/icons/svg/1027/1027618.svg" header="Get Suggestions" description="Other friends who accomplish the goal before can gives you some of their advices!"/>
</div>
</div>
<style>
</style>

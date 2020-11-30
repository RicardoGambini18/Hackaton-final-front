<template>



   
   
   
    <form action="" class="form">

    
    <LoginNav/>
    <LoginSocial/>
    <LoginResgistry/>
    <FormSubtmit/>
    


    </form>
   
   

    


  
</template>

<script>


import LoginNav from '@/components/LoginNav.vue'
import LoginSocial from '@/components/LoginSocial.vue'

import LoginResgistry from '@/components/LoginResgistry.vue'
import FormError from '@/components/FormError.vue'
import FormSubtmit from '@/components/FormSubtmit.vue'
import LonginRecover from '@/components/LonginRecover.vue'

export default {
   
   name: "LogiFrom",
    
    components:{
        LoginNav,
        LoginSocial,
        LoginResgistry,
        FormError,
        FormSubtmit,
        LonginRecover
    }
    

}
</script>

<style lang="scss">

.form{

    width: 400px;
    padding: 20px;
    height: 100vh;
    background: white;


   @media (min-width:  770px) {
       position: absolute;
        top:0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
   }

}


</style>
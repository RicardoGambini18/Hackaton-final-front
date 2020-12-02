<template>
    <div>
        <BackStore />
        <PaymentMethod />
        <FormPayment />
        <Switchs />
        <FormSubmit />
    </div>
</template>

<script>
import BackStore from '@/components/BackStore.vue';
import PaymentMethod from '@/components/PaymentMethod.vue';
import FormPayment from '@/components/FormPayment.vue';
import Switchs from '@/components/Switchs.vue';
import FormSubmit from '@/components/FormSubtmit.vue';

export default {
    name: 'Pasarela',
    components: {
        BackStore,
        PaymentMethod,
        FormPayment,
        Switchs,
        FormSubmit
    }
}
</script>

<style scoped lang="scss">

</style>
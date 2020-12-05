<template>
    <div class="l-container-pd pasarela">
        <div class="l-section">
            <div class="pasarela__subtotal">
                <Resumen />
            </div> 
            <div class="pasarela__content">
                <div class="pasarela__back">
                    <router-link to="/carrito">
                        <img src="/assets/back-shop.svg">
                    </router-link>
                    <h3 class="Title-3">Carrito de compras</h3>
                </div>
                <div class="pasarela__switch">
                    <p class="Title-4">Selecciona tu método de pago</p>
                    <div class="ButtonBox">
                        <button class="Parrafo is-active" v-if="metodoPago == 'debito'">Tarjeta de Débito</button>
                        <button class="Parrafo" v-else @click="setMetodo('debito')">Tarjeta de Débito</button>

                        <button class="Parrafo is-active" v-if="metodoPago == 'efectivo'">Depósito Pago Efectivo</button>
                        <button class="Parrafo" v-else @click="setMetodo('efectivo')">Depósito Pago Efectivo</button>
                    </div>
                </div>
                <Debito v-if="metodoPago == 'debito'"/> 
                <Efectivo v-else />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Resumen from '@/components/Resumen.vue';
import Debito from '@/components/Debito.vue';
import Efectivo from '@/components/Efectivo.vue';

export default {
    name: 'Pasarela',
    data(){
        return{
            metodoPago: "debito"
        }
    },
    components:{
        Resumen,
        Debito,
        Efectivo
    },
    methods:{
        ...mapActions(['setFooterAction','setNavAction']),
        setMetodo(metodo){
            this.metodoPago = metodo;
        }
    },
    created(){
        this.setFooterAction(true);
        this.setNavAction({
            visibility: true,
            solid: true,
            vista:{
                view: "Pasarela de pagos",
                back: "carrito"
            }
        })
    }
}
</script>

<style scoped lang="scss">
    .pasarela{
        background-color: var(--Light);
        min-height: calc(100vh - 80px);
        .l-section{
            margin-top: 40px;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-areas: 'subtotal' 'content';
        }
        &__content{
            grid-area: content;
        }
        &__subtotal{
            grid-area: subtotal;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }
        &__back{
            width: 100%;
            height: 80px;
            display: none;
            justify-content: flex-start;
            align-items: center;
            img{
                width: 17px;
                height: 20px;
                margin-right: 20px;
                cursor: pointer;
                transition: .3s all;
            }
            img:hover{
                transform: scale(1.5);
            }
        }
        &__switch{
            margin-bottom: 30px;
            .Title-4{
                display: none;
                font-weight: bold;
            }
            .ButtonBox{
                margin-top: 20px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                button{
                    width: calc( (100% - 10px) / 2);
                    max-width: 227px;
                    padding: 15px 25px; 
                    font-weight: bold;
                    color: #555555;
                    background-color: #efefef;
                    border: none;
                    border-radius: 5px;
                    transition: .3s all;
                }
                .is-active, button:hover{
                    color: white;
                    background-color: var(--Primary);
                    cursor: pointer;
                }
                button:nth-child(1){
                    margin-right: 10px;
                }
            }
        }
    }
    @media screen and (min-width: 770px){
        .pasarela{
            min-height: calc(100vh - 102px);
        }
    }
    @media screen and (min-width: 990px) {
        .pasarela{
            &__back{
                display: flex;
            }
            &__switch{
                .Title-4{
                    display: block;
                }
            }
            .l-section{
                margin-top: 40px;
                display: grid;
                grid-template-columns: 1fr 433px;
                grid-column-gap: 60px;
                grid-template-areas: 'content subtotal';
            }
        }
    }
</style>
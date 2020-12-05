<template>
  <div class="Formdesmov l-section">
    <h3 class="Title-4">Postula y obtén un 10% de descuento en el programa</h3>
    <form>
        <div>
            <input class="Parrafo" type="text" placeholder="NOMBRE">
        </div>
        <div>
            <input class="Parrafo" type="text" placeholder="CELULAR">
        </div>
        <div>
            <input class="Parrafo" type="text" placeholder="CORREO ELECTRÓNICO">
        </div>
        <div>
            <input class="Parrafo" type="text" placeholder="PROGRAMA">
        </div>
        <div class="Formdesmov-check">
            <input type="checkbox" id="check-politica-mob">
            <label class="Parrafo" for="check-politica-mob">Acepto las políticas de privacidad</label>
        </div>
        <div>
            <button type="submit" class="Title-5">Quiero Postular</button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
    name: 'Formdesmov'
}
</script>

<style scoped lang="scss">
    .Formdesmov{
        .Title-4{
            margin-bottom: 20px;
            color: var(--Dark)
        }
        input{
            padding: 15px 10px;
            border: 1px solid #8B9099;
            border-radius: 5px;
            width: 100%;
        }
        div{
            margin-bottom: 15px;
        }
        input[type="checkbox"]{
            width: 24px;
            height: 24px;
            margin-right: 15px;
        }
        div.Formdesmov-check{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-top: 20px;
            margin-bottom: 30px;
        }
        button{
            width: 100%;
            padding: 15px 10px;
            border: none;
            background: var(--Primary);
            color: var(--Light);
            font-weight: bold;
            border-radius: 5px;
            margin-bottom: 20px;
        }
    }
    @media screen and (min-width: 990px) {
        .Formdesmov{
            display: none;
        } 
    }
</style>
import { importApi } from "./conectarApi.js";
import imgUrl from "./validacionCampo.js";
import precioProduct from "./validarPrecio.js";
const formulario = document.querySelector("[data-form]");
const btnLimpiar = document.querySelector(".btn-limpiar");



const crearCartel = async (e) =>{
    e.preventDefault();
    const nombre = document.getElementById("name").value;
    const precio = document.getElementById("precio").value;
    const img = document.getElementById("url").value;

    const validarPrecio = document.getElementById("precio");
    const validarImg = document.getElementById("url");
    precioProduct(validarPrecio)
    imgUrl(validarImg)

    if (formulario.checkValidity()) {
        try {
            await importApi.enviarDatos(nombre, precio, img);
            location.reload();
        } catch (error) {
            console.error(error);
        }
    }
}





formulario.addEventListener("submit",e => crearCartel(e));

btnLimpiar.addEventListener("click", (e) => {
    e.preventDefault();
    formulario.reset();
})
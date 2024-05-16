import {
    importApi
} from "./conectarApi.js";
const apiConexion = "http://localhost:3000/products/";
let today = new Date()
let year = today.getFullYear();
let año = document.getElementById("año");
año.innerHTML = year



const deleteProducto = async () => {
    const list = document.querySelector("[data-list]");
    list.addEventListener("click", async (e) => {
        if (e.target.classList.contains("eliminar")) {
            const id = e.target.dataset.id;
            try {
                await importApi.eliminarProducto(id);
                e.target.closest(".items").remove();
            } catch (error) {
                console.error(error);
            }
        }
    })
}

deleteProducto();
importApi.conectarLocal(apiConexion);
export {
    apiConexion
}
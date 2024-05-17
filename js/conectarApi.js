import { apiConexion } from "./index.js";
import { carteles } from "./crear-card.js";
const container = document.getElementById("carteles");
// funcion para conectar a los datos locales
const conectarLocal = async () => {
    try {
        const conexion = await fetch(apiConexion);
        if (conexion.status === 200) {
            const convertir = await conexion.json();
            convertir.forEach(element => {
                const addCarteles = carteles(element.name, element.precio,element.img,element.id);
                container.appendChild(addCarteles);
            });   
            return convertir;      
        } else if (conexion.status === 404) {
            console.log("Haz ingresado un valor inexistente");
        } else {
            console.log("No hemos podido encontrar el error");
        }
    } catch (error) {
        console.log(error);
    }
}
// envia data a la api
const enviarDatos = async (name,precio,img,id) =>{
    try {
        const conexion = await fetch(apiConexion,{
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                name:name,
                precio: precio,
                img: img,
                id: id
            })
        })
        const convertir = await conexion.json();
        return convertir;
    } catch (error) {
        console.error("Error en su envio", error);
    }
}


const eliminarProducto = async(id) =>{
    console.log("estoy en datos, id:"+id);
    const conexion = await fetch(`https://fake-api-beryl-nine.vercel.app/products/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });

    if (!conexion.ok) {
        throw new Error("No fue posible eliminar el producto");
    }

    return "Producto eliminado con éxito";

}





export const importApi = {
    conectarLocal,
    enviarDatos,
    eliminarProducto
};
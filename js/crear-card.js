const carteles =  (name, precio,img,id) => {
    const div = document.createElement("div");
    div.classList.add = "items";
    div.innerHTML = `
    <div class="items">
        <div class="img">
            <img class="imagen-cartel" src="${img}" alt="${name}" />
        </div>
        <div class="desk">
    	<h1 class="name">${name}</h1>
    	<h2 class="recom">Q. ${precio}.00</h2>
        </div>
        <input type="image" src="./assets/basura.png" alt="trash" class="eliminar" data-id="${id}">
    </div>
    `
    return div;
}


export{carteles}


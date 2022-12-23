var Juan = {
	nombre:'Juan',
	apellido:'Zamora',
	edad:28
}

var Nieves = {
	nombre:'Nieves',
	apellido:'Meca',
	edad:23
}


function imprimirNombreEnMayúsculas(persona) {
	// var nombre = atributo exterior/ persona = variable interior. Si se escribe como está en console.log debes poner nombre, de la otra manera se debe poner el nombre de variable nueva, ej: nam = nombre.persona. Debes escribir nam 
	var {nombre} = persona
	console.log(nombre.toUpperCase())
}

imprimirNombreEnMayúsculas(Juan) 
imprimirNombreEnMayúsculas(Nieves)

function cumpleanos(persona){
	return{
	...persona,
	edad: persona.edad + 1
	}
}


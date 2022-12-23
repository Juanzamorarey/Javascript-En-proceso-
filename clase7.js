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

var Pepe = {
	nombre:'Pepe',
	apellido:'Gómez',
	edad: 23
}






//function imprimirNombreEnMayúsculas(persona) {
	// var nombre = atributo exterior/ persona = variable interior. Si se escribe como está en console.log debes poner nombre, de la otra manera se debe poner el nombre de variable nueva, ej: nam = nombre.persona. Debes escribir nam 
	//var { nombre } = persona
	//console.log(nombre.toUpperCase())
//}

//imprimirNombreEnMayúsculas(Juan) // 1
//imprimirNombreEnMayúsculas(Nieves) // 2


function imprimirNombreYEdad(persona) {
	var {nombre} = persona
	var {edad} = persona
	console.log('Hola, me llamo ' + nombre + ' y tengo ' + edad + ' años')
}

imprimirNombreYEdad(Juan)
imprimirNombreYEdad(Pepe)
imprimirNombreYEdad(Nieves)



//Hola, me llamo Juan y tengo 26 años
// (si paso objeto Nieves) Hola, me llamo Nieves y tengo 23 años


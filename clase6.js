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
	console.log(persona.nombre.toUpperCase())
}

imprimirNombreEnMayúsculas(Juan) // 1
imprimirNombreEnMayúsculas(Nieves) // 2
imprimirNombreEnMayúsculas({nombre: 'Pepito'}) // 3
imprimirNombreEnMayúsculas({apellido: 'Gómez'}) // 4
// si en la función imprimimos un atributo del objeto no especificado
// en la función dará error, puesto que no se trata de un objeto definido, 
// por eso 1 y 2 son correctos pero 3 y 4 no.
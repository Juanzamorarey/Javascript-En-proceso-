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

//function imprimirNombreYEdad(persona) {
//	var name = persona.nombre
//	var age = persona.edad
//	console.log('Hola, me llamo ' + name + ' y tengo ' + age + ' años ')
//}

//imprimirNombreYEdad(Juan)
//imprimirNombreYEdad(Nieves)

//Esta mierda de funcion de abajo no va y no sé por qué
//function imprimirNombreYApellidoEnMayuscula(person) {
//	var {nombre} = person.toUppercase()
//	var {apellido} = person.toUppercase()
//	console.log(nombre + apellido)}


//Esta si funciona, no sé cómo meter el .toUppercase
function mostrarLetrasEnMayuscula (mayuscula) {
	var nom = mayuscula.nombre
	var ap = mayuscula.apellido 
	console.log(nom.toUppercase() + ap.toUppercase())
}

mostrarLetrasEnMayuscula(Juan)
mostrarLetrasEnMayuscula(Nieves)


//imprimirNombreYApellidoEnMayuscula(Juan)
//imprimirNombreYApellidoEnMayuscula(Nieves)






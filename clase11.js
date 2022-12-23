var Juan = {
	nombre: 'Juan',
	apellido: 'Zamora',
	edad: 26,
	filologo: true,
	cocinero: false,
	cantante: true,
	dj: false,
	guitarrista: true,
	drone: true
}

var Sacha = {
	nombre:'Sacha',
	apellido: 'aleman raro',
	edad: 13
}



function imprimirProfesiones (persona) {
	console.log(`${persona.nombre} es:`)

	if(persona.filologo) {
		console.log('filologo')
} else {
	console.log('no es filologo')
}

	if (persona.cocinero) {
		console.log('cocinero')
}
	if (persona. cantante) {
		console.log('cantante')
	}

	if (persona.dj) {
		console.log('dj')
}
	if (persona.guitarrista){
		console.log('guitarrista')
}
	if (persona.drone){
		console.log('drone')
	}
}

const MAYORIA_DE_EDAD = 18

//imprimirSiEsMayorDeEdad (persona)
	//Juan es mayor de edad
	//Juan es menor de edad
	// > mayor que . // < menor que . // >= mayor igual que . // <= menor igual que
function esMayorDeEdad (persona) {
	return persona.edad >= MAYORIA_DE_EDAD
}


function imprimirSiEsMayoorDeEdad (persona){
	if (esMayorDeEdad(persona)) {
		console.log(`${persona.nombre} es mayor de edad`)
	} else {
		console.log(`${persona.nombre} es menor de edad`)
	}
}






//esta la hice yo solito soy un crema
function imprimirSiEsMayorDeEdad(persona){
	console.log(`${persona.nombre} es: `)

	if (persona.edad >= 18) {
		console.log('mayor de edad')}
		else{ 
			console.log('menor de edad')}
}


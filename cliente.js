// Esto funciona SIEMPRE que hayamos instalado la librería antes
const inquirer = require('inquirer');

//const inquirer = require('inquirer');

// prompt() -> recibe un array de preguntas, cada pregunta será un objeto literal

// then -> recibe una función, esta función toma como parámetro las respuestas a las preguntas del método prompt()

const preguntas = [
	{
		type: 'confirm',
		message: '¿La pizza es para delivery?',
		name: 'esParaDelivery',
		default: false,
	},
	{
		type: 'input',
		message: 'Ingresá tu dirección:',
		name: 'direccionCliente',
		when: (respuestas) => {
            return respuestas.esParaDelivery === true;
            
		},
		validate: (estaRespuesta) => {
            let longitud = estaRespuesta.length;
            
			if (longitud <= 5) {
                return 'Debes completar la dirección';
                
			}
            return true;
            
		},
	},
	{
		type: 'input',
		message: 'Ingresá tu nombre:',
		name: 'nombreCliente',
		validate: (estaRespuesta) => {
            let longitud = estaRespuesta.length;
            
			if (longitud < 1) {
                return 'Debes completar el nombre';
                
			}
            return true;
            
		},
	},
	{
		type: 'input',
		message: 'Ingresá tu número de teléfono:',
		name: 'telefonoCliente',
		validate: (estaRespuesta) => {
			if (estaRespuesta.length < 1) {
                return 'Debes completar el número de teléfono';
                
			} else if (isNaN(estaRespuesta)) {
                return 'Ingresá solo números';
                
			}
            return true;
            
		},
	},
	{
		type: 'rawlist',
		message: 'Elegí el gusto de la pizza:',
		name: 'gustoPizza',
		choices: ['Muzza', 'Napo', 'Jamón', '4 quesos'],
	},
	{
		type: 'list',
		message: 'Elegí el tamaño de la pizza',
		name: 'tamanioPizza',
		choices: ['Personal', 'Mediana', 'Grande'],
	},
	{
		type: 'confirm',
		message: '¿Querés agregar bebida?',
		name: 'conBebida',
		default: false,
	},
	{
		type: 'list',
		message: 'Elegí el gusto de la bebida',
		name: 'gustoBebida',
		choices: ['Coca-cola', 'Pepsi', 'Manaos'],
		when: (respuestas) => {
            return respuestas.conBebida === true;
            
		}
	},
	{
		type: 'confirm',
		message: '¿Sos cliente habitual?',
		name: 'clienteHabitual',
		default: false,
	},
	{
		type: 'checkbox',
		message: 'Elegí el gusto de las empanadas',
		name: 'empanadas',
		choices: ['Carne', 'Pollo', 'Margarita', 'Calabresa'],
		when: (respuestas) => {
            return respuestas.clienteHabitual === true;
            
		}
	},
];

inquirer
	.prompt(preguntas)
	.then(function (respuestas) {
        console.log('=== Resumen de tu pedido ===');
        
        console.log('Tus datos son - Nombre: ' + respuestas.nombreCliente + ' / Teléfono: ' + respuestas.telefonoCliente);
        
    });
    
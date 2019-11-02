const fs = require('fs');

const rutaDelArchivo = `${__dirname}/pedidos.json`;
let pedidos = fs.readFileSync(rutaDelArchivo, 'utf8');

if (pedidos.length > 0) {
	pedidos = JSON.parse(pedidos);
	
	console.log(`Total de pedidos: ${pedidos.length}`);

	// let gustoMuzza = pedidos.filter(pedido => pedido.gustoPizza == 'Muzzarella');
	let gustoMuzza = pedidos.filter(function (pedido)  { 
		return pedido.gustoPizza == 'Muzzarella';
	});

	console.log(`Total de Muzzarella: ${gustoMuzza.length}`);
	
} else {
	console.log('"Actualmente el sistema no tiene pedidos para generar el reporte".');
}

function cotizarPrestamo(monto, plazo, tasaInteres) {
  // Calcular el monto total a pagar
  var montoTotal = monto + (monto * tasaInteres * plazo);

  // Calcular la cuota mensual
  var cuotaMensual = montoTotal / plazo;

  // Retornar un objeto con los resultados
  return {
    montoTotal: montoTotal,
    cuotaMensual: cuotaMensual
  };
}

// Ejemplo de uso
var montoPrestamo = 10000; // Monto del préstamo
var plazoPrestamo = 12; // Plazo en meses
var tasaInteresAnual = 0.10; // Tasa de interés anual (10%)

// Llamar a la función de cotización de préstamo
var resultadoCotizacion = cotizarPrestamo(montoPrestamo, plazoPrestamo, tasaInteresAnual);

//Mostrar los resultados
console.log("Monto total a pagar: $" + resultadoCotizacion.montoTotal.toFixed(2));
console.log("Cuota mensual: $" + resultadoCotizacion.cuotaMensual.toFixed(2));

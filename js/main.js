class Prestamo {
  constructor(monto, cuotas, porcentaje) {
    this.monto = monto;
    this.cuotas = cuotas;
    this.porcentaje = porcentaje;
  }

  calcularInteres() {
    return (this.monto * this.porcentaje) / 100;
  }

  calcularTotal() {
    const interes = this.calcularInteres();
    return this.monto + interes;
  }

  calcularCuotaMensual() {
    const total = this.calcularTotal();
    return total / this.cuotas;
  }
}

function cotizarPrestamos() {
  const monto = parseFloat(prompt("Ingrese el monto del préstamo:"));
  const cuotas = parseInt(prompt("Ingrese la cantidad de cuotas:"));
  const porcentaje = parseFloat(prompt("Ingrese el porcentaje de interés:"));

  const prestamos = [];
  const tasasInteres = [10, 15, 20];
  for (const tasa of tasasInteres) {
    const prestamo = new Prestamo(monto, cuotas, tasa);
    prestamos.push(prestamo);
  }

  prestamos.sort((a, b) => a.calcularInteres() - b.calcularInteres());

  console.log("Opciones de préstamo sugeridas:");
  for (const prestamo of prestamos) {
    console.log(`Tasa de interés: ${prestamo.porcentaje}%`);
    console.log(`Cuota mensual: $${prestamo.calcularCuotaMensual().toFixed(2)}`);
   
  }
}

cotizarPrestamos();


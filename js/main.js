
// Datos de préstamo
let loanData = {
  loanAmount: 0,
  interestRate: 0,
  loanTerm: 0
};

// Función para calcular el préstamo
function calculateLoan() {
  loanData.loanAmount = parseFloat($('#loan-amount').val());
  loanData.interestRate = parseFloat($('#interest-rate').val());
  loanData.loanTerm = parseInt($('#loan-term').val());

  fetch('data.json')
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          let monthlyInterestRate = loanData.interestRate / (12 * 100);
          let monthlyPayment = (loanData.loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanData.loanTerm));

          let totalPayment = monthlyPayment * loanData.loanTerm;
          let totalInterest = totalPayment - loanData.loanAmount;

          let result = $('#result');
          result.html('Pago mensual: $' + monthlyPayment.toFixed(2) +
              '<br>Total del préstamo: $' + totalPayment.toFixed(2) +
              '<br>Intereses totales: $' + totalInterest.toFixed(2));

          data.monthlyPayment = monthlyPayment.toFixed(2);
          data.totalPayment = totalPayment.toFixed(2);
          data.totalInterest = totalInterest.toFixed(2);

          saveDataToLocalJSON(data);
      })
      .catch(function(error) {
          console.log('Error:', error);
      });
}



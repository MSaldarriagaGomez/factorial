document.getElementById('factorialForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const number = parseInt(document.getElementById('number').value);
    const result = factorial(number);
    document.getElementById('result').textContent = `El factorial de ${number} es ${result}.`;
  });
  
  function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  
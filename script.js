function calculateSavings() {
  const age = parseInt(document.getElementById('age').value);
  const stopAge = parseInt(document.getElementById('stopAge').value);
  let startingSalary = parseFloat(document.getElementById('salary').value);
  const savingsPercentage = parseFloat(document.getElementById('savingsPercentage').value);
  const raisePercentage = parseFloat(document.getElementById('raisePercentage').value);

  let accumulatedAmount = 0;

  for (let i = age; i < stopAge; i++) {
    accumulatedAmount += startingSalary * (savingsPercentage / 100);
    startingSalary *= 1 + raisePercentage / 100;
  }

  document.getElementById('result').innerHTML = `Accumulated Savings: $${accumulatedAmount.toFixed(2)}`;
}

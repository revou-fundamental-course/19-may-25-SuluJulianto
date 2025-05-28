document.addEventListener("DOMContentLoaded", function () {
  const convertBtn = document.getElementById("convertBtn");
  const temperatureInput = document.getElementById("temperature");
  const conversionSelect = document.getElementById("conversion");
  const resultDiv = document.getElementById("result");
  const formulaDiv = document.getElementById("formula");

  convertBtn.addEventListener("click", function () {
    const temp = parseFloat(temperatureInput.value);
    const conversion = conversionSelect.value;

    if (isNaN(temp)) {
      resultDiv.textContent = "Masukkan angka suhu yang valid!";
      formulaDiv.textContent = "";
      return;
    }

    let result, formula;

    if (conversion === "cToF") {
      result = (temp * 9/5) + 32;
      resultDiv.textContent = `${temp}°C = ${result.toFixed(2)}°F`;
      formula = `Rumus: (${temp} × 9/5) + 32 = ${result.toFixed(2)}°F`;
    } else if (conversion === "fToC") {
      result = (temp - 32) * 5/9;
      resultDiv.textContent = `${temp}°F = ${result.toFixed(2)}°C`;
      formula = `Rumus: (${temp} − 32) × 5/9 = ${result.toFixed(2)}°C`;
    }

    formulaDiv.textContent = formula;
  });
});

const temperatureInput = document.getElementById('temperature');
        const conversionTypeSelect = document.getElementById('conversionType');
        const convertButton = document.getElementById('convertButton');
        const resultOutput = document.getElementById('result');

        convertButton.addEventListener('click', convertTemperature);

        function convertTemperature() {
            const temperature = parseFloat(temperatureInput.value);
            const conversionType = conversionTypeSelect.value;

            let result;
            if(temperatureInput.value==""){
                alert("Enter any input to convert")
            }
            else if (conversionType === 'celsiusToFahrenheit') {
                result = (temperature * 9 / 5) + 32;
                console.log(result)
                resultOutput.innerText = `${(result).toFixed(2)}°F`;
            } else if (conversionType === 'fahrenheitToCelsius') {
                result = (temperature - 32) * 5 / 9;
                resultOutput.textContent = `${(result).toFixed(2)}°C`;
            } else {
                resultOutput.textContent = 'Invalid conversion type';
            }
        }

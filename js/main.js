/** 
 * Skapa ett textfält och en knapp "Fetch data".
 * I textfältet skall man kunna ange ett nummer, 
 * som är antalet ord som skall hämtas från http://codexplained.se/lorem_text_random.php?numberOfWords= Värdet från textfältet
 * 
 * Undersök vad som visas i webbläsaren, med följande URLer:
 * http://codexplained.se/lorem_text_random.php?numberOfWords=3
 * http://codexplained.se/lorem_text_random.php?numberOfWords=10
 *
 * För varje anrop, skall datan hämtas och visas i en ny listitem <li>
 */
let fetchDiv = document.getElementById('fetchDiv');
let textInput = document.createElement('input');

let btn = document.createElement('button');
btn.innerHTML = 'Fetch data';

let list = document.createElement('ul');
let errorDiv = document.createElement('div');

let fetchText;btn
fetchDiv.append(textInput, btn, list);

btn.addEventListener('click', function (e) {
    e.preventDefault();
    let li = document.createElement('li');
    fetchText = document.createElement('div');
    let numberOfWords = textInput.value;

    if (isNaN(numberOfWords) || textInput.value.trim() === '') {

        errorDiv.innerHTML = 'Please enter a number';
        fetchDiv.append(errorDiv);
        errorDiv.style.color = 'red';

    } else {
        errorDiv.remove();
        fetchData('http://codexplained.se/lorem_text_random.php?numberOfWords=' + numberOfWords);
        li.append(fetchText);
        list.append(li);
    }



})



function fetchData(text) {
    fetch(text)
        .then(response => {

            return response.text();

        })
        .then(data => {

            fetchText.innerHTML = data;
            fetchText.style.padding = '5px';
            fetchText.style.margin = '5px';

        })
        .catch((error) => {
            errorMessage = 'Error 404: File not found...';

            errorDiv.style.color = 'red';
            errorDiv.style.fontSize = '20px';
            errorDiv.style.margin = '5px';
            errorDiv.innerHTML = errorMessage;

        })
}


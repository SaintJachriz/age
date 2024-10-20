

function Age() {
    const age = document.getElementById('age');
let currentYear = 2024;

const calcYear = currentYear - age.value;
alert(`Your were birth year is ${calcYear}`)
}

age.value = ' ';
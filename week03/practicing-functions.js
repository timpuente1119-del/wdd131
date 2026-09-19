let firstName = 'Antonia';
let lastName = 'Francesca';

function fullName(first, last){
    return first + " "+ last;
};

const fullName = function fullName(first, last){
    return first + " " + last;
};

const fullName = (first, last) => '${first} ${last}';

document.querySelector('#fullName').textContent = fullName(firstName, lastName);
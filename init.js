
document.querySelector("#gen").onclick = function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('fatherNameOutput').innerText = initPerson.fatherName;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    const dateBorn = personGenerator.dateBorn();
    document.getElementById('birthDayOutput').innerText = dateBorn;    
};

document.querySelector("#clear").onclick = function () {
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('fatherNameOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
    document.getElementById('birthDayOutput').innerText = '';
};

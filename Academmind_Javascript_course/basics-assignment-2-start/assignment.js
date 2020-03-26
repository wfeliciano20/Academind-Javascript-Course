const task3Element = document.getElementById('task-3');

function noParameter() {
    alert("No Parameters");
}

function oneParameter(name) {
    alert(name);
}

noParameter();
oneParameter("max");

task3Element.addEventListener('click', noParameter);

function thePowerOFThree(one, two, three) {
    return one + two + three;
}

alert(thePowerOFThree('hello', 'world', '!'));
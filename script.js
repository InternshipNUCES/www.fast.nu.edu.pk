const name11 = document.getElementById("name");
const age = document.getElementById("age");
const father = document.getElementById("father");
const address = document.getElementById("address");
const roll = document.getElementById("roll");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cnic = document.getElementById("cnic");
const matric = document.getElementById("matric");
const fsc = document.getElementById("fsc");

const sub = document.getElementById("sub");

class Data {
    constructor(name1, age1, father1, address1, roll1, email1, password1, cnic1, matric1, fsc1) {
        this.name1 = name1;
        this.age1 = age1;
        this.father1 = father1;
        this.address1 = address1;
        this.roll1 = roll1;
        this.email1 = email1;
        this.password1 = password1;
        this.cnic1 = cnic1;
        this.matric1 = matric1;
        this.fsc1 = fsc1;
    }
}
sub.onclick = function () {
    const data1 = new Data(name11.value, age.value, father.value, address.value,
        roll.value, email.value, password.value, cnic.value, matric.value, fsc.value);

    const data = JSON.stringify(data1);
    localStorage.setItem(name11.value, data);
    sub.textContent = "Submitted";
}


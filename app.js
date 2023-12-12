// NIZOVI

// const niz = [1,2,3,4,5,6,7]

// push - dodaje element na kraj niza
// const rezultat = niz.push(8) // vraca duzinu niza
// console.log("niz:", niz)
// console.log("duzina niza:", rezultat)

// pop - uklanja posljednji element niza
// const rezultat = niz.pop()
// console.log("rezultat:", rezultat); // uklonjeni element
// console.log("niz", niz);

//unshift operacija - dodaje na prvo mjesto
// const rezultat = niz.unshift(1) // nova duzina niza
// console.log("rezultat:", rezultat);
// console.log("niz:", niz);

// shift - uklanja prvi element niza
// const rezultat = niz.shift() // uklonjeni element
// console.log("niz:", niz);
// console.log("rezultat:", rezultat);


// const ucenici = ["Petar", "Marko", "Vanja", "Jelena"]
// napraviti fuknciju koja dodaje novog djaka u niz na posljednje mjesto = jedan parametar *ime djaka)

// const dodajUcenika = (ime) => {
// ucenici.push(ime)
// }
// // poziv fukcnije
// dodajUcenika("Milan")

// console.log("Ucenici:", ucenici);

// indexOf - vraca prvi element na koji naidje, ostalo ne gleda
// const ucenici = ["Petar", "Marko", "Vanja", "Jelena", "Petar"]
// console.log(ucenici.indexOf("Petar"))

// napravite funkciju da vrati da li ima studenta u nizu
// const imaLiUcenika = (ime) => {
//     if (ucenici.indexOf(ime) > -1) {
//         return "DA"
//     } else {
//         return "NE"
//     }
// }

// console.log(imaLiUcenika("Milena"));


//slice - odsjecanje

// const niz = ["Petar", "Marko", "Vanja", "Jelena", "Mile"]

// const niz2 = niz.slice(0,2) // ne mijenja originalni niz, samo vraca novi

// console.log("niz2:", niz2);
// console.log("niz", niz)



// const brojevi = [0, 1, 2, 3, 4, 5, 6]
// const vratiDioNiza = (niz, brojDoKojegSjecem) => {

//     if (Array.isArray(niz)) { // Array.isArray - provjerava da li je nesto niz
//         return niz.slice(0, brojDoKojegSjecem)
//     } else {
//         return "Prvi parametar nije niz"
//     }
// }

// const sjeceniDio = vratiDioNiza(brojevi, 3)
// console.log("sjeceni dio:", sjeceniDio);


// const brojevi = [0, 1, 2, 3, 4, 5, 6]

// const kvadriraniBrojevi = []
// for (let i = 0; i < brojevi.length; i++) {
//     kvadriraniBrojevi.push(brojevi[i] * brojevi[i])
// }

// console.log("kvadriranibrojevi:", kvadriraniBrojevi);


// map - isto k'o ovo iznad, samo lakse
// const brojevi = [0, 1, 2, 3, 4, 5, 6]
// const kvadriraniBrojevi = brojevi.map((el) => {
//     return el * el
// })

// console.log("kvadriran brojevi:", kvadriraniBrojevi);


// includes - provjerava da li niz sadrzi neki element

// const brojevi = [0, 1, 2, 3, 4, 5, 6]
// console.log(brojevi.includes(2));


// filter - izdvaja(filtrira) elemente koji ispunjavaju odredjeni uslov, i od njih pravi novi niz
//prolazi kroz cijeli niz 
// const brojevi = [5, 20, 31, 9, 6, 40, 0]

// const filtriraniNiz = brojevi.filter((el) => {
//     return el > 10
// })

// console.log("filtriraniNiz:", filtriraniNiz);


// Object (instanca)

// const auto = {
//     marka: "Volvo",
//     brojVrata: 4,
//     // kubikaza: 2200,
//     tip: "limuzina",
//     sviraj: function () {
//         console.log("beep beep");
//     },
//     kreni: function () {
//         console.log("Automobil krece...");
//     }
// }

// // printanje objekta u konzoli
// console.log(auto);

// // pristupanje pojedinacnom atributu (naziv objekta.atribut)
// console.log("Kubikaza auta je ", auto.kubikaza);
// console.log("Nas auto ima vrata ", auto.brojVrata);

// const provjeraKlase = (automobil) => {
//     if(!automobil.kubikaza) return "automobil nema kubikazu" 
//     // ! - znak negacije
//     if (automobil.kubikaza > 2200) return "luksuzna klasa"
//     return "standardna klasa"
// }

// console.log("Provjera kubikaze: ", provjeraKlase(auto));


// class - sablon za kreiranje objekta
// class Animal {
//     constructor(breed, hair, numOfLegs) {
//         this.breed = breed
//         this.hair = hair
//         this.numOfLegs = numOfLegs
//     }

//     makeSound(sound) {
//         console.log(this.breed, "makes ", sound, " sound!")
//     }
// }

// const dog = new Animal("husky", true, 4) // new poziva konstruktor
// console.log("nas cuko:", dog)
// const cat = new Animal("persian", true, 4)
// console.log("nasa maca:", cat)
// const elephant = new Animal("africki:", true, 4)
// console.log("nas slon:", elephant)

// dog.makeSound("bark")


// const user1 = {
//     name: "Petar",
//     age: 25
// }

// const user2 = {
//     name: "Petar",
//     age: 25
// }

// const user3 = user2

// console.log("Da li su isti objekti :", user3 == user2); 

// user2.name = "Marko"

// console.log(user2);
// console.log(user3);


// const auto = {
//     tip: "mercedes",
//     osiguranje: {
//         datumIsteka: "1.1.2024",
//         polisa: "premium",
//         iznos: 10000
//     },
//     godiste: 2012,
//     prethodniVlasnici: ["Petar", "Milan", "Marko"]
// }

// console.log("Poslednji vlasnik: ", auto.prethodniVlasnici[auto.prethodniVlasnici.length - 1]);
// // ispisuje posljednjeg vlasnika iz niza


// //izmjena polise na standard
// //ne printati citav objekat, nego samo atribut koji je potreban
// console.log("Stari", auto.osiguranje.polisa);

// auto.osiguranje.polisa = "standard"

// console.log("Novi", auto.osiguranje.polisa);


// SINHRONO I ASINHRONO PROGRAMIRANJE 11.17.2023 - setTimeout funkcija
// rjesenja za asinhrone funkcije:
// 1. PROMISE
// 2. async/await 

// console.log("Prvi log");

// setTimeout(() => {
//     console.log("Drugi log")
// }, 2000); // odlaze izvrsavanje funkcije za 2000ms

// console.log("Treci log");


// const prvaF = function (){
//     console.log("prva")
// }

// const drugaF = function (callbackFa){
//     setTimeout(()=>{
//         console.log("druga");
//         callbackFa() // dodjeljuje jednu funkciju kao parametar drugoj
//     },2000) 
// }

// const trecaF = function (){
//     console.log("treca");
// }

// prvaF()
// drugaF(trecaF)

// let promise1 = new Promise((resolve, reject) => {
//     let bodovi = 50
//     if (bodovi > 50) {
//         resolve("Student polozio!")
//     } else {
//         reject("Student nije polozio")
//     }
// })

// promise1
// .then(res => console.log(res)) // izvrsava se ako je sve ok, RESOLVE
// .catch(err => console.log(err)) // izvrsava se ako nesto nije ok, REJECT



// fetch('https://jsonplaceholder.typicode.com/users') // fetch sa servera
// .then(data => data.json()) // ako dobijem podatke, pretvori ih u js-objekte
// .then(newData  => console.log(newData)) // prikazi u konzoli korisnike
// .catch(err=>console.log(err)) // prikazi u konzoli gresku


// ASINHRONO PROGRAMIRANJE 24.11.2024 - fetch funkcija - truditi se da fetch bude do 1mb
// 5 METODA ZA REQUESTOVE
// GET - dobijanje podataka od servera
// POST - slanje podataka serveru (da ih server sacuva)
// DELETE - brisanje podataka na serveru
// PUT - update podataka, mijenja kompletan podatak
// PATCH - update podataka, mijenja samo dijelove podatka

// https://jsonplaceholder.typicode.com/albums

// kada u fetchu ne naznacimo metodu, podrazmijevana metoda je GET 

//promise funkcija
// const albumsFetch = () => {
//     fetch('https://jsonplaceholder.typicode.com/albums')
//         .then(serverResponse => serverResponse.json())
//         .then(jsonData => console.log(jsonData))
//         .catch(err => console.log(err.message))
// }

// albumsFetch()

// asyn-await funkcija
// dugme u index.html
// const asyncFetch = async () => {
//     const serverResponse = await fetch('https://jsonplaceholder.typicode.com/albums')
//     const jsonData = await serverResponse.json()
//     console.log(jsonData.slice(0,10));

// }

// VJEZBE 01/12/2023

const fetchStudents = async () => {
    const response = await fetch("http://localhost:4000/students")
    const data = await response.json()

    let tableB = document.getElementById("tableBody") // selektuje table body 


    console.log(data);

    data.forEach((student) => {
        console.log(student)
        let row = `
        <tr>
        <td>${student.name}</td>
        <td>${student.lastName}</td>
        <td>${student.age}</td>
        <td>${student.city}</td>
        </tr>
        `
        tableB.innerHTML += row
    })
}

fetchStudents()

// preuzimanje podataka iz input polja
const postStudents = async () => {

    const data = {
        id: Math.random(),
        name: document.getElementById("nameInput").value,
        lastName: document.getElementById("lastNameInput").value,
        age: document.getElementById("ageInput").value,
        city: document.getElementById("cityInput").value,
    }

    // kod za slanje podataka na server

    try {
        const response = await fetch("http://localhost:4000/students", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const responseJson = await response.json()
        console.log("responseJson", responseJson);
    } catch (err) {
        console.log(err);
    }
}
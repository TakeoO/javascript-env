(function () {
    if (checkSection('dashboard')) {
        let user = "Janez";
        let number = 1;
        let bool = false;  //In python this is False || True
        let empty = null; //None in python
        let decimal = 0.22;


        window.user = user;

        console.log(user, number, bool, empty, decimal);

        if (decimal < 0.5) { // In python this should be just ":" without braces
            console.log("Decimal is smaller then 0.5");
        } else {
            console.log("Decimal is greater then 0.5");
        }


        let userObject = {
            'name': 'Jan',
            'last_name': 'Mrhar',
            'age': 18,
            'gender': 'M',
            'contact': {
                'phone': '0038670421900',
                'email': 'jan.jn3....'
            }
        }

        let userObject1 = {
            'name': 'Jan',
            'last_name': 'Mrhar 1',
            'age': 18,
            'gender': 'M',
            'contact': {
                'phone': '0038670421900',
                'email': 'jan.jn3....'
            }
        }
//object key access:
// dot notation
        console.log(userObject.name)

//direct key access
        console.log(userObject['name'])


        let users = [userObject, userObject1];

        for (let user of users) {
            console.log(user);
        }

        for (let index = 0; index < users.length; index++) {
            console.log(users[index]);
        }
// let counter = 1;
// while (counter <= 100) {
//     console.log(counter++);
//
// }

        let text = "Text 1 ";
        let text1 = "Text 2"
        let concatenatedString = text + text1;

        let newString = `${text} nek text, ki je združen z drugim textom ${text1}`; //string literal

        console.log(concatenatedString);
        console.log(newString);


        function concatenateString(string1, string2) {
            return `${string1} ${string2}`
        }

        console.log(concatenateString(text, text1));
// console.log(test);

        let newUser = new User("Jan", "Novak", 12, 'M')

// console.log(newUser.getFullName())
//
//
// window.localStorage.setItem("user", JSON.stringify(newUser));
//
//
// let userFromStorage = window.localStorage.getItem("user")
//
// console.log(JSON.parse(userFromStorage))

        console.log("30" + 5);
        console.log("30" - 5);
        console.log("T" - 5);

        console.log(1 == true);
        console.log(1 === true);

        console.log([] == []);
        console.log([[[0]]] == 0);


        console.log(0.999999999999999999 - 0.1)


        let loginForm = document.getElementById("login-form");
        let loginButton = document.getElementById("submit-login");

// loginButton.addEventListener('click', (event) => {
//     let nameInput = document.getElementById("name");
//     let name = nameInput.nodeValue;
//
//     if (name.length < 3) {
//         nameInput.classList.add("error");
//     } else {
//         loginForm.submit();
//     }
// });


        const price = document.querySelector('#price');
        const output = document.querySelector('.price-output');

        output.textContent = price.value;

        price.addEventListener('input', () => {
            output.textContent = price.value;
        });


// let button = document.getElementById('check-button');
//
// button.addEventListener('click', function (event) {
//     let inputNumber = parseInt(document.getElementById('input-number').value, 10);
//
//     if (Number.isInteger(inputNumber) == false) {
//         console.log('Something went wrong')
//         changeTheInputValue(`Something went wrong!`,`Insert a number`);
//     } else {
//         if (inputNumber % 3 == 0 && inputNumber % 5 == 0) {
//             console.log("FizzBuzz");
//             changeTheInputValue("FizzBuzz", inputNumber)
//         } else if (inputNumber % 3 == 0) {
//             console.log("Fizz");
//             changeTheInputValue("Fizz", inputNumber)
//         } else if (inputNumber % 5 == 0) {
//             console.log("Buzz");
//             changeTheInputValue("Buzz", inputNumber)
//         } else {
//             console.log(inputNumber);
//             changeTheInputValue(inputNumber, inputNumber)
//         }
//     }
// });

        function changeTheInputValue(text, inputNuber) {
            let inputNumber = document.getElementById("input-number");
            document.getElementById("message").innerHTML = text;
            inputNumber.placeholder = inputNuber;
            inputNumber.value = null;
        }
    }


})()
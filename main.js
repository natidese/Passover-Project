class Users {

    constructor() {
        this.index = 0;
        this.name = {
            first: '',
            last: ''
        },
            this.email = '';
        this.age = 0;
        this.phone = 0;
        this.picture = '';

    }
}

const UsersApi = 'https://next.json-generator.com/api/json/get/NJ-UoW2Xq'
async function getUsersObjectFromApi() {

    let result = await fetch(`${UsersApi}`, {});
    let json = await result.json();

    let usersList = [];

    for (let jsonUser of json) {
        let user = new Users();
        user.age = jsonUser.age;
        user.phone = jsonUser.phone;
        user.email = jsonUser.email;
        user.name = jsonUser.name;
        user.index = jsonUser.index;
        user.picture = jsonUser.picture;

        usersList.push(user);
    }

    return usersList;
}



async function printUsersInformation() {
    document.getElementById('mainDiv').innerHTML = '';
    document.getElementById('unMainDiv').innerHTML = '';
    try {
        let users = await getUsersObjectFromApi();

        let renderHTML = '';
        let template = document.getElementById('user-details-template').innerHTML;
        users.forEach((user) => {
            renderHTML += Mustache.to_html(
                template, user);
        });

        document.getElementById('mainDiv').innerHTML += renderHTML;
    }
    finally {
    }
}
printUsersInformation();


async function printTableOfUserInfro() {
    document.getElementById('mainDiv').innerHTML = '';
    document.getElementById('unMainDiv').innerHTML = '';
    document.getElementById('mainDiv').innerHTML += `
    <table id="tabelId">
        <tr>
            <th>User name</th>
            <th>Email</th>
            <th>Age</th>
            <th>User Number</th>
            <th>Picture</th>
        </tr>
            </table>`
    try {
        let users = await getUsersObjectFromApi();
        users.forEach((user) => {
            document.getElementById('tabelId').innerHTML += `
                    <td id="td1">${user.name.first} ${user.name.last}</td>
                    <td id="td2">${user.email}</td>
                    <td id="td3">${user.age}</td>
                    <td id="td4">${user.phone}</td>
                    <td id="td5"><img src=${user.picture} height="50px" width="50px"</td>`
        });
    }
    finally {

    }
}


async function fillFormForUser() {
    document.getElementById('mainDiv').innerHTML = '';
    document.getElementById('unMainDiv').innerHTML = '';
    try {
        document.getElementById('mainDiv').innerHTML += `
            <div id="formDiv">
            <form id="forms" onsubmit="return checkSubmit()">
                <label>First Name:</label>
                <input id="inputFirstName" type="text" placeholder = 'Enter First name' required>
                
                <label>Last Name:</label>
                <input id="inputLastName" type="text" placeholder = "Enter Last name" required>
                
                <label>Email:</label>
                <input id="inputEmail1" type="email" placeholder = "****@gmail.com" required>
                
                <label>verify your Email:</label>
                <input id="inputEmail2" type="email" placeholder = "****@gmail.com" required>
                
                <label>Age:</label>
                <input id="inputAge" type="number" placeholder = "0-100" required>
                
                <label>Number:</label>
                <input id="inputPhone" type="text" placeholder = '05*-*******' required>
                
                <label>photo:</label>
                <input id="inputImg" type="image" required>

                <button type="submit">SAVE</button>
            </form>
        </div>`
    }
    finally {

    }
}
function checkTheEmail() {
    if (inputEmail1.value == inputEmail2.value) {
        alert('The Email Are equal');
    }
    else {
        alert('The Email Are Not equal');
    }
}
function checkSubmit() {
    return checkTheEmail();
}


function showUserCardInfotmation(cardIndex) {

    document.getElementById('mainDiv').innerHTML = '';

    const template = document.getElementById('user-card-template').innerHTML;
    try {
        getUsersObjectFromApi().then(Users => {


            let foundUser = null;
            for (let user of Users) {
                if (user.index == cardIndex) {
                    foundUser = user;
                }
            }
            if (foundUser != null) {
                let renderHTML = Mustache.to_html(
                    template, foundUser);

                    unMainDiv.innerHTML = renderHTML;
            }
        });
    }
    finally {

    }
}



function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
}

mainDiv.style.transition = "all 2s"

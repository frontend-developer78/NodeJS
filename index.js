import readline from "readline/promises";
import { stdin as input, stdout as output} from "process";

const rl = readline.createInterface({input, output});

const contactList = [];

const firstName = await rl.question("firstName is: ");
const lastName = await rl.question("lastName is: ");

const newContact = {
    id: contactList.length,
    firstName,
    lastName
};

contactList.push(newContact);

const formatedContactList = contactList.map(({id, farstName, lastName}));


console.log("contacts list: ");
console.log(formatedContactList);

rl.close();
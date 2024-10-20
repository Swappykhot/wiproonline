create a new app here with the command in any folder

npx create-react-app crudoperations

Then do the intial setup of the application means removing all files etc 

so after doing intial set up   paste this code in index.html file 

create one layout folder and in that add Header.jsx file and Footer.jsx file 

index.html
***********
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
        integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <title>React App</title>
  </head>
  <body style="background-color: black;">
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    
  </body>
</html>
Now create one folder which is Components and in that Components create subfolders one is Layout and another ContactPages and define Header in 
    Layout like this below and footer also in layout 
Header.jsx 
************
import logo from "../../images/logo512.png";

function Header() {
  return (
    <div className="py-2 pl-2" style={{ borderBottom: "1px solid #777" }}>
      <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />
          <span className="h2 pt-4 m-2 text-white-50">
             Crud Operations 
          </span>
    </div>
  );
}

export default Header;

Footer.jsx 
 ----
const Footer = ()=> {
return (
<div
style={{
color: "gray",
marginTop: "10px",
borderTop: "1px solid #555",
textAlign: "center",
}}
>
</div>
);
};
export default Footer;
Index.jsx 
 ********

import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './Components/Layout/Header'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
  </div>
);



Now add some page in ContactPages folder 

    AddContact.jsx 
    AddRandomContact.jsx 
    Contact.jsx 
    ContactIndex.jsx 
    GeneralContacts.jsx 
    FavoriteContacts.jsx 
    RemoveAllContacts.jsx 

RemoveAllContacts
**********************************
const RemoveAllContacts = () => {
return (
<div>
<button className="btn btn-danger form-control">Remove All</button>
</div>
);
};
export default RemoveAllContact;
GeneralContacts
****************************************
const GeneralContacts = () => {
return (
<div>
<button className="btn btn-secondary form-control">
General Contact
</button>
</div>
);
};
export default GeneralContacts;
FavoriteContacts
*****************
const FavoriteContacts = () => {
return (
<div>
<button className="btn btn-secondary form-control">
Favorite Contacts
</button>
</div>
);
};
export default FavoriteContacts;
Contact
**********************
const Contact = () => {
return (
<div>
<button className="btn btn-secondary form-control">Contact</button>
</div>
);
};
export default Contact;
AddRandomContact
******************
const AddRandomContact = () => {
return (
<div>
<button className="btn btn-danger form-control">
Add Random Contact
</button>
</div>
);
};
export default AddRandomContact;
AddContact
***********************
const AddContact = () => {
return (
<div>
<button className="btn btn-secondary form-control">Add Contact</button>
</div>
);
};
export default AddContact;


Now i am adding ContactIndex.js file where it will store header and footer also and all the files which i have defined will also be projected here 

    import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import RemoveAllContact from "./RemoveAllContact";
class ContactIndex extends React.Component {
render() {
return (
<div>
<Header />
<div className="container" style={{ minHeight: "85vh" }}>
<div className="row py-3">
<div className="col-4 offset-2">
<AddRandomContact />
</div>
<div className="col-4">
<RemoveAllContact />
</div>
<div className="row py-2">
<AddContact />
</div>
<div className="row py-2">
<FavoriteContacts />
</div>
<div className="row py-2">
<GeneralContacts />
</div>
</div>
</div>
<Footer />
</div>

);
}
}
export default ContactIndex;
    
Now add contact code is like this 

  AdddConatct.jsx
    *************
    const AddContact = () => {
return (
<div className="border row text-white p-2">

<div className="col-12 text-white-50">Add a new Contact</div>
<div className="col-12 col-md-4 p-1">
<input
className="form-control form-control-sm"
placeholder="Name..."
></input>
</div>
<div className="col-12 col-md-4 p-1">
<input
className="form-control form-control-sm"
placeholder="Email..."
></input>
</div>
<div className="col-12 col-md-4 p-1">
<input
className="form-control form-control-sm"
placeholder="Phone..."
></input>
</div>
<div className="col-12 col-md-6 offset-md-3 p-1">
<button className="btn btn-primary btn-sm form-control">
Create</button>
</div>
</div>
);
};
export default AddContact;
    
and place this compoennt in contact index 
    -------------------------------------
    
    import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import RemoveAllContacts from "./RemoveAllContacts";

class ContactIndex extends React.Component {
render() {
return (
<div>
<Header />
<div className="container" style={{ minHeight: "85vh" }}>
<div className="row py-3">
<div className="col-4 offset-2">
<AddRandomContact />
</div>
<div className="col-4">
<RemoveAllContacts />
                </div>
                
<div className="row py-2">
<AddContact />
</div>
<div className="row py-2">
<FavoriteContacts />
</div>
<div className="row py-2">
<GeneralContacts />
</div>
</div>
</div>
<Footer />
</div>

);
}
}
export default ContactIndex;
    

Before creating logic for create we have to maintain state we have to store all contacts using
state now but in a class we have to maintain state so
ConatctIndex.jsx 
****************
  
    import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import RemoveAllContacts from "./RemoveAllContacts";

class ContactIndex extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            
         contactList: [
                {
                id: 1,
                name: "Ben Parker",
                phone: "666-666-7770",
                email: "ben@dotnetmastery.com",
                isFavorite: false,
                },
                {
                id: 2,
                name: "Kathy Patrick",
                phone: "111-222-0000",
                email: "kathy@dotnetmastery.com",
                isFavorite: true,
                },
                {
                id: 3,
                name: "Paul Show",
                phone: "999-222-1111",
                email: "paul@dotnetmastery.com",
                isFavorite: true,
                },
                     ],



        }

    }



render() {
return (
            <div>
            <Header />
            <div className="container" style={{ minHeight: "85vh" }}>
            <div className="row py-3">
            <div className="col-4 offset-2">
            <AddRandomContact />
            </div>
            <div className="col-4">
            <RemoveAllContacts />
                            </div>
                            
            <div className="row py-2">
            <AddContact />
            </div>
            <div className="row py-2">
                    <FavoriteContacts conatcts={this.state.contactList.filter((u) => u.isFavorite == true)} />
            </div>
            <div className="row py-2">
            <GeneralContacts  conatcts={this.state.contactList.filter((u) => u.isFavorite == false)} />
            </div>
            </div>
            </div>
            <Footer />
            </div>

      );
}
}
export default ContactIndex;
    
  
Now go to favoritrs and genrral conatcts read the collection and put each value in contact and 

  
import Contact from "./Contact";
const FavoriteContacts = (props) => {
return (
<div>
        {props.contacts.map((contact, index) => (
         
            <Contact contact={contact} key={index}></Contact>
     ))}   
</div>
);
};
export default FavoriteContacts;
  ---------------------------------------
  
import Contact from "./Contact";
const GeneralContacts = (props) => {
return (
<div>
 {props.contacts.map((contact, index) => (
         
            <Contact contact={contact} key={index}></Contact>
     ))}   
</div>
);
};
export default GeneralContacts;


----------------------
  const Contact = (props) => {
return (
<div>
        <button className="btn btn-secondary form-control">{props.contact.name }</button>
</div>
);
};
export default Contact;

now add one package

  npm install @faker-js/faker --save-dev

  and then this is updated code of Contact.jsx 
  ***************************************
  import { Faker } from "@faker-js/faker";
const Contact = (props) => {
return (
<div
className="row p-md-2 mb-2"
style={{ borderRadius: "20px", border: "1px solid #555" }}
>
<div className="col-2 col-md-1 pt-2 pt-md-1">
<img
src={`https://ui-avatars.com/api/?name=${props.contact.name}`}
style={{ width: "80%" }}
alt=""
/>
</div>
<div className="col-6 col-md-5 text-warning pt-0">
<span className="h4">{props.contact.name}</span>
<br />
<div className="text-white-50">
{props.contact.email}
<br />
{props.contact.phone}
</div>
</div>
<div className="col-2 col-md-2 pt-md-3">
<button
className={`btn btn-sm m-1 ${
props.contact.isFavorite ? "btn-warning" : "btn-outline-warning"
}`}
>
<i class="bi bi-star" style={{ fontSize: "1rem" }}></i>
</button>
</div>
<div className="col-2 col-md-3 pt-md-3">
<button className="btn btn-primary btn-sm m-1">
<i class="bi bi-pencil-square" style={{ fontSize: "1rem" }}></i>
</button>
<button className="btn btn-danger btn-sm m-1">
<i class="bi bi-trash-fill" style={{ fontSize: "1rem" }}></i>
</button>
</div>
</div>

);
};
export default Contact;

chnaing look and feel of desging 
-----------------------------------
  const AddContact = () => {
return (
<div className="border col-12 text-white p-2">
<div className="row p-2">
<div className="col-12 text-white-50">Add a new Contact</div>
<div className="col-12 col-md-4 p-1">
<input
className="form-control form-control-sm"
placeholder="Name..."
></input>
</div>
<div className="col-12 col-md-4 p-1">
<input
className="form-control form-control-sm"
placeholder="Email..."
></input>
</div>
<div className="col-12 col-md-4 p-1">
<input
className="form-control form-control-sm"
placeholder="Phone..."
></input>
</div>
<div className="col-12 col-md-6 offset-md-3 p-1">
<button className="btn btn-primary btn-sm form-control">
Create
</button>
</div>
</div>
</div>
);
};
export default AddContact;
*********************************************************************
import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import RemoveAllContact from "./RemoveAllContacts";
class ContactIndex extends React.Component {
constructor(props) {
super(props);
this.state = {
contactList: [
{
id: 1,
name: "Ben Parker",
phone: "666-666-7770",
email: "ben@dotnetmastery.com",
isFavorite: false,
},
{
id: 2,
name: "Kathy Patrick",
phone: "111-222-0000",
email: "kathy@dotnetmastery.com",
isFavorite: true,
},
{
id: 3,
name: "Paul Show",
phone: "999-222-1111",
email: "paul@dotnetmastery.com",
isFavorite: true,
},
],
};
}
render() {
return (
<div>
<Header />
<div className="container" style={{ minHeight: "85vh" }}>
<div className="row py-3">
<div className="col-4 offset-2">
<AddRandomContact />
</div>
<div className="col-4">
<RemoveAllContact />
</div>
<div className="row py-2">
<div className="col-8 offset-2 row">
<AddContact />
</div>
</div>
<div className="row py-2">
<div className="col-8 offset-2 row">
<FavoriteContacts
contacts={this.state.contactList.filter(
(u) => u.isFavorite == true
)}
/>
</div>
</div>
<div className="row py-2">
<div className="col-8 offset-2 row">
<GeneralContacts
contacts={this.state.contactList.filter(
(u) => u.isFavorite == false
)}
/>
</div>
</div>
</div>
</div>
<Footer />
</div>
);
}
}
export default ContactIndex;
***************************************************************
import Contact from "./Contact";
const FavoriteContacts = (props) => {
return (
<div
className="col-12 py-2"
style={{ borderRadius: "10px", backgroundColor: "#323637" }}
>
<div className="text-center text-white-50">Favorites</div>
<div className="p-2">
{props.contacts.map((contact, index) => (
<Contact contact={contact} key={index}></Contact>
))}
</div>
</div>
);
};
export default FavoriteContacts;
******************************************************************************

import Contact from "./Contact";
const GeneralContacts = (props) => {
return (
<div
className="col-12 py-2"
style={{ borderRadius: "10px", backgroundColor: "#323637" }}
>
<div className="text-center text-white-50">Other Contacts</div>
<div className="p-2">
{props.contacts.map((contact, index) => (
<Contact contact={contact} key={index}></Contact>
))}
</div>
</div>
);
};
export default GeneralContacts;


here i am adding one methd to cntactindex ad contact so wat ever logic is there in that method will be executed 

  import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import RemoveAllContact from "./RemoveAllContacts";
class ContactIndex extends React.Component {
constructor(props) {
super(props);
this.state = {
contactList: [
{
id: 1,
name: "Ben Parker",
phone: "666-666-7770",
email: "ben@dotnetmastery.com",
isFavorite: false,
},
{
id: 2,
name: "Kathy Patrick",
phone: "111-222-0000",
email: "kathy@dotnetmastery.com",
isFavorite: true,
},
{
id: 3,
name: "Paul Show",
phone: "999-222-1111",
email: "paul@dotnetmastery.com",
isFavorite: true,
},
],
};
    }
    handleAddContact = () =>
    {
        alert("hello");
    }
render() {
return (
                <div>
                <Header />
                <div className="container" style={{ minHeight: "85vh" }}>
                <div className="row py-3">
                <div className="col-4 offset-2">
                <AddRandomContact />
                </div>
                <div className="col-4">
                <RemoveAllContact />
                </div>
                <div className="row py-2">
                <div className="col-8 offset-2 row">
                <AddContact  handleAddContact={this.handleAddContact} />
                </div>
                </div>
                <div className="row py-2">
                <div className="col-8 offset-2 row">
                <FavoriteContacts
                contacts={this.state.contactList.filter(
                (u) => u.isFavorite == true
                )}
                />
                </div>
                </div>
                <div className="row py-2">
                <div className="col-8 offset-2 row">
                <GeneralContacts
                contacts={this.state.contactList.filter(
                (u) => u.isFavorite == false
                )}
                />
                </div>
                </div>
                </div>
                </div>
                <Footer />
                </div>
);
}
}
export default ContactIndex;
so here I  am sending as props to addconatct the function logic 


there in add contact i am having another form submit event is there there i am calling one function again and in that function 
  i am calling above methood and preventing deault submit metod also

  add contact 
  -------------
  import React from "react";
class AddContact extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
        errorMessage: undefined,
        successMessage: undefined,
        };
        }
        handleAddContactFormSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddContact();
        };
        render() {
        return (
        <div className="border col-12 text-white p-2">
        <form onSubmit={this.handleAddContactFormSubmit}>
        <div className="row p-2">
        <div className="col-12 text-white-50">Add a new Contact</div>
        <div className="col-12 col-md-4 p-1">
        <input
        className="form-control form-control-sm"
        placeholder="Name..."
        ></input>
        </div>
        <div className="col-12 col-md-4 p-1">
        <input
        className="form-control form-control-sm"
        placeholder="Email..."
        ></input>
        </div>
        <div className="col-12 col-md-4 p-1">
        <input
        className="form-control form-control-sm"
        placeholder="Phone..."
        ></input>
        </div>
        <div className="col-12 col-md-6 offset-md-3 p-1">
        <button className="btn btn-primary btn-sm form-control">
        Create
        </button>
        </div>
        </div>
        </form>
        </div>

);
}
}
export default AddContact;

Now I will put name to eac control and in e target i will catch the values in form submit and that i will passs to contackindex method whch i am calling 
  and there using spreead operator frist object is added then prepty is added and finallly is favourite i am decidng so here in state to the collectiomn i have to add'
  so previos state is imp 

  addcontact.jsx 
  *****************
  
import React from "react";
class AddContact extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
        errorMessage: undefined,
        successMessage: undefined,
        };
        }
      handleAddContactFormSubmit = (e) => {
e.preventDefault();
const name = e.target.elements.contactName.value.trim();
const email = e.target.elements.contactEmail.value.trim();
const phone = e.target.elements.contactPhone.value.trim();
this.props.handleAddContact({ name: name, email: email, phone: phone });
};
        render() {
        return (
        <div className="border col-12 text-white p-2">
        <form onSubmit={this.handleAddContactFormSubmit}>
        <div className="row p-2">
        <div className="col-12 text-white-50">Add a new Contact</div>
        <div className="col-12 col-md-4 p-1">
        <input
        className="form-control form-control-sm"
                                placeholder="Name..."
                                name="contactName"
        ></input>
        </div>
        <div className="col-12 col-md-4 p-1">
        <input
        className="form-control form-control-sm"
                                placeholder="Email..."
                                name="contactEmail"
        ></input>
        </div>
        <div className="col-12 col-md-4 p-1">
        <input
        className="form-control form-control-sm"
                                placeholder="Phone..."
                                name="contactPhone"
        ></input>
        </div>
        <div className="col-12 col-md-6 offset-md-3 p-1">
        <button className="btn btn-primary btn-sm form-control">
        Create
        </button>
        </div>
        </div>
        </form>
        </div>

);
}
}
export default AddContact;

  ContactIndex.jsx 
  ----------------
  
import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import RemoveAllContact from "./RemoveAllContacts";
class ContactIndex extends React.Component {
constructor(props) {
super(props);
this.state = {
contactList: [
{
id: 1,
name: "Ben Parker",
phone: "666-666-7770",
email: "ben@dotnetmastery.com",
isFavorite: false,
},
{
id: 2,
name: "Kathy Patrick",
phone: "111-222-0000",
email: "kathy@dotnetmastery.com",
isFavorite: true,
},
{
id: 3,
name: "Paul Show",
phone: "999-222-1111",
email: "paul@dotnetmastery.com",
isFavorite: true,
},
],
};
    }
   handleAddContact = (newContact) => {
const newFinalContact = {
            ... newContact,
            id: this.state.contactList[this.state.contactList.length - 1].id + 1,
            isFavorite: false,
            };
            this.setState((prevState) => {
            return {
            contactList: prevState.contactList.concat([newFinalContact]),
            };
            });
            alert("hello");
};
render() {
return (
                <div>
                <Header />
                <div className="container" style={{ minHeight: "85vh" }}>
                <div className="row py-3">
                <div className="col-4 offset-2">
                <AddRandomContact />
                </div>
                <div className="col-4">
                <RemoveAllContact />
                </div>
                <div className="row py-2">
                <div className="col-8 offset-2 row">
                <AddContact  handleAddContact={this.handleAddContact} />
                </div>
                </div>
                <div className="row py-2">
                <div className="col-8 offset-2 row">
                <FavoriteContacts
                contacts={this.state.contactList.filter(
                (u) => u.isFavorite == true
                )}
                />
                </div>
                </div>
                <div className="row py-2">
                <div className="col-8 offset-2 row">
                <GeneralContacts
                contacts={this.state.contactList.filter(
                (u) => u.isFavorite == false
                )}
                />
                </div>
                </div>
                </div>
                </div>
                <Footer />
                </div>
);
}
}
export default ContactIndex;

Now i am adding validations ..so direclty pasting codes for both files 

  import React from "react";
class AddContact extends React.Component {
constructor(props) {
super(props);
this.state = {
errorMessage: undefined,
successMessage: undefined,
};
}
handleAddContactFormSubmit = (e) => {
e.preventDefault();
const name = e.target.elements.contactName.value.trim();
const email = e.target.elements.contactEmail.value.trim();
const phone = e.target.elements.contactPhone.value.trim();
const response = this.props.handleAddContact({
name: name,
email: email,
phone: phone,
});
if (response.status == "success") {
this.setState({ errorMessage: undefined, successMessage: response.msg
});
document.querySelector(".contact-form").reset();
} else {
this.setState({ errorMessage: response.msg, successMessage: undefined
});
}
};
render() {
return (
<div className="border col-12 text-white p-2">
<form
onSubmit={this.handleAddContactFormSubmit}
className="contact-form"
>
<div className="row p-2">
<div className="col-12 text-white-50">Add a new Contact</div>
<div className="col-12 col-md-4 p-1">
<input
className="form-control form-control-sm"
placeholder="Name..."
name="contactName"
></input>
</div>
<div className="col-12 col-md-4 p-1">
<input
className="form-control form-control-sm"
placeholder="Email..."
name="contactEmail"
></input>
</div>
<div className="col-12 col-md-4 p-1">
<input
className="form-control form-control-sm"
placeholder="Phone..."
name="contactPhone"
></input>
</div>
{this.state.errorMessage == undefined ? (
<div></div>
) : (
<div className="col-12 text-center text-danger">
{this.state.errorMessage}
</div>
)}
{this.state.successMessage == undefined ? (
<div></div>
) : (
<div className="col-12 text-center text-success">
{this.state.successMessage}
</div>
)}
<div className="col-12 col-md-6 offset-md-3 p-1">
<button className="btn btn-primary btn-sm form-control">
Create
</button>
</div>
</div>
</form>
</div>
);
}
}
export default AddContact;

  import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import RemoveAllContact from "./RemoveAllContacts";
class ContactIndex extends React.Component {
constructor(props) {
super(props);
this.state = {
contactList: [
{
id: 1,
name: "Ben Parker",
phone: "666-666-7770",
email: "ben@dotnetmastery.com",
isFavorite: false,
},
{
id: 2,
name: "Kathy Patrick",
phone: "111-222-0000",
email: "kathy@dotnetmastery.com",
isFavorite: true,
},
{
id: 3,
name: "Paul Show",
phone: "999-222-1111",
email: "paul@dotnetmastery.com",
isFavorite: true,
},
],
};
}
handleAddContact = (newContact) => {
if (newContact.name == "") {
return { status: "failure", msg: "Please Enter a valid Name" };
} else if (newContact.phone == "") {
return { status: "failure", msg: "Please Enter a valid Phone Number" };
}
const duplicateRecord = this.state.contactList.filter((x) => {
if (x.name == newContact.name && x.phone == newContact.phone) {
return true;
}
});
if (duplicateRecord.length > 0) {
return { status: "failure", msg: "Duplicate Record" };
} else {
const newFinalContact = {
... newContact,
id: this.state.contactList[this.state.contactList.length - 1].id + 1,
isFavorite: false,
};
this.setState((prevState) => {
return {
contactList: prevState.contactList.concat([newFinalContact]),
};
});
return { status: "success", msg: "Contact was added successfully" };
}
};
render() {
return (
<div>
<Header />
<div className="container" style={{ minHeight: "85vh" }}>
<div className="row py-3">
<div className="col-4 offset-2">
<AddRandomContact />
</div>
<div className="col-4">
<RemoveAllContact />
</div>
<div className="row py-2">
<div className="col-8 offset-2 row">
<AddContact handleAddContact={this.handleAddContact} />
</div>
</div>
<div className="row py-2">
<div className="col-8 offset-2 row">
<FavoriteContacts
contacts={this.state.contactList.filter(
(u) => u.isFavorite == true
)}
/>
</div>
</div>
<div className="row py-2">
<div className="col-8 offset-2 row">
<GeneralContacts
contacts={this.state.contactList.filter(
(u) => u.isFavorite == false
)}
/>

</div>
</div>
</div>
</div>
<Footer />
</div>
);
}
}
export default ContactIndex;

toggle event codes 
  -----------------
import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import RemoveAllContact from "./RemoveAllContact";
class ContactIndex extends React.Component {
constructor(props) {
super(props);
this.state = {
contactList: [
{
id: 1,
name: "Ben Parker",
phone: "666-666-7770",
email: "ben@dotnetmastery.com",
isFavorite: false,
},
{
id: 2,
name: "Kathy Patrick",
phone: "111-222-0000",
email: "kathy@dotnetmastery.com",
isFavorite: true,
},
{
id: 3,
name: "Paul Show",
phone: "999-222-1111",
email: "paul@dotnetmastery.com",
isFavorite: true,
},
],
};
}
handleAddContact = (newContact) => {
if (newContact.name == "") {
return { status: "failure", msg: "Please Enter a valid Name" };
} else if (newContact.phone == "") {
return { status: "failure", msg: "Please Enter a valid Phone Number" };
}
const duplicateRecord = this.state.contactList.filter((x) => {
if (x.name == newContact.name && x.phone == newContact.phone) {
return true;
}
});
if (duplicateRecord.length > 0) {
return { status: "failure", msg: "Duplicate Record" };
} else {
const newFinalContact = {
... newContact,
id: this.state.contactList[this.state.contactList.length - 1].id + 1,
isFavorite: false,
};
this.setState((prevState) => {
return {
contactList: prevState.contactList.concat([newFinalContact]),
};
});
return { status: "success", msg: "Contact was added successfully" };
}
};
handleToggleFavorites = (contact) => {
this.setState((prevState) => {
return {
contactList: prevState.contactList.map((obj) => {
if (obj.id == contact.id) {
return { ... obj, isFavorite: !obj.isFavorite };
}
return obj;
}),
};
});
};
render() {
return (
<div>
<Header />
<div className="container" style={{ minHeight: "85vh" }}>
<div className="row py-3">
<div className="col-4 offset-2">
<AddRandomContact />
</div>
<div className="col-4">
<RemoveAllContact />
</div>
<div className="row py-2">
<div className="col-8 offset-2 row">
<AddContact handleAddContact={this.handleAddContact} />
</div>
</div>
<div className="row py-2">
<div className="col-8 offset-2 row">
<FavoriteContacts
contacts={this.state.contactList.filter(
(u) => u.isFavorite == true
)}
favoriteClick={this.handleToggleFavorites}
/>
</div>
</div>
<div className="row py-2">
<div className="col-8 offset-2 row">
<GeneralContacts
contacts={this.state.contactList.filter(
(u) => u.isFavorite == false
)}
favoriteClick={this.handleToggleFavorites}
/>
</div>
</div>
</div>
</div>
<Footer />
</div>
);
}
}
export default ContactIndex;

-----------------------------------------------------------------
import Contact from "./Contact";
const FavoriteContacts = (props) => {
return (
<div
className="col-12 py-2"
style={{ borderRadius: "10px", backgroundColor: "#323637" }}
>
<div className="text-center text-white-50">Favorites</div>
<div className="p-2">
{props.contacts.map((contact, index) => (
<Contact
contact={contact}
key={index}
favoriteClick={props.favoriteClick}
></Contact>
))}
</div>
</div>
);
};
export default FavoriteContacts;


-------------------------------------------------------------------------
import Contact from "./Contact";
const GeneralContacts = (props) => {
return (
<div
className="col-12 py-2"
style={{ borderRadius: "10px", backgroundColor: "#323637" }}
>
<div className="text-center text-white-50">Other Contacts</div>
<div className="p-2">
{props.contacts.map((contact, index) => (
<Contact
contact={contact}
key={index}
favoriteClick={props.favoriteClick}
></Contact>
))}
</div>
</div>
);
};
export default GeneralContacts;

--------------------------------------------------------------------------------------
const Contact = (props) => {
return (
<div
className="row p-md-2 mb-2"
style={{ borderRadius: "20px", border: "1px solid #555" }}
>
<div className="col-2 col-md-1 pt-2 pt-md-1">
<img
src={`https://ui-avatars.com/api/?name=${props.contact.name}`}
style={{ width: "80%" }}
alt=""
/>
</div>
<div className="col-6 col-md-5 text-warning pt-0">
<span className="h4">{props.contact.name}</span>
<br />
<div className="text-white-50">
{props.contact.email}
<br />
{props.contact.phone}
</div>
</div>
<div className="col-2 col-md-2 pt-md-3">
<button
className={`btn btn-sm m-1 ${
props.contact.isFavorite ? "btn-warning" : "btn-outline-warning"
}`}
onClick={() => props.favoriteClick(props.contact)}
>
<i className="bi bi-star" style={{ fontSize: "1rem" }}></i>
</button>
</div>
<div className="col-2 col-md-3 pt-md-3">
<button className="btn btn-primary btn-sm m-1">

<i className="bi bi-pencil-square" style={{ fontSize: "1rem" }}></i>
</button>
<button className="btn btn-danger btn-sm m-1">
<i className="bi bi-trash-fill" style={{ fontSize: "1rem" }}></i>
</button>
</div>
</div>
);
};
export default Contact;








  

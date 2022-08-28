let id=document.getElementById("orderNumber");
let container=document.getElementById("headDiv");

/*  adding content to web-page */
function add(){
    /*
    let divtag=document.createElement('div');
    let ptag=document.createElement('p');
    let deltext=document.createTextNode("Delete");
    let deltag=document.createElement('button');
    let input=id.value;
    ptag.innerText=`Order no: ${input}`;
    divtag.appendChild(ptag);
    divtag.appendChild(deltag);
    divtag.classList.add(input);
    container.appendChild(divtag);
    deltag.addEventListener('click',function(){
        container.removeChild(divtag);
    });
    */
   let card=document.createElement('div');
   let cardheader=document.createElement('div');
   let cardBody=document.createElement('div');
   let cardFooter=document.createElement('div');
   let cardPrice=document.createElement('h5');
   let ingredients=document.createElement('p');
   let status=document.createElement('p');
   let cancel=document.createElement('a');

   let orderNumberText=document.createTextNode("Order ID: "+ id.value);
   let priceText= document.createTextNode("Price: $9.55 ");
   
   let contentsText=  document.createTextNode("Ham Burger with pickle -1");
   let statusText= document.createTextNode("Order Received");
   let cancelText= document.createTextNode("Cancel");
   
   cardheader.appendChild(orderNumberText);
   cardPrice.appendChild(priceText);
   ingredients.appendChild(contentsText);
   status.appendChild(statusText);
   cardBody.appendChild(cardPrice);
   cardBody.appendChild(ingredients);
   cardBody.appendChild(status);
   cancel.appendChild(cancelText);
   cardFooter.appendChild(cancel);
   card.appendChild(cardheader);
   card.appendChild(cardBody);
   card.appendChild(cardFooter);
   container.appendChild(card);

   card.classList="card col-md-3";
   cardheader.classList="card-header";
   cardBody.classList="card-body";
   cardPrice.classList="card-title";
   ingredients.classList="card-text";
   status.classList="card-text sts";
   cardFooter.classList="card-footer";
   status.id=`${id.value}`;
   let orderId=id.value; 
   id.value="";
   /* changing status  */
   let changeStatus=document.getElementById(orderId);
   changeInStatus(changeStatus);
   cancel.addEventListener('click',function(){
       container.removeChild(card);
   }); 
}

async function changeInStatus(changeStatus){
    await addingpatty(changeStatus);
    await addMayo(changeStatus);
    await addOnionAndTomato(changeStatus);
    await addLetuce(changeStatus);
    await addCheese(changeStatus);
    await orderready(changeStatus);
}
let addingpatty=function(changeStatus){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            changeStatus.innerText="Patty added on top bun";
            resolve();
        },3000);
    });
}

let addMayo=function(changeStatus){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            changeStatus.innerText="Mayoneese on top of patty";
            resolve();
        },3000);
    });
}

let addOnionAndTomato=function(changeStatus){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            changeStatus.innerText="Added onion and tomato";
            resolve();
        },3000);
    });
}
let addLetuce=function(changeStatus){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            changeStatus.innerText="Added Letuce";
            resolve();
        },3000);
    });
}
let addCheese=function(changeStatus){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            changeStatus.innerText="Added Cheese";
            resolve();
        },3000);
    });
}
let orderready=function(changeStatus){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            changeStatus.innerText="Burger Ready!";
            resolve();
        },3000);
    });
}


/*                 ROUTING                 */
function changeActiveNavlink(par){
    //let adingBlock=document.getElementById("addingBlock");
    let oM=document.getElementById("order-Management");
    let SIGN_UP=document.getElementById("SIGN_UP");
    let LOGIN=document.getElementById("LOGIN");
    //adingBlock.style.display="none";
    oM.style.display="none";
    SIGN_UP.style.display="none";
    LOGIN.style.display="none";
    if(par=='SIGN_UP') SIGN_UP.style.display="block";
    if(par=='LOGIN')   LOGIN.style.display="block";
    if(par=='HOME') {
        oM.style.display="block";
        
        
    }
}

/*          VALIDATING SIGN-UP FORM         */
function validate(){
    /*    input tags    */
    let firstName=document.getElementById("firstName").value;
    let lastName=document.getElementById("lastName").value;
    let eMail=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let state=document.getElementById("state").value;
    let zipCode=document.getElementById("zipCode").value;
    let checkBox=document.getElementById("signup-CheckBox").checked;

/*      valid and in-valid tags             */
    let firstNameValid=document.getElementById("firstNameValid");
    let firstNameInvalid=document.getElementById("firstNameInvalid");
    let lastNameValid=document.getElementById("lastNameValid");
    let lastNameInvalid=document.getElementById("lastNameInvalid");
    let emailValid=document.getElementById("emailValid");
    let emailInvalid=document.getElementById("emailInvalid");
    let passwordValid=document.getElementById("passwordValid");
    let passwordInvalid=document.getElementById("passwordInvalid");
    let stateValid=document.getElementById("stateValid");
    let stateInvalid=document.getElementById("stateInvalid");
    let zipCodeValid=document.getElementById("zipCodeValid");
    let zipCodeInvalid=document.getElementById("zipCodeInvalid");
    let tnCInvalid=document.getElementById("tnCInvalid");

    firstNameValid.style.display="none";
    firstNameInvalid.style.display="none";
    lastNameValid.style.display="none";
    lastNameInvalid.style.display="none";
    emailValid.style.display="none";
    emailInvalid.style.display="none";
    passwordValid.style.display="none";
    passwordInvalid.style.display="none";
    stateValid.style.display="none";
    stateInvalid.style.display="none";
    zipCodeValid.style.display="none";
    zipCodeInvalid.style.display="none";
    tnCInvalid.style.display="none";
    
    if(firstName==="") firstNameInvalid.style.display="block"; 
    if(lastName==="")  lastNameInvalid.style.display="block";
    if(eMail==="" || !eMail.includes("@") || !eMail.includes(".") || eMail.length-eMail.lastIndexOf('.')<3) emailInvalid.style.display="block";
    if(password==="") passwordInvalid.style.display="block";
    if(state==="") stateInvalid.style.display="block";
    if(zipCode.length!=6) zipCodeInvalid.style.display="block";
    if(!checkBox) tnCInvalid.style.display="block";
}


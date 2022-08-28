/*
var bankBalances=prompt("Enter balances seperated with ',' ").split(',');
for(let num of balances){}
let bal;
for(let i=0;i<5;i++){
    if(arr[i]>200000){ 
        bal=arr[i]*(1.10);
        arr[i]=bal-(bal*0.002);
    }
    else if(arr[i]>100000){ 
        bal=arr[i]*(1.05);
        arr[i]=bal-(bal*0.0005);
    }
    else{  
        arr[i]=(arr[i]*(1.03));
    }
}
*/
function calculateInterest () {
    /*
    let bankBalance1 = Number(document.getElementById('bank-balance-1').value)
    let bankBalance2 = Number(document.getElementById('bank-balance-2').value)
    let bankBalance3 = Number(document.getElementById('bank-balance-3').value)

    let updateBankBalance1=document.getElementById("updated-bank-balance-1");
    let updateBankBalance2=document.getElementById("updated-bank-balance-2");
    let updateBankBalance3=document.getElementById("updated-bank-balance-3");
  
    let bankBalances=[bankBalance1,bankBalance2,bankBalance3];
    for(let i=0;i<bankBalances.length;i++){
        if(bankBalances[i]>200000){ 
            bal=bankBalances[i]*(1.10);
            bankBalances[i]=bal-(bal*0.002);
        }
        else if(bankBalances[i]>100000){ 
            bal=bankBalances[i]*(1.05);
            bankBalances[i]=bal-(bal*0.0005);
        }
        else{  
            bankBalances[i]=(bankBalances[i]*(1.03));
        }
    }
    updateBankBalance1.value=bankBalances[0];
    updateBankBalance2.value=bankBalances[1];
    updateBankBalance3.value=bankBalances[2];
    */
   
   let bankBalances=document.getElementsByClassName('input-balance');
   let displayUpdatedBalances=document.getElementsByClassName('display-updated-balance');
   var bal;
   
   for(let i=0;i<bankBalances.length;i++){
        bal=bankBalances[i].value;
        if(bal>200000){ 
            bal=bal*(1.10);
            bal=bal-(bal*0.002);
        }
        else if(bal>100000){ 
            bal=bal*(1.05);
            bal=bal-(bal*0.0005);
        }
        else{  
            bal=bal*(1.03);
        }
        displayUpdatedBalances[i].value=Math.floor(bal);
   }
   
   
}
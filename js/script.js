const name=document.querySelector("#name");
const initialbalance=document.querySelector("#initialbalance");
const btn=document.querySelector(".btn");
const submit=document.querySelector("#sub-account");
const amount=document.querySelector('#amount');
const add=document.querySelector(".add-btn")

// console.log(name,accountNumber,btn,submit,amount)

console.log("file is attached");
class BankApplication{
    constructor (customername,balance=0){
        this.customername=customername;
        this.balance=balance;
        this.accountNumber=Date.now()  
    }

    deposit(amount){
        this.balance+=amount;
    }
    withdraw(amount){
        this.balance-=amount;
    }
}

class saving_account extends BankApplication {
    transactionLimit=5000;
    constructor(customername,balance=0){
        super(customername,balance)
    }
}




const accounts=[]
const user1=new BankApplication("Aman",20000);
user1.deposit(10000);
user1.withdraw(2000)
console.log(user1)


btn.addEventListener("click",()=>{
    let user=new BankApplication(name.value,+initialbalance.value);
    console.log(user)
    accounts.push(user);
    console.log(accounts)
})

add.addEventListener("click",()=>{
    const account=accounts.find((account)=>account.accountNumber===+submit.value)
    let value=Number(amount.value)
   account.deposit(value);
   console.log(account)
})

const user2=new saving_account("Akshat",40000)

user2.deposit(1200)
console.log(user2)
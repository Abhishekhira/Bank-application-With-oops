const name=document.querySelector("#name");
const initialbalance=document.querySelector("#initialbalance");
const btn=document.querySelector(".btn");
const submit=document.querySelector("#sub-account");
const amount=document.querySelector('#amount');
const add=document.querySelector(".add-btn")

// console.log(name,accountNumber,btn,submit,amount)

console.log("file is attached");
   function BankApplication(customername,balance=0){
        this.customername=customername;
        this.balance=balance;
        this.accountNumber=Date.now()  
    }

   


function Saving_account(customername,balance=0){
BankApplication.call(this,customername,balance)
this.transaction_limit=5000;


}

BankApplication.prototype.deposit=function(amount){
    this.balance+=amount
}
BankApplication.prototype.withdraw=function(amount){
    this.balance-=amount;
}
Saving_account.prototype=Object.create(BankApplication.prototype)

const accounts=[]
const user1=new BankApplication("Aman",20000);
user1.deposit(10000);
user1.withdraw(2000)
console.log(user1)

const user2 =new Saving_account("Aman",20900)
console.log(user2)

user1.deposit(7000)

user2.deposit(7000)

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
console.log(user2)
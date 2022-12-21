const name=document.querySelector("#name");
const initialbalance=document.querySelector("#initialbalance");
const btn=document.querySelector(".btn");
const submit=document.querySelector("#sub-account");
const amount=document.querySelector('#amount');
const add=document.querySelector(".add-btn");
const username=document.querySelector(".user")
const display_no=document.querySelector(".accountNumber");
console.log(username);

// we can call static properties on instance of class static properties are stored in  class 
class config {
   static{
    console.log("initialised")
   }

    static  user ="xyz";
    static password="****"
}
console.log(config.user)


// console.log(name,accountNumber,btn,submit,amount)

console.log("file is attached");
class BankApplication{
    static id=0;

    customername;
    #balance;
    accountNumber;
     

    static check(){
        console.log("static check method is called")
    }

    constructor (customername,balance=0,income){
        this.customername=customername;
        this.#balance=balance;
        this.income=income;
        this.accountNumber=Date.now()  
        this.id=BankApplication.id++;
    }

    deposit(amount){
        this.#balance+=amount;
    }
    withdraw(amount){
        this.#balance-=amount;
    }

    set(amount){
        this.#balance=amount;
    }
    get(){
        return this.#balance;
    }

    #calculatingInterest(){
        console.log("calculating interest");
    }

    applyforLoan(){
       return this.#calculatingInterest()
    }
   
    static  userSort(user1,user2){
        return user1.income-user2.income;
    }

    static try(){
        return this.check()
    }
}

class saving_account extends BankApplication {
    transactionLimit=5000;
    constructor(customername,balance=0){
        super(customername,balance)
    }
}




const accounts=[]
const user1=new BankApplication("Aman",20000,1000000);
const user4=new BankApplication("Akshat",20000,700000);
const user3=new BankApplication("gautam",20000,800000);
user1.deposit(10000);
user1.withdraw(2000)
console.log(user1)
const arrayUser=[user1,user3,user4];
const sortedArray=arrayUser.sort(BankApplication.userSort);
console.log(sortedArray)


btn.addEventListener("click",()=>{
  const [firstname ,lastname]=name.value.split(" ")
  console.log(firstname)
  username.innerHTML=firstname;
  let user=new BankApplication(firstname,+initialbalance.value);
  display_no.innerHTML=user.accountNumber;
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

const user2=new saving_account("Akshat",40000);

user2.deposit(1200)
user1.set(200000)
console.log(user1.get())

user1.applyforLoan();
BankApplication.try()
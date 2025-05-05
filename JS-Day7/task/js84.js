function BankAccount(accno,bal){
this.Bank_Acc=accno;
this.Balance=bal;
this.deposite=function(dep){
    bal=bal+dep;
    return(`Current Balance:${bal}`)
}
this.widtdraw=function(wi_dw){
    return(`Current Balance:${bal-wi_dw}`)
}

}
let account_no="1234567890";
let balance=5000;
let dep=3000
let withdraw=1800
let check=new BankAccount(account_no,balance)
console.log(`Account No:${check.Bank_Acc}`);
console.log(`Balance:${check.Balance}`);
console.log(`Deposite:${dep}`);
console.log(check.deposite(dep));
console.log("widthdraw Amount:",withdraw);

console.log(check.widtdraw(withdraw));


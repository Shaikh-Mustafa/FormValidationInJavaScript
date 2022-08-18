
const Name = document.querySelector('#fullName');
const address = document.querySelector('#address');
const mobile = document.querySelector('#mobile');
const email = document.querySelector('#email');
const dob = document.querySelector('#dob');
const Age = document.querySelector('#age');
const gender = document.querySelector('#gender');



function validate(){
    // all fields are required..

    // address allow only alpanumeric values..
    var RegEx = /^[a-z0-9]+$/i;
    let valid = RegEx.test(address.value);
    console.log(valid);

    if(!valid){
        document.querySelector('#address-error').innerHTML = 'Please Enter Only Alphanumeric Values!!'
    }
    else{
        document.querySelector('#address-error').innerHTML = '';
    }

    //mobile number must be equal to 10
    let mobileNumberLength = mobile.value.toString().length;
    console.log(mobileNumberLength.toString().length);

    if(mobileNumberLength < 10){
        document.querySelector('#mobile-error').innerHTML = 'Please Enter at least 10 Digits!!'
    }
    else{
        document.querySelector('#mobile-error').innerHTML = ''
    }

    // validation email
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat)){
        document.querySelector('#email-error').innerHTML = ''
    }
    else{
        document.querySelector('#email-error').innerHTML = 'Please Enter Valid Email Address'

    }

    // calculating the age...
    let dateofBirth = new Date(dob.value);

    let birthyear = dateofBirth.getFullYear();
    console.log(birthyear)

    let currentyear = 2023;

    let age = currentyear - birthyear;
    console.log(age);  

    Age.value = age;



}
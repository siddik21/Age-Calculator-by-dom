function ageCal(name, year){
let date= new Date();
age = date.getFullYear() - year;

let ageStatus = checkAgeStatus(age);
return`<p class="alert alert-${ageStatus.status}">Hi ${name}, You are ${age}years old
and You are ${ageStatus.name}</p>`
 
}

function checkAgeStatus(age){
    if(age > 0 && age < 10){
        return{
            name: 'Babu',
            status: 'success'
        };
    }else if(age >=10 && age < 18){
        return{
            name: 'Kisor',
            status: 'info'
        };
    }else if(age >=18 && age < 35){
        return{
            name: 'Jubok',
            status: 'warning'
        };
    }else if(age >=35 && age < 55){
        return{
            name: 'Boyosko',
            status: 'primary'
        };
    }else if(age >=55 && age < 150){
        return{
            name: 'Briddho',
            status: 'danger'
        };
    }else{
        return{
            name: 'vut',
            status: 'dark'
        };
    }
}
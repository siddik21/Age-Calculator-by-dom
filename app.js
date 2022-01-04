const checkButton= document.querySelector('#check');
const name= document.querySelector('#name');
const year= document.querySelector('#year');
const result= document.querySelector('#result');

checkButton.addEventListener('click', ()=>{
        if(name.value== '' || year.value== ''){
        result.innerHTML= `<p class='alert alert-danger'>Please Put All Values</p>`
        }
        else{
        result.innerHTML= ageCal(name.value, year.value);
        name.value= '';
        year.value= '';
        }
});


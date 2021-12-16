const emailField = document.querySelector('#email');
const nameField = document.querySelector('#name');
const textField = document.querySelector('#text');
const storeds = document.querySelectorAll('.stored');
let obj = {};


storeds.forEach(item => {
   item.addEventListener('input', () => {
        obj.email = emailField.value;
    
        obj.name = nameField.value;
    
        obj.textarea = textField.value;

        localStorage.setItem('form', JSON.stringify(obj));
   })
});

const data = JSON.parse(localStorage.getItem('form'));

window.onload = function() {
    if(data.name !== undefined){
        nameField.value = data.name
    }
    if(data.email !== undefined){
        emailField.value = data.email
    }
    if(data.textarea !== undefined){
        textField.value = data.textarea
    }
}

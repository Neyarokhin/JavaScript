 let age = document.getElementById('age');

 function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
 }
     
 alert(showUser.call(age, 'Smith', 'Stive'));
    //showUser();
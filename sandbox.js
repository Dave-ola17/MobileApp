const Form = document.forms['container'];
const sec = document.createElement('table');
 
Form.addEventListener('submit', function(e){
   e.preventDefault();
   // const name = Form.querySelector('input[type="text"]').value;
   // const email = Form.querySelector('input[type="email"]').value;
   // const val = Form.querySelector('input[type="number"]').value
   // const reason = document.getElementById('reason1').value;   
   // const amount =document.getElementById('fee').value;   
   // const state =document.getElementById('state').value;

   // adding elements
   // const register = document.createElement('h3');
   // // const sec = document.createElement('section'); *this has been declared above already*
   // const Name = document.createElement('th');   
   // const Email = document.createElement('th');
   // const Val = document.createElement('th')
   // const Reason = document.createElement('th');
   // const Amount = document.createElement('th');
   // const State = document.createElement('th');  
   
   // const con = document.createElement('h4');
   // const row = document.createElement('tr');
   

   // adding class
   // Name.classList.add('info');
   // Email.classList.add('info');
   // Val.classList.add('info');
   // Reason.classList.add('info');
   // Amount.classList.add('info');
   // State.classList.add('info');
   
   

   
   // Style from java
   // register.style.color = 'red';
   // register.style.margin = '5px'
   // register.style.marginBottom = '19px'
     

  
   // Name.textContent =` NAME:  ${name}`
   
   // Email.textContent = 'EMAIL: '+ email;
   // Val.textContent = 'PHONE NO: '+ val;
   // Reason.textContent ='REASON FOR ENTRY: '+ reason;
   // Amount.textContent ='AMOUNT PAID (NAIRA): '+ amount;
   // State.textContent ='STATE OF ORIGIN: '+ state;
   // con.textContent ='Congratulations, your registration was successful.';
   
   

   // append to dom
   // sec.appendChild(register)
   // sec.appendChild(Name)
   // sec.appendChild(Email)
   // sec.appendChild(Val)
   // sec.appendChild(Reason)
   // sec.appendChild(Amount)
   // sec.appendChild(State)       
   // sec.appendChild(con)
   // sec.appendChild(row);
  
   // Form.appendChild(sec)


});

var row = 1;
var enter = document.getElementById('but1');
enter.addEventListener('click', displayDetails);


function displayDetails(){
    
   var nam = document.getElementById('myInput').value;
   var emai = document.getElementById('Email1').value;
   var pho = document.getElementById('myPhone').value;
   var reas = document.getElementById('reason1').value;
   var reg = document.getElementById('fee').value;
   var stat = document.getElementById('state').value;
   
   
   // if(!nam || !emai || !pho){
   //    alert('please fill in all details');
   //    return;
   // }

   var display = document.getElementById('show');

   var NewRow = display.insertRow(row);
   var cell1 = NewRow.insertCell(0);
   var cell2 = NewRow.insertCell(1);
   var cell3 = NewRow.insertCell(2);
   var cell4 = NewRow.insertCell(3);
   var cell5 = NewRow.insertCell(4);
   var cell6 = NewRow.insertCell(5);

   


   cell1.innerHTML = nam;
   cell2.innerHTML = emai;
   cell3.innerHTML = pho;
   cell4.innerHTML = reas;
   cell5.innerHTML = reg;
   cell6.innerHTML = stat;

   row++;  

};



// const del = document.querySelector('.but-2');
// console.log(del)
// del.addEventListener('click', function(e){
//    const ave = e.target.ParentElement;
//    ave.parentNode.removeChild(but)
// })


// let gee = document.querySelector('#myInput');
// console.log(gee);

function takevalue(){
   var name = document.getElementById('myInput').value;
   var mail = document.getElementById('Email1').value;
   var phone = document.getElementById('myPhone').value;
   var reason = document.getElementById('reason1').value;
   var reg = document.getElementById('reason1').value;
   var state = document.getElementById('state').value;


   document.write(`YOUR DATA: <br>`);
   document.write(`  NAME: ${name} <br>`);
   document.write(`  EMAILL ADDRESS: ${mail} <br>`);
   document.write(`  PHONE NUMBER: ${phone} <br>`);
   document.write(`  REGISTRATION FEE: ${reason} <br>`);
   document.write(`  STATE OF ORIGIN  : ${state} <br>`);
   document.write(`Hey ${name}, Congratulations your registration was successful.   <br>`);
}
// table infomation bellow
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];
var n = 1;
var x= 0;



function addRow(){
   preventDefault();   
   var AddRown = document.getElementById(show);
   var NewRow = AddRown.inserRow(n);

   list1[x] = document.getElementById("name").value;
   list2[x] = document.getElementById("email").value;
   list3[x] = document.getElementById("val").value;
   list4[x] = document.getElementById("rname").value;
   list5[x] = document.getElementById("reason").value;
   list6[x] = document.getElementById("state").value;

   var cell = NewRow.insertCell(0);
   var cell = NewRow.insertCell(1);
   var cell = NewRow.insertCell(2);
   var cell = NewRow.insertCell(3);
   var cell = NewRow.insertCell(4);
   var cell = NewRow.insertCell(5);

   cel1.innerHTML = list1[x];
   cel2.innerHTML = list2[x];
   cel3.innerHTML = list3[x];
   cel4.innerHTML = list4[x];
   cel5.innerHTML = list5[x];
   cel6.innerHTML = list6[x];

   n++;
   x++;

}
 

// var AddRown = document.getElementById(show);
// var NewRow = AddRown.inserRow(n);
let display = document.getElementById('fish');
console.log('display')

var but = document.getElementById('btn4');
console.log(but)
but.addEventListener('click', function(e){
   if(but.clicked == true){
      table.style.display = "none";
   }
})








// hide info section
const hideBox = document.getElementById('hide-1'); 

hideBox.addEventListener('change', function(e){
   
   if(hideBox.checked){
      sec.style.display = "none";
   }
   else{
      sec.style.display = "initial";
   }
});
// const hideBox = document.querySelector('#hide');
// hideBox.addEventListener('change', function(e){
//    if(hideBox.checked){
//        list.style.display = "none";
//    } else{
//        list.style.display = "initial";
       
//    }
// })
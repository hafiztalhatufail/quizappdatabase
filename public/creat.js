   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
   import { getDatabase,ref,push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries
 
   // Your web app's Firebase configuration
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   const firebaseConfig = {
     apiKey: "AIzaSyBAeWyTAEuHPMwok__q78ODRvVfEZD_hnc",
     authDomain: "quiz-app-ee38a.firebaseapp.com",
     projectId: "quiz-app-ee38a",
     storageBucket: "quiz-app-ee38a.appspot.com",
     messagingSenderId: "35205572022",
     appId: "1:35205572022:web:1f9c0d2aa5c4e8e09dcd17",
     measurementId: "G-TTZF0NKPJ7"
   };
 
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);


var Question = document.getElementById('Question');
var  option = document.getElementById('option');
var optionparent = document.getElementById('optionparent');
var correctparentElem = document.getElementById('correctparent')
 console.log(correctparentElem.innerHTML)

var db = getDatabase();
var options = [];
var correctparent;

function renderquestion(){
    optionparent.innerHTML =''
    for( var i =0; i<options.length;i++){
        optionparent.innerHTML +=`<li onclick="setcorrectanswer('${options[i]}')" class="p-2 my-2  bg-light">${options[i]}</li>`
    }
    
}

window.addquestion =function(){

    options.push(option.value)
    console.log(options)
    renderquestion();
}

window.setcorrectanswer = function(a){

    // console.log(a)
    // console.log( correctparentElem)
    correctparent = a;
    correctparentElem.innerHTML = correctparent ;
    renderquestion();
}

window.submit=function(){
 var obj = {
    question: Question.value,
    options,
    correctanswer:correctparentElem.innerHTML
};
console.log(options);
obj.id = push(ref(db,'questions/')).key
 var refrence = ref(db,`questions/${obj.id}`);

 set(refrence,obj)
//  console.log(obj);
}
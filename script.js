// // // var name = 'grigoriy'

// // // console.log(name)

// // // // var age = prompt('Сколько вам лет');
// // // // console.log(age);

// // // var myMass = ['Grisha', 'sasha', 'petya'];

// // // console.log(myMass.length);
// // // console.log(myMass[2]);
// // // for(var i = 0; i < myMass.length; i++)
// // // console.log("Privet " + myMass[i]);
// // // var name = prompt('Введите имя');
// // // // if ( age > 18 ){
// // // //     alert("priver")
// // // // }
// // // //  else if(age > 16 ){
// // // //     alert('privet'); 
// // // //  }
// // //  switch(name) {
// // //      case 'petr':{
// // //          alert('petr shop');
// // //          break;
// // //      }
// // //      case 'vasiliy':{
// // //      alert('что-то другое')
// // //      break;
// // //      }
         
// // //  }
// // //  function myfun(number1,number2){
// // //      return number1 - number2;
    
// // //  }

 
// // //  var a = myfun(3,2);
// // // console.log(a);

// // // var object = {
// // // age: 25,
// // // height: 175,
// // // name: 'petr'

// // // }
// // //  var object3 = {
// // //      age: 22,
// // //      height: 180,
// // //      name: 'sacha'
// // //  } 
// // // var myMass = [object,object3]
// // // for(var i = 0; i < myMass.length; i++)
// // // {
// // //     console.log(myMass[i].age )
// // // }
// //  var a =  [12,14,16];
  
// //  var b = a.map( function( e ){
// //     return e * e
// //  } );
// // console.log(b);


// // var a1 = [ 2, 3, 4];
 
// // a1.forEach(function(r)
// // {
// //     console.log(r)
// // }
// // )
// //  var a3 =  [20, 30, 40];
// //   var a4 = a3.filter(function(w)
// //   {
// //       if(
// //           w > 20
        
// //       )
// //       return true
// //   }


// //   )
// // console.log(a4);
     
// var a = [2,4,6,8];
// // var a2 = a.reduce (function (accum, elem, index ){
// //     return accum+elem 
// // }, 0)


// var a2 = a.reduce( (accum,elem) =>
// accum+elem,0
 
// )

// console.log(a2);
// var text = document.getElementsByTagName('h1');
// text[0].innerHTML = 'привет'
// function clickHandler(e){
//     console.log("hehe")
//     text[0].style.color = 'blue'; 
// }
// var ourDiv =document.getElementsByTagName('div')
// ourDiv = ourDiv[0];
// // ourDiv[0].onclick =() => {
// //     alert('Hello');
// // } 
// ourDiv.addEventListener('mouseenter' , () => {ourDiv.style.backgroundColor ="red" } ) 
// ourDiv.addEventListener('mouseleave' , () => {ourDiv.style.backgroundColor ="white" } ) 

// const name = "Grisha";
// let  greeting =  prompt('Введите значение')
// alert(name + greeting);
// function buttonClickHandler(e){

//     var name=document.getElementsByName('name')[0]
//     var password=document.getElementsByName('password')[0]
//     alert(name.value + password.value
//         )

//}
 function getIp ()  {

    let span = document.getElementById('text')
      if(span.innerHTML){
          span.innerHTML= ''
        
      }
      else {
        const prom = fetch ("https://api6.ipify.org/?format=json").then( (res)=>res.json() ).then(
            (res)=>{
              
               span.innerHTML = res.ip;
   
            }
        )
            
      }

   

 }

  let button = document.getElementById('button')
  button.addEventListener('click',myfunc)
   
  function myfunc() {
      getIp();
      
  }
class Stydent{
  constructor(name,weight,age) {
  this.name = name;
  this.weight = weight;
  this.age = age;

  }
 

  
}
var vasya = new Stydent('vasya', 70,25)
//console.log(vasya.age);
// class Rectangle {
//   constructor(width,height,top,left) {
//     this.width = width;
//     this.top = top;
//     this.left = left;
//     this.height = height;
//   }

//    drawRectangle() {
//      const html = document.getElementsByTagName("html")[0]
//      const div = document.createElement("div")

//      div.style.width = this.width + 'px';
//     div.style.height = this.height + 'px';
//      div.style.backgroundColor = "rebeccaPurple";
//      div.style.top = this.top + 'px';
//      div.style.left = this.left + 'px';
//      div.style.position = "absolute";
//      html.appendChild(div);
//    }
//  }
// const NewRect = new Rectangle(70,40,10,20);
//  NewRect.drawRectangle();

//  class Square extends Rectangle {
//    constructor (width){
//        super(width,100,150,100);
  
//    }
//  }
//  const ourSquare = new Square(100)
//  ourSquare.drawRectangle();


 class Flag{
  constructor(width,height,top,left,color){
   this.width = width;
   this.height = height;
   
   this.top = top;
   this.left = left;
   this.color = color;
 
 
 }

   drawFlag() {
   const html = document.getElementsByTagName("html")[0];
   const div = document.createElement("div");
   
   div.style.position = "absolute";
   div.style.width = this.width + 'px';
   div.style.height = this.height + 'px';
   div.style.top = this.top + 'px';
   div.style.left = this.left + 'px';
   div.style.backgroundColor = this.color;
   html.appendChild(div);
  }

}


const newFlag = new Flag(300,50,200,200,"#FFFFF0");
const newFlag2 = new Flag(300,50,250,200,"blue");
const newFlag3 = new Flag(300,50,300,200,"red");
newFlag.drawFlag();
newFlag2.drawFlag();
newFlag3.drawFlag();



let stix = `Во глубине сибирских руд
Храните гордое терпенье,
Не пропадет ваш скорбный труд
И дум высокое стремленье.

Несчастью верная сестра,
Надежда в мрачном подземелье
Разбудит бодрость и веселье,
Придет желанная пора:

Любовь и дружество до вас
Дойдут сквозь мрачные затворы,
Как в ваши каторжные норы
Доходит мой свободный глас.

Оковы тяжкие падут,
Темницы рухнут — и свобода
Вас примет радостно у входа,
И братья меч вам отдадут.`;

var i = stix.match(/\s[в] /g);
console.log(i.length);

var word = (/меч/g);
console.log(stix.match(word));

console.log(stix.match(/ва[мс]/g));

var a = stix.match(/\s[а-яА-Я]{2}\s/g);
console.log(a.length);

var few  = (/\bh\w+/ig);

console.log(stix.match(few) );

var words = (/\b\w{6}\b/g);

console.log(stix.match(words));

let  name = stix.replace(/[бБ]/g,  "П");
console.log(name); 

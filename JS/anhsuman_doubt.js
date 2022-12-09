// 1
//  var obj={
//     myString:"can you help me ???"
//   }
//   console.log(myString);
//   function anotherFunc(s)
//   {
//     return this.myString+s
//   }
  
//   console.log(anotherFunc.call(obj,["please"]));



// 2
// var obj={
//     myString:"can you help me ???"
//   }

//   function anotherFunc(s)
//   {
//     return this.myString+s
//   }
  
//   console.log(anotherFunc.apply(obj,["please","hello"]));


// 3

// var myObj=
// {
//   name:"rashid"
// };

// var  myPrototype=
// {
//   meaning:42,
//   myFunc:function()
//   {
//     return this.name.toUpperCase();
//   }
// };
// myObj.__proto__=myPrototype;
// console.log(myObj.meaning)



// 4

// var jane = {
//     name: "Rashid",
//     describe: function () {
//       return "Person named " + this.name;
//     },
//   };
  
//   var func = jane.describe;
// var func = jane.describe.bind(jane);
//   console.log(func());
  

// Do NOT use eval()
// Executing JavaScript from a string is an BIG security risk.

// With eval(), malicious code can run inside your application without permission.

// With eval(), third-party code can see the scope of your application, 

closure

 
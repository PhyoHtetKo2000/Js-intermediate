// // class decleration

// class Person
// {
//     // key value a set လိုက်ကို property လို့ခေါ်
//     name = "Phyo Htet Ko";
//     age = 24;
    
//     // obj ထဲမှာ function ရေးတာကို method လို့ခေါ်
//     code()
//     {
//         return "Phyo can code"
//     };
// }

// // console.log(Person)

// // class ==> obj (instantiate)
// // classes ကနေ new keywords ကိုသုံးပြီး object ပြောင်း

// const person = new Person;

// console.log(person)
// console.log(person.name);
// console.log(person.age);
// console.log(person.code());

// class studets { };

// const st1 = new studets;
// st1.name = "Mg Mg";
// st1.age = 16;
// st1.major = "Bio";
// st1.learn = function ()
// {
// return this.name + " can learn bio"
// }

// console.log(st1);
// console.log(st1.learn());

// object ကို လွမ်းမိုးဖို့အတွက် constructor ကိုသုံး
// constructor ဆိုတာ special method တစ်ခု
// class ကို instance ဆောက်လိုက် တာနဲ့စပြီး အလုပ်လုပ်
// consturctor ရဲ့ parameter က class ကို obj ပြောင်းရင် vlaue ထည့်လို့ရ

// class Students
// {
//     // name,age,gender,major
//     constructor(inputName,inputAge,inputGender,inputMajor)
//     {
//         this.name = inputName;
//         this.age = inputAge;
//         this.gender = inputGender;
//         this.major = inputMajor;
    
//         // profit
//         this.pronound = this.gender === "male" ? "He" : "She";
//         this.bidthYear = 2023 - this.age
//         this.subject = ["chem", "phy", this.major === "bio" ? "bio" : "eco"];
//     }
    
//     learn()
//     {
//         return this.name + " can learn " + this.subject
//     }
//     about()
//     {
//         return `${this.nmae} is ${this.age} years old and ${this.pronound} can learn ${this.subject}`
//     }
// }

// class Monitor extends Students
// {
//     room = "Gread 1"
// }

// const ga1 = new Monitor("Zaw Zaw", 17, "male", "bio");
// console.log(ga1)



// const st1 = new Students("Mg Mg", 16,"male", "bio")
// console.log(st1);
// console.log(st1.learn());
// console.log(st1.about());

// const st2 = new Students("Hla Hla", 15, "female", "eco")
// console.log(st2);
// console.log(st2.learn());
// console.log(st2.about());


// inheritance concept အမွေဆက်ခံ extends keywords ကို အသုံးပြု

// class A
// {
//     a = 'aaa';
// };

// class B extends A
// {
//     b = "bbb";
// };

// class C extends B
// {
//     c = "ccc"
// };

// const a = new A;
// const b = new B;
// const c = new C;

// console.log(a);
// console.log(b);
// console.log(c);

// Private class
// class ရဲ့ code block ထဲမှာဘဲအလုပ်လုပ် oop ရဲ့ encapsulation concepts နဲ့သွားနွယ်
// #ခံရေး
// class A
// {
//     a = "aaa";
//     #x = "xxx";
// }
// const a = new A;
// console.log(a.a);
// console.log(a.x);

// // static class
// // instance ဆောက်စရာမလိုဘဲ တန်းခေါ်သုံးလို့ရ static keyword ကိုသုံး
// class A
// {
//     a = "aaa";
//     static b = "bbb";
// }
// console.log(A.b)

// method chainging
// class A {
//   a() {
//     console.log("this is a");
//     return this;
//     }
    
//   b() {
//     console.log("this is b");
//     return this;
//     }
    
//   c() {
//     console.log("this is c");
//     return this;
//   }
// }

// const aa = new A;

// aa.a().b().c()

// standart Build in Object
// Date

const d = new Date(2019,2,14);
console.log(d)





// console.log(d.toDateString());
// console.log(d.toTimeString());
// console.log(d.toLocaleDateString())
// console.log(d.toLocaleTimeString())

// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());

// အချိန်ပြောင်းချင်ရင် set method ကို သုံး

// အခုကနေနာရီ ၃၀၀ ကြာရင် ဘယ်နေ့ဖစ်နိုင်မလဲ
d.setHours(d.getHours() + 300);
console.log(d);

// 4လတစ်ကြိမ်သွေးလူရမယ် 
d.setMonth(d.getMonth()+4);
console.log(d)




/*
function mobile(mdno,pri){
    return{
        model:mdno,
        rate:pri,
        price:function(){
            return this.rate;
        }
    };
}

var samsung=mobile("Samsung",1500);
var nokia=mobile("Nokia","5000");
nokia.ram="3GB";
var mi=mobile("Mi",7000);

console.log(mi.model+" has "+mi.price());
console.log(samsung.price());
console.log(nokia.ram+"  "+nokia.model+" "+nokia.price());

*/

/*
function mobile(mdno,pri){

        this.model:mdno,
        this.rate:pri,

}

var samsung=new mobile("Galaxy");
var nokia=new mobile("3310");

samsung.model();
nokia.model();
*/

/*
let circle={
    radius:1,
    draw:function(){
        console.log("Radius of the circle is "+2*3.14*this.radius);
    }
}


/*   Factory function  */
/*
function createCircle(radius){
    return{
        radius,
        draw:function(){
            console.log("Radius of the circle is "+(radius*radius*3.14)); 
        }
    }
}

    var square=createCircle(12);
    square.draw();


   /* Constructor  */
/*
   function circle(radius){
       this.radius=radius;
       this.draw=function(){
           console.log("Circumference of the circle "+2*3.14*this.radius);
       }
   }

   var trai=new circle()
   */



/*

var Mobile=function(model_no){
    this.model=model_no;
    this.price=3000;
}

var samsung=new Mobile("Galaxy");
var nokia=new Mobile("3310");
 Mobile.prototype.color=function(){
     return "black";
 };
console.log(samsung.color());
console.log(nokia);


*/

/*
var Mobile=function(model_no){
    this.model=model_no;
    this.price=3000;
}

var samsung=new Mobile("Galaxy");
for(let key in samsung){
    console.log(key);
}

*/

/*
var b={};

console.log(Object.prototype);
console.log(Array.prototype);
console.log(b);
console.log(null);
console.log("Hello Abhishek");
*/


/*

//Super class
   var Mobile=function(){
      
   }

   //Prototype of Mobile
   Mobile.prototype.getModel=function(){
       return this.model;
   };


   //Sub class
   var Samsung=function(model,price){
       this.model=model;
       this.price=price;
   }

   //Sub class

   var Lenovo=function(model){
    this.model=model;
    }
    var Redmi=function(){

    }

    var Sony=function(){

    };

    //Creating Inheritance Function

    function Inherit(child,parent){

    child.prototype=Object.create(parent.prototype);

    child.prototype.constructor=child;

    }

    //Inheritance
    Inherit(Samsung,Mobile);
    Inherit(Lenovo,Mobile);
    Inherit(Redmi,Mobile);
    Inherit(Sony,Mobile)


    //Samsung Protoype function
    Samsung.prototype.getPrice=function(){
        return this.price;
    }

    Redmi.prototype.getram=function(){
        return "3GB";
    }
    
    var Galaxy=new Samsung("Galaxy",6000);
    console.log(Galaxy);
    console.log(Galaxy.getModel())

    var Core=new Lenovo("Prime");

    var Note=new Redmi()
    console.log(Core);
    console.log(Galaxy.getPrice());
    console.log(Note.getram());

*/


/*
var mobile=function(model){
    this.model=model;
}

mobile.prototype.getModel=function(){
    return this.mdoel;
}



var Samsung=function(price){
    mobile.call(this);
    this.price=price;
}

//Inheritance code

Samsung.prototype=Object.create(mobile.prototype);
Samsung.prototype.constructor=Samsung;

//Creating Object from Samsung

var Galaxy=new Samsung("Galaxy");
console.log(Galaxy.getModel());

*/


/*
//Super Class
var Mobile=function(){

}

//Prototype Member
Mobile.prototype.show=function(){
    return "Super Class Method";
}

//Sub class
var samsung=function(){

}

//function for Inheriting Sub class form Mobile

function Inherit(child,parent){
    child.prototype=Object.create(parent.prototype); //Inheriting the values from prototype
    child.prototype.constructor = child; //reseting constuctor
}

Inherit(samsung,Mobile);

samsung.prototype.show=function(){
    return "Sub Class method";
}


//Creating Object of sub class Samsung

var sam=new samsung();

console.log(sam.show());

*/



//  Multi-Level Inheritance

/*
//Super class

var Mobile=function(){    //
    this.a=10;
}


//prototype of Mobile
Mobile.prototype.z=30;

var samsung =function(){
    this.b=20;
}

var Galaxy= function(){
    samsung.call(this);
    this.c=100;
}

//Prototype  Inheritance
    samsung.prototype=Object.create(Mobile.prototype);
    samsung.prototype.constuctor=samsung;

    Galaxy.prototype=Object.create(samsung.prototype);
    Galaxy.prototype.constructor=Galaxy;


    var m=new Mobile();   //Object Instatiate Mobile
    var s=new samsung();  //Object Instatiate samsung
    var g=new Galaxy();  //Object Instatiate Galaxy

    console.log(g.a);

*/

/*      Composition or Mixin   */
/*
var eating ={
    eat:function(){
        return "I can Eat ";
    }
};

var walking ={
    walk:function(){
        return "I can Walk ";
    }
};

var talking ={
    talk:function(){
        return "I can Talk";
    }
};

var Rahul= Object.assign({},eating,walking,talking)
console.log(Rahul.eat());

var Robot=Object.assign({},walking,talking);
console.log(Robot.walk());
*/

//Class Declaration

/*
var Mobile=class{
    constructor(model,color){
        this.model=model,
        this.color=color
    }
    show(){
        return this.model+" Price Rs-"+this.color;
    }
    
};

var nokia=new Mobile("Galaxy","Red Cherry");

console.log(nokia.show(500));
*/

/*
class Father{
    constructor(money){
        this.fmoney=money;
    }
    showFmoney(){
        return this.fmoney;
    }
}

class Son extends Father{
    showSmoney(){
        return "Son's Money";
    }
}

var s=new Son(1000);

console.log(s.showFmoney());
console.log(s.showSmoney());

*/







































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







var b={};

console.log(Object.prototype);
console.log(Array.prototype);
console.log(b);
console.log(null);






































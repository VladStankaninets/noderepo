//var Child = {
//    myString: "Hello world!"
//};

var Parent = {
    meaningOfLife: 42,
    myFunc: function(){
        return this.myString.toLowerCase()
    }
};

var Child = Object.create(Parent);
Child.meaningOfLife; // = 42;
Child.myString = "Hello world!";
console.log(Child);
console.log(Parent);
Child.myFunc();

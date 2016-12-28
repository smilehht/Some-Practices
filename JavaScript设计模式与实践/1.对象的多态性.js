function makeSound(animal){
	animal.sound();
}

//鸭子对象
function Duck(){}

Dock.prototype.sound=function(){
	console.log("嘎嘎！");
}

//小狗对象
function Dog(){}

Dog.prototype=function(){
	console.log("汪汪！");
}


//小猫对象
function Cat(){}
Cat.prototype.sound=function(){
	console.log("喵喵！");
}
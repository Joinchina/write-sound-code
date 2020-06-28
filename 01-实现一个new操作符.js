//new操作符创建了一个用户自定义的对象类型的实例或具有构造函数的内置对象的实例，共进行了4操作
//1：声明一个空的javascript对象
//2：链接该对象到函数的原型
//3：将声明的对象作为this的上下文
//4：如果该函数没有返回对象则返回this

function myNew(fn,...args){
    const obj={};
    obj.__proto__=fn.prototype;
    const res=fn.call(obj,...args);
    return typeof res==='object'?res:obj;
}

function Test(name, age) {
    this.name = name
    this.age = age
  }
  Test.prototype.sayName = function () {
      console.log(this.name)
  }
  const a = myNew(Test, 'yck', 26)
  console.log(a.name) // 'yck'
  console.log(a.age) // 26
  a.sayName() // 'yck'

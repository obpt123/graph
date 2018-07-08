import $ from 'jquery'

export default class Student
{
    constructor(name='zhangsan')
    {
        this.name=name;
    }
    sayName() {
        console.log(this.name);    
    }
    appendTo(domId){
        $('#'+domId).html(this.name);
    }
}
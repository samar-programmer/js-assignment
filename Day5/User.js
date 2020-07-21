class User{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.coins=0
        this.courses = [];

    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
        
    }

    logout(){
        console.log(`${this.name} has logged out`);
        return this;

    }

    
}

let user1 = new User('sasikumar',22,'programmer7@gmail.com');
let user2 = new User('sashdfr',22,'programmer7@gmail.com');
user1.login();
user1.logout();

class Moderator extends User{
    constructor(name,age,email,coins){
        super(name,age,email);
        this.coins = coins;
    }

    addCoins(){
        this.coins++;
        console.log(`${this.name} has ${this.coins} coins`);
    }
    delCoins(){
        this.coins--;
        console.log(`${this.name} has ${this.coins} coins`);
    }
}

let adc=new Moderator('samar',23,'hgadhag@gmail.com',10);
adc.addCoins();
adc.addCoins();
adc.delCoins();
adc.delCoins();

 class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }
 }

 let admin = new Admin('kings',19,'sjhjl@;.com',10);
 admin.addCourse(user1,'Javascript');
class User{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.coins=0
        this.courses = [];

    }

    login(users){
        console.log(`${users.name} has logged in`);
        return this;
        
    }

    logout(users){
        console.log(`${users.name} has logged out`);
        return this;

    }

    
}

console.log('individual craete user');
let user1 = new User('sasikumar',22,'programmer7@gmail.com');
console.log(user1);
user1.login(user1);
user1.logout(user1);

class Moderator extends User{
    addCoins(users,coins){
        users.coins=coins;
        console.log(`Moderator and admin add ${users.coins}coins to the  ${users.name}`);
        console.log(users)
    }
    delCoins(users){
        users.coins=0;
        console.log(`Moderator and admin delete coins to the  ${users.name}`);
        console.log(users)
    }
}

console.log('Moderator can create user')
let user2=new Moderator('samar',23,'hgadhag@gmail.com');
let mod=new Moderator();
mod.login(user2);
mod.addCoins(user2,50);
mod.delCoins(user2);
mod.logout(user2);


 class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }
    delParticularcourse(user,course){
        user.courses.filter(el=>el!=course);
        console.log(`Admin delete Particular Course of ${course}`);
        console.log(user);
    }
 }
 console.log('admin create user')
 let user3 = new Admin('kings',19,'sjhjl@;.com');
 console.log(user3);
 ad=new Admin();
 ad.login(user3);
 ad.addCoins(user3,20);
 ad.delCoins(user3);
 ad.addCourse(user1,'Javascript');
 ad.addCourse(user1,'python');
 ad.delParticularcourse(user3,'python');
 ad.logout(user3);
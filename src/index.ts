// const newName:string = "Aatif"


// type User={
//     name: string,
//     age : number
// }

// const  defn : User = {
//     name: "jk",
//     age :15
// }


// classes 


// class User {
//     email:string
//     age : number
//     readonly id: number

//     constructor(email: string , age : number, id:number){
//         this.email = email;
//         this.age = age 
//         this.id = id
//     }
// }

// const Ak = new User("Md", 2,101101)


//  private public



// class User {
//     // public email:string
//     // private age : number 
//     // readonly id: number

//     constructor(public email: string ,private age : number, readonly id:number){
//         this.email = email;
//         this.age = age 
//         this.id = id

//     }
// }

// const Ak = new User("Md", 25, 101101)



// getters and setters

//  access modifiers  PROTECTED
class User {
  
    protected _count = 2

    constructor(public email: string ,private age : number, readonly id:number){
        this.email = email;
        this.age = age 
        this.id = id

    }


    private deleteTokens(){
        console.log('Token deleted')
    }

    get getApples(): string{
        return `${this.id} is buying Apples`
    }

    get countNum(): number{
        return this._count
    }

    set countNum(begin){
        if( begin <=1){
            throw new Error("Hehe")
        }
        this.countNum = begin
    }

}




const Ak = new User("Md", 25, 101101)



// Ak.deleteTokens()

//  acquires all properties except private
//  can be used in that class and the class which inherits this class

class SubUser extends User {
    isfamily :boolean = true 
    changeCount(){
        this._count = 4
    }


}













//  interface



interface TakePic {
    cameraMod :string
    filters : string

}

interface Story{
    create(): void
}




class Insta implements TakePic{
    constructor(public cameraMod:string , public filters: string)
    {}

}

class Yt implements TakePic , Story{
    constructor(
        public cameraMod:string ,
        public filters: string,
         burst:number ,
         public short:number
    )
    {}

    create(): void {
        console.log("Strory created")
    }
}
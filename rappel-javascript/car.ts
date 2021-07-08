class Car {
    private model:String
    private price: Number
    private isNew: Boolean
    constructor(private _model:String, private _price:Number, private _isNew:boolean) {
        this.model = _model
        this.price = _price
        this.isNew = _isNew
    }

    displayCar():void {
        console.log(
            `Model : ${this.model}, price : ${this.price}, isNew : ${this.isNew}`
        )
    }
}
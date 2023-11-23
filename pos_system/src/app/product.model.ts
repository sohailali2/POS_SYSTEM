export class Productlist {
    id: number;
    name: string;
    price: number;
    color: string;
    category: string;
    description: string;
    image: string;
    crossicon: string;
    quantity?: number;
    total?: number;
    discount?: number;
    // subtotal?: number;
    // totalItems?: number;
    constructor() {
        this.id = 1;
        this.price = 19;
        this.name = "";
        this.color = "";
        this.category = "";
        this.description = "";
        this.image = "";
        this.crossicon = "";

    }

}
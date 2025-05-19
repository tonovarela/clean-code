type Size = 'XS' | 'S' | 'M' | 'L' | 'XL';

class Product {

    constructor(public name: string,
                public price :  number = 0,
                public size : Size = 'M'
            ){}
    isProductReady() : boolean {
        for (const key in this) {
            switch(typeof this[key]) {
                case 'string':
                    if (this[key].length == 0) {
                        throw new Error(`${key} is empty`);
                    }
                    break;
                case 'number':
                    if (this[key] <= 0) {
                        throw new Error(`${key} is zero`);
                    }               
                    break;
                case 'boolean':
                    if (this[key] == null) {
                        throw new Error(`${key} is null`);
                    }
                    break;                
            }            
        }
        return true;        
    }
    toString() {        
       if (!this.isProductReady()) {
            return;
        }
        return `${this.name} (${this.size}) $${this.price}`;        
    }
}

(()=>{

    const bluePlants = new Product("Varela", 0, 'XL');
    console.log(bluePlants.toString());
//    const redPlants = new Product("red plants", 100, 'M');
    //console.log(redPlants.toString());

})();
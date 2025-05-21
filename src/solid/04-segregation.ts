
interface Bird {    
    eat(): void;    
    swim(): void;
}

interface FlyingBird  {
    fly(): void;
}
interface RunningBird {
    run(): void;
}   


class Tucan implements Bird ,FlyingBird,RunningBird{
    run(): void {
        throw new Error("Method not implemented.");
    }
    swim(): void {
        throw new Error("Method not implemented.");
    }
    public fly(): void {
        console.log('Tucan is flying');
    }
    public eat(): void {
        console.log('Tucan is eating');
    }
}


class Hummingbird implements Bird, FlyingBird {
    swim(): void {
        throw new Error("Method not implemented.");
    }
    public fly(): void {
        console.log('Hummingbird is flying');
    }
    public eat(): void {
        console.log('Hummingbird is eating');
    }
    
}

class Ostrich  implements Bird {
    swim(): void {
     console.log('Ostrich is swimming');
    }

    public run(): void {
        console.log('Ostrich is running');
    }
    public eat(): void {
        console.log('Ostrich is eating');
    }
    
    
}


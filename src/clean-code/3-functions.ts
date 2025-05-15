(() => {

    // función para obtener información de una película por Id
    function getAllMoviesById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getAllMovieCast( movieId: string ) {
        console.log({ id: movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getBioActor( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crear una película
    interface Movie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }

    function movie(movie: Movie) {
        const { title, description, rating, cast } = movie;
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    async function  createActor( fullName: string, birthdate: Date ): Promise<boolean> {        
        // tarea asincrona para verificar nombre
         //const exist = await actorExists( fullName );        
        if ( fullName === 'fernando' ) return false;
        console.log('Crear actor');
        return true;        
    }
    


})();






(() => {

    interface Product {
        id: number;
        name: string;
    }



    class MailerService {

        private masterEmail: string = "tonovarela@live.com";
        private listEmails: string[] = [];
        sendEmail(emailList: string[], template: 'to-clients' | 'to-admin') {
            this.listEmails = emailList;
            console.log(`Enviando correo a los clientes con el template ${template}`);
        }
    }


    class ProductService {
        private products: Product[] = [];

        constructor() {
            this.products = [];
        }

        addProduct(product: Product) {
            this.products.push(product);
            console.log('Producto agregado', product);
        }

        getProduct(id: number) {
            const product = this.products.find(p => p.id === id);
            if (!product) {
                throw new Error('Producto no encontrado');
            }
            return product;
        }

        getProducts() {
            return this.products;
        }
    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailerService: MailerService;
        constructor(productService: ProductService,
            mailerService: MailerService) {
            this.productService = productService;
            this.mailerService = mailerService;
        }

        loadProduct(id: number) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.productService.getProduct(id);
            //console.log('Producto: ', { id, name: 'OLED Tv' });
        }

        saveProduct(product: Product) {
            // Realiza una petición para salvar en base de datos 
            this.productService.addProduct(product);
            //console.log('Guardando en base de datos', product);
        }

        notifyClients() {
            this.mailerService.sendEmail(["tonovarela@live.com"], 'to-clients');
            //console.log('Enviando correo a los clientes');
        }


    }


    class CartBloc {
        //private itemsInCart: Object[] = [];
        onAddToCart(productId: number) {
            console.log('Agregando al carrito ', productId);
        }

    }



    const mailerService = new MailerService();
    const productService = new ProductService();
    const productBloc = new ProductBloc(productService, mailerService);
    const cartBloc = new CartBloc();

    
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.loadProduct(10);
    productBloc.notifyClients();
    //productBloc.onAddToCart(10);
    cartBloc.onAddToCart(10);








})();
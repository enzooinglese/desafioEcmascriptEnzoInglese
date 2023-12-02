class Product {
    constructor (title, description,price, thumbnail, code, stock, id){
        this.id = id
		this.title = title
		this.description = description
		this.price = price
		this. thumbnail = thumbnail
		this.code = code
		this.stock = stock
    }
}
class ProductManager {
	constructor(){
		this.products = []
		this.idCount = 1
	}
	idIncrement(){
		return `${this.idCount++}`
	}
	
	codeUnico(code){
		return !this.products.some(Product => Product.code === code)
	}

	addProducts(title,description,price,thumbnail,code,stock){
		const iD = this.idIncrement()
		if(title && description && price && thumbnail && code && stock){
			if(this.codeUnico(code)){
				const newProduct = new Product(
					title,
					description,
					price,
					thumbnail,
					code,
					stock,
					iD
				)
				this.products.push(newProduct)
				console.log("Producto agregado: ", newProduct)
			}else{
				console.log("Error: Mismo codigo creado")
			}
			}else{
				console.log("Error: Faltó algun dato")
			}
	}
	getProducts(){
		return this.products
	}
	getProductsById(id){
		const buscarProductoPorId = this.products.find(Product => Product.id === id)
		if(buscarProductoPorId){
			console.log(`Buscó un producto con el siguiente id: ${id}`)
			return buscarProductoPorId
		}else{
			console.log("Error. Not Found")
			return undefined
		}
		
	}
}


productManager = new ProductManager()

	productManager.addProducts(
		"producto prueba",
		"Este es un producto prueba",
		200,
		"sin imagen",
		"abc123",
		25
		)
	productManager.addProducts(
		"producto prueba 2",
		"Este es un producto prueba 2",
		200,
		"sin imagen",
		"abc124",
		25
		)

const todosLosProductos = productManager.getProducts()
console.log(todosLosProductos)

const productById = productManager.getProductsById("1")
console.log(productById)
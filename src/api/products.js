export const getProductsRequest = async ()=>{
    try {
        const data = await fetch("https://api.escuelajs.co/api/v1/products")
        return await data.json()
    } catch (error) {
        console.log(error)
    }
}
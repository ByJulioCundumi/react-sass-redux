export const getProductsRequest = async ()=>{
    try {
        const data = await fetch("https://64e24a59ab0037358818e718.mockapi.io/api/products")
        return await data.json()
    } catch (error) {
        console.log(error)
    }
}
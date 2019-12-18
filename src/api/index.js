
import ajax from './ajax'
// export function reqGetAllProduct() {
//    return ajax('/demo/getAllProduct')
// }
export const reqGetAllProduct=( )=> ajax('/demo/getAllProduct')

export const reqGetAllProductCases=( )=> ajax('/demo/getAllProductCase')

export const reqGetAllNews=( )=> ajax('/demo/getAllNews')

export const reqGetProduct=(_id )=> ajax('/demo/getProduct',_id)

export const reqAddProduct=(customer)=>ajax('/demo/AddProduct',customer,'POST')

export const reqGetUser=( )=> ajax('/demo/getUser')
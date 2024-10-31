import HomePage from "../page/HomePage/HomePage"
import NotFoundPage from "../page/NotFoundPage/NotFoundPage"
import OrderPage from "../page/OrderPage/OrderPage"
import ProductsPage from "../page/ProductsPage/ProductsPage"

export const routes =[
    {
        path: '/',
        page: HomePage,
        showHeader: true,
        showMenu: true
    },
    {
        path: '/gioithieu',
        page: HomePage,
        showHeader: true,
        showMenu: true
    },
    {
        path: '/products',
        page: ProductsPage,
        showHeader: true,
        showMenu: true
    },
    {
        path: '/tintuc',
        page: HomePage,
        showHeader: true,
        showMenu: true
    },
    {
        path: '/lienhe',
        page: HomePage,
        showHeader: true,
        showMenu: true
    },
    {
        path: '/cauhoithuonggap',
        page:ProductsPage,
        showHeader: true,
        showMenu: true
    },
    {
        path: '/hethongcuahang',
        page:ProductsPage,
        showHeader: true,
        showMenu: true
    },
    {
        path: '/datban',
        page:OrderPage,
        showHeader: true,
        showMenu: true
    },
    
    {
        path: '*',
        page:NotFoundPage
    }
    
]
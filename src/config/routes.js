import Admin from '../components/Admin/Admin.jsx'
import Category from '../containers/category/Category.jsx'
import Product from '../containers/product/Product.jsx'
import Bar from '../components/charts/bar/Bar.jsx'
import Line from '../components/charts/line/Line.jsx'
import Pie from '../components/charts/pie/Pie.jsx'
import AddUpdate from '../containers/product/add-update/AddUpdate'
import Role from '../containers/role/Role'
import User from '../containers/user/User'

export default [
    {
        exact:true,
        path:'/',
        component:Admin
    },
    {
        exact:true,
        path:'/category',
        component:Category
    },
    {
        exact:true,
        path:'/product',
        component:Product
    },
    ,{
        exact:true,
        path:'/product/addupdate',
        component:AddUpdate
    },
    {
        exact:true,
        path:'/user',
        component:User
    },
    {
        exact:true,
        path:'/role',
        component:Role
    },
    {
        exact:true,
        path:'/charts/bar',
        component:Bar
    },
    {
        exact:true,
        path:'/charts/line',
        component:Line
    },
    {
        exact:true,
        path:'/charts/pie',
        component:Pie
    },
    {
        exact:true,
        path:'/role',
        component:Role
    },
    {
        exact:true,
        path:'/user',
        component:User
    }
]
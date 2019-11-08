import Admin from '../components/Admin/Admin.jsx'
import Category from '../containers/category/Category.jsx'
import Product from '../components/product/Product.jsx'
import User from '../components/user/User.jsx'
import Role from '../components/role/Role.jsx'
import Bar from '../components/charts/bar/Bar.jsx'
import Line from '../components/charts/line/Line.jsx'
import Pie from '../components/charts/pie/Pie.jsx'


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
    }
]
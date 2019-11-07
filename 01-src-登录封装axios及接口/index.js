//引入react 
import React from 'react'
 //引入ReactDOM
 import ReactDOM from 'react-dom'

//引入store
import store from './redux/store'
//引入react-redux
import {Provider} from 'react-redux'

 //引入App组件
 import App from './App.jsx'
 //引入重置的样式文件
 import './assets/css/reset.css'
 //渲染组件
 ReactDOM.render((
     <Provider store={store}>
         <App/>
     </Provider>
 ),document.getElementById('root'))
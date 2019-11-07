import React, { Component } from 'react';
//引入样式
import './Login.less'

import { Form, Icon, Input, Button ,message } from 'antd';
//引入connect 
import {connect} from 'react-redux'
//引入action
import {saveUser} from '../../redux/actions'
//引入图片
import logo from './images/logo.png'

//引入接口文件
import {reqLogin} from '../../api'

const Item = Form.Item

//装饰器的使用
@connect(null,{
    saveUser
})
@Form.create()
class Login extends Component {
    //组止事件的默认行为
    handleSubmit = e => {
        e.preventDefault()  
        this.props.form.validateFields(async (error, values) => {
            //console.log(values) values是一个对象--可以直接获取表单的数据
              //错误
            if (!error) {
                // message.success('表单验证成功')
                const {username,password} = values
                const result = await reqLogin(username,password)
                //判断是否登录成功
                if(result.status===0){
                    //成功了
                    message.success('登录成功')
                    this.props.saveUser(result.data )
                    //跳转到首页
                    this.props.history.replace('/')
                }else{
                    message.error(result.msg)
                }

                //发送异步请求,获取用户信息,保存
                 /* axios.post('http://localhost:3000/api/login',{username,password})
                .then(({data})=>{
                    console.log(data.data)
                    //判断发送的请求是否是成功的
                    console.log(data.status)
                    if(data.status===0){
                        //请求成功了.提示信息:登录成功
                        message.success('登录成功')
                        //保存用户信息
                        this.props.saveUser(data.data)
                        //跳转界面
                        
                    }else{
                        //验证失败了
                        message.error(data.msg)
                        this.props.form.resetFields(['password'])
                    }
                }) 
                .catch((error)=>{
                    message.error('请求失败'+error)
                })
 */
            }
            /* else{
                message.error('表单验证成功失败')
            } */
          });    
    }
    //表单的验证
    validator=(rule, value, callback)=>{
        //做密码验证
        if(!value){
            callback('必须输入密码')//用来做提示的
        }else if(value.length<4){
            callback('必须大于3位')
        }else if(value.length>=12){
            callback('必须小于12位')
        }else if(!/^[0-9a-zA-Z]+$/.test(value)){
            callback('只能输入字母/数字/下划线')
        }else {
            callback()
        }
    }
    render() {
        const { getFieldDecorator} = this.props.form;
        return (
            <div className='login'>
                <div className="login-header">
                    <img src={logo} alt={logo}/>
                    <h1>React项目:后台管理系统</h1>
                </div>
                <div className="login-content">
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
        <Item>
         {  
             //用户名,必须是大于4位,必须是小于12位,用户名只能是数字/字母/下划线
             getFieldDecorator('username',{
                rules: [
                    { required: true, message: '请输入用户名' },
                    { min: 4, message: '用户名最小是4位' },
                    { max: 12, message: '用户名最大是12位' },
                    { pattern:/^[0-9a-zA-Z_]+$/,message:'只能输入字母/数字/下划线'}
            ]
             })(
                <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
              />
             )
         }
            
    
        </Item>
        <Item>
            {
                getFieldDecorator('password',{
                    // initialValue:'admin',//初始化密码
                    rules: [
                    {validator:this.validator}
                ]
                 })(
                    <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="密码"
                  />
                 )
            }
            
          
        </Item>
        <Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Item>
      </Form>
    </div>   
</div>
        );
    }
}
// export default Form.create()(Login)
// export default connect(状态数据,action)(Form.create()(Login))

export default Login;
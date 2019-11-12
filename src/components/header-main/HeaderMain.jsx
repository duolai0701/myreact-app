import React, { Component } from 'react';
import { Layout, Button, Icon, Modal } from 'antd'
//引入样式
import './HeaderMain.less'
//引入screenfull的插件包
import screenfull from 'screenfull'
//引入实现国际化的翻译的相关的包,高阶组件
import {withTranslation,getI18n} from 'react-i18next';
//引入connect高阶组件
import {connect} from 'react-redux'
//因为要写退出操作,引入action中的方法
import {removeUser} from '../../redux/actions'
//引入dayjs格式化日期的包
import dayjs from 'dayjs'

const { Header } = Layout
//当前组件实例对象中的props中就有username属性
@connect((state)=>({username:state.user.user.username,title:state.title}),{removeUser})
@withTranslation()
class HeaderMain extends Component {
    state = {
        isScreen: false,
        isEnglish:getI18n().language==='en',//自动判断语言类型,设置状态,当页面刷新或者关闭页面再打开的时候回到的还是原来改变之前的模样
        time:dayjs().format('YYYY-MM-DD hh:mm:ss')  
    }
    //切换全屏效果
    changeScreen = () => {
        if (screenfull.isEnabled) {
            screenfull.toggle();
        }
    }
    //全屏的change事件回调
        screenChange = () => {
            const isScreen = !this.state.isScreen
           
            //切换数据状态
            this.setState({
                isScreen
            })
        }

    //界面渲染完毕的生命周期函数
    componentDidMount() {
        screenfull.on('change',this.screenChange )
        this.timerId=setInterval(()=>{
            this.setState({
                time:dayjs().format('YYYY-MM-DD hh:mm:ss') 
            })
        },1000)
    }
    //组件卸载的生命周期函数
    componentWillUnmount(){
        //清除定时器
        clearInterval(this.timerId)
         screenfull.off('change',this.screenChange)
    }
    //国际化
    changeLanguage=()=>{
        const isEnglish = !this.state.isEnglish
        //进行翻译(改变当前页面的语言方式是en还是zh-CN)
        this.props.i18n.changeLanguage(isEnglish?'en':'zh-CN')
        // console.log(this.props.i18n.language)
        this.setState({
            isEnglish
        })
    }
    //退出操作
    loginOut=()=>{
        Modal.confirm({
            title:this.state.isEnglish?'Are you sure to quit?':'你确定退出吗?',
            okText:this.state.isEnglish?'Yes':'确定',
            cancelText:this.state.isEnglish?'No':'取消',
            onOk:()=>{
            // console.log(this.props)
            this.props.removeUser()//要想让this指向当前组件的实例对象,那就要写成箭头函数
              }
        })
    }
    render() {
        const { isScreen,isEnglish,time} = this.state
        //从props中取出
        const {username,title,t} = this.props
        return (
            <Header style={{ background: '#fff', padding: 0 }} className='header-main'>
                <div className='header-top'>
                    <Button size='small' onClick={this.changeScreen}><Icon type={isScreen ? 'fullscreen' : 'fullscreen-exit'} /></Button>
                    <Button size='small' className='header-english' onClick={this.changeLanguage} >
                       {isEnglish?'中文':'English'}
                    </Button>
                    <span>{this.props.t('welcome')},{username}</span>
                    <Button type='link' onClick={this.loginOut} >{this.props.t('exit')}</Button>
                </div>
                <div className='header-content'>
                    <div className='header-left'>{t(title)}</div>
                    <div className='header-right'>{time}</div>
                </div>
            </Header>
        );
    }
}

export default HeaderMain;



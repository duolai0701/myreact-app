import React, { Component } from 'react';
import { Form, Input} from 'antd'
//引入prop-types
import PropTypes from 'prop-types'

@Form.create()
class AddUpdateCategory extends Component {
    /* //初始化的时候进行调用
    constructor (props){
        super(props)
        //调用父级组件中的回调函数,并传入form对象(父级组件可以使用form对象及所有的相关的方法了)
        // this.props.setForm(this.props.form)
    } */
    static propTypes = {
        setForm:PropTypes.func.isRequired,
        categoryName:PropTypes.string
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        // const {categoryName} = this.props 
        this.props.setForm(this.props.form)
        return (
            <Form>
                <Form.Item label='品类名称'>
                    {getFieldDecorator('categoryName', {
                        initialValue: this.props.categoryName||'',//初始化数据的设置
                        rules: [{ required: true, message: '必须输入分类内容' }],
                    })(
                        <Input placeholder='请输入分类名称'></Input>
                    )}

                </Form.Item>
            </Form>
        );
    }
}

export default AddUpdateCategory;
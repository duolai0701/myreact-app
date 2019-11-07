import React, { Component } from 'react';
//引入组件
import { Card, Table, Button, Icon } from 'antd'
//引入样式
import './category.less'

class category extends Component {


    render() {
        const columns = [
            {
                title: '品类名称',//第一列中的第一个要显示的内容
                dataIndex: 'name',//用来具体显示哪个(data中键的数据)
                className: 'showStyle',
                render: text => <h1>{text}</h1>,
            },
            {
                title: '操作',
                dataIndex: 'content',
                className: 'showStyle2',
                render: text => {
                    return (
                        <div>
                            <Button type='link'>修改分类</Button>
                            <Button type='link'>修改分类</Button>
                        </div>
                    )

                }
            }
        ]

        const data = [
            {
                key: '1',
                name: '家居生活',
                content: '修改分类 删除分类'
            },
            {
                key: '2',
                name: '家居生活',
                content: '修改分类 删除分类'
            },
            {
                key: '3',
                name: '家居生活',
                content: '修改分类 删除分类'
            },
            {
                key: '4',
                name: '家居生活',
                content: '修改分类 删除分类'
            },
            {
                key: '5',
                name: '家居生活',
                content: '修改分类 删除分类'
            },
            {
                key: '6',
                name: '家居生活',
                content: '修改分类 删除分类'
            },
            {
                key: '7',
                name: '家居生活',
                content: '修改分类 删除分类'
            },
           
        ]
        return (
            <Card title="分类列表" extra={<Button type='primary'><Icon type="plus" />分类列表</Button>} >
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    pagination={{
                        pageSizeOptions:[
                            '3',
                            '6',
                            '9',
                            '12'
                        ],
                        showSizeChanger:true,
                        showQuickJumper:true,
                        defaultPageSize:3
                    }}
                />
            </Card>
        );
    }
}

export default category;
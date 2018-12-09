export default {
  name: 'menu',
  list: [{
      id: 1,
      name: '处理中心'
    }, {
      id: 2,
      name: '我的工作台',
      children: [{
        id: 201,
        name: '选项1'
      }, {
        id: 202,
        name: '选项2'
      }, {
        id: 203,
        name: '选项3'
      }, {
        id: 204,
        name: '选项4',
        children: [{
          id: 204001,
          name: '选项1'
        }, {
          id: 204002,
          name: '选项1'
        }, {
          id: 204003,
          name: '选项1'
        }]
      }]
    },
    {
      id: 3,
      name: '消息中心'
    },
    {
      id: 4,
      name: '订单管理'
    }
  ]

};
const proxy = {};

proxy['GET /api/activities'] = (req, res) => {
  res.json({
    "code": 0,
    "message": "success",
    "data": [
        {
            "id": "trend-1",
            "updatedAt": "2020-01-23T08:08:45.815Z",
            "user": {
                "name": "曲丽丽",
                "avatar": "antdpro/BiazfanxmamNRoxxVxka.png"
            },
            "group": {
                "name": "高逼格设计天团",
                "link": "http://github.com/"
            },
            "project": {
                "name": "六月迭代",
                "link": "http://github.com/"
            },
            "template": "在 @{group} 新建项目 @{project}"
        },
        {
            "id": "trend-2",
            "updatedAt": "2020-01-23T08:08:45.815Z",
            "user": {
                "name": "付小小",
                "avatar": "antdpro/cnrhVkzwxjPwAaCfPbdc.png"
            },
            "group": {
                "name": "高逼格设计天团",
                "link": "http://github.com/"
            },
            "project": {
                "name": "六月迭代",
                "link": "http://github.com/"
            },
            "template": "在 @{group} 新建项目 @{project}"
        },
        {
            "id": "trend-3",
            "updatedAt": "2020-01-23T08:08:45.815Z",
            "user": {
                "name": "林东东",
                "avatar": "antdpro/gaOngJwsRYRaVAuXXcmB.png"
            },
            "group": {
                "name": "中二少女团",
                "link": "http://github.com/"
            },
            "project": {
                "name": "六月迭代",
                "link": "http://github.com/"
            },
            "template": "在 @{group} 新建项目 @{project}"
        },
        {
            "id": "trend-4",
            "updatedAt": "2020-01-23T08:08:45.815Z",
            "user": {
                "name": "周星星",
                "avatar": "antdpro/WhxKECPNujWoWEFNdnJE.png"
            },
            "project": {
                "name": "5 月日常迭代",
                "link": "http://github.com/"
            },
            "template": "将 @{project} 更新至已发布状态"
        },
        {
            "id": "trend-5",
            "updatedAt": "2020-01-23T08:08:45.815Z",
            "user": {
                "name": "朱偏右",
                "avatar": "antdpro/ubnKSIfAJTxIgXOKlciN.png"
            },
            "project": {
                "name": "工程效能",
                "link": "http://github.com/"
            },
            "comment": {
                "name": "留言",
                "link": "http://github.com/"
            },
            "template": "在 @{project} 发布了 @{comment}"
        },
        {
            "id": "trend-6",
            "updatedAt": "2020-01-23T08:08:45.815Z",
            "user": {
                "name": "乐哥",
                "avatar": "antdpro/jZUIxmJycoymBprLOUbT.png"
            },
            "group": {
                "name": "程序员日常",
                "link": "http://github.com/"
            },
            "project": {
                "name": "品牌迭代",
                "link": "http://github.com/"
            },
            "template": "在 @{group} 新建项目 @{project}"
        }
    ]
  });
}

module.exports = proxy;
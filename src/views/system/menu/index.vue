<script setup lang="ts">
import { ref } from "vue";
import { Delete, EditPen, Plus } from "@element-plus/icons-vue";
const searchParam = ref({});
const searchCols = ref([
  { el: "input", label: "菜单名称", key: "keyword" },
  {
    el: "commonSelect",
    label: "状态",
    key: "orderStatus",
    clearable: true,
    selectType: "PAY_STATUS"
  }
]);
const columns = ref([
  {
    label: "菜单名称",
    prop: "username",
    width: 150,
    isShow: true,
    align: "center"
  },
  {
    label: "图标",
    prop: "avatar",
    width: 150,
    isShow: true,
    align: "center"
  },
  {
    label: "排序",
    isShow: true,
    prop: "rank"
  },
  {
    label: "菜单路径",
    prop: "path",
    width: 150,
    isShow: true,
    align: "center"
  },
  {
    label: "组件路径",
    prop: "type",
    width: 150,
    isShow: true,
    align: "center"
  },
  {
    label: "菜单状态",
    prop: "status",
    isShow: true
  },
  {
    label: "创建时间",
    prop: "status",
    isShow: true
  },
  {
    label: "操作",
    prop: "operate",
    isShow: true,
    width: "200px",
    fixed: "right"
  }
]);

const tableData = [
  {
    id: "121856222521775925",
    username: "龙娜",
    gender: 1,
    idCard: "121856222521775925",
    email: "a.matrlq@rrvgx.in",
    address: "陕西省 铜川市",
    createTime: "1978-04-01 22:06:48",
    status: 0,
    avatar: "https://i.imgtg.com/2023/01/16/QRqMK.jpg",
    children: [
      {
        id: "510673376282279811",
        username: "林芳",
        gender: 1,
        idCard: "510673376282279811",
        email: "o.qgsskbk@tlgmjesd.bt",
        address: "吉林省 白城市",
        createTime: "2020-06-02 07:20:22",
        status: 1,
        avatar: "https://i.imgtg.com/2023/01/16/QR57a.jpg",
        children: [
          {
            id: "384057552487255416",
            username: "毛敏",
            gender: 2,
            user: {
              detail: {
                age: 25
              }
            },
            idCard: "384057552487255416",
            email: "p.oelilik@femjqy.bi",
            address: "吉林省 白城市",
            createTime: "1975-02-08 15:08:03",
            status: 1,
            avatar: "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
          },
          {
            id: "754786063708779135",
            username: "谭秀英",
            gender: 1,
            user: {
              detail: {
                age: 12
              }
            },
            idCard: "754786063708779135",
            email: "c.fvtscd@vhlopesc.gu",
            address: "内蒙古自治区 锡林郭勒盟",
            createTime: "2000-12-20 16:42:06",
            status: 0,
            avatar: "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
          }
        ]
      },
      {
        id: "978552865697750224",
        username: "潘涛",
        gender: 2,
        user: {
          detail: {
            age: 23
          }
        },
        idCard: "978552865697750224",
        email: "b.oocooxdtj@kxidq.sn",
        address: "辽宁省 本溪市",
        createTime: "2024-01-14 13:20:43",
        status: 1,
        avatar: "https://i.imgtg.com/2023/01/16/QR57a.jpg"
      },
      {
        id: "754786063708779135",
        username: "谭秀英",
        gender: 1,
        user: {
          detail: {
            age: 12
          }
        },
        idCard: "754786063708779135",
        email: "c.fvtscd@vhlopesc.gu",
        address: "内蒙古自治区 锡林郭勒盟",
        createTime: "2000-12-20 16:42:06",
        status: 0,
        avatar: "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
      }
    ]
  },
  {
    id: "512387653515438233",
    username: "万洋",
    gender: 1,
    user: {
      detail: {
        age: 17
      }
    },
    idCard: "512387653515438233",
    email: "c.gghbxbllxy@eutrmlfq.gu",
    address: "西藏自治区 阿里地区",
    createTime: "1999-09-01 09:39:58",
    status: 0,
    avatar: "https://i.imgtg.com/2023/01/16/QRqMK.jpg",
    children: [
      {
        id: "384057552487255416",
        username: "毛敏",
        gender: 2,
        user: {
          detail: {
            age: 25
          }
        },
        idCard: "384057552487255416",
        email: "p.oelilik@femjqy.bi",
        address: "吉林省 白城市",
        createTime: "1975-02-08 15:08:03",
        status: 1,
        avatar: "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
      },
      {
        id: "388925580406888020",
        username: "武芳",
        gender: 1,
        user: {
          detail: {
            age: 12
          }
        },
        idCard: "388925580406888020",
        email: "p.tlugibdh@ekiu.br",
        address: "上海 上海市",
        createTime: "1995-11-10 02:37:19",
        status: 1,
        avatar: "https://i.imgtg.com/2023/01/16/QRa0s.jpg"
      },
      {
        id: "493550507281422466",
        username: "薛磊",
        gender: 1,
        user: {
          detail: {
            age: 14
          }
        },
        idCard: "493550507281422466",
        email: "m.kluu@llldkppyq.zm",
        address: "澳门特别行政区 离岛",
        createTime: "2012-09-10 10:32:50",
        status: 0,
        avatar: "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
      }
    ]
  },
  {
    id: "348018717083351863",
    username: "徐秀英",
    gender: 2,
    user: {
      detail: {
        age: 14
      }
    },
    idCard: "348018717083351863",
    email: "m.clsoexeyph@gey.sd",
    address: "河北省 廊坊市",
    createTime: "1989-11-16 00:45:29",
    status: 1,
    avatar: "https://i.imgtg.com/2023/01/16/QRBHS.jpg",
    children: [
      {
        id: "170354374116117597",
        username: "段超",
        gender: 1,
        user: {
          detail: {
            age: 17
          }
        },
        idCard: "170354374116117597",
        email: "g.wremnosx@cfxfj.bg",
        address: "台湾 金门县",
        createTime: "2010-06-09 03:53:23",
        status: 1,
        avatar: "https://i.imgtg.com/2023/01/16/QRa0s.jpg"
      },
      {
        id: "788110646664687521",
        username: "周娜",
        gender: 1,
        user: {
          detail: {
            age: 30
          }
        },
        idCard: "788110646664687521",
        email: "n.tpsbbhu@lchqic.gt",
        address: "浙江省 湖州市",
        createTime: "1996-07-02 03:07:52",
        status: 1,
        avatar: "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
      },
      {
        id: "518565516027487213",
        username: "胡超",
        gender: 2,
        user: {
          detail: {
            age: 29
          }
        },
        idCard: "518565516027487213",
        email: "v.isupufd@vxrxfmmg.pg",
        address: "青海省 西宁市",
        createTime: "1998-03-26 01:20:31",
        status: 1,
        avatar: "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
      }
    ]
  },
  {
    id: "601688832316458265",
    username: "何超",
    gender: 1,
    user: {
      detail: {
        age: 20
      }
    },
    idCard: "601688832316458265",
    email: "a.juwbicenh@jjukwu.info",
    address: "甘肃省 陇南市",
    createTime: "2003-09-22 02:40:36",
    status: 0,
    avatar: "https://i.imgtg.com/2023/01/16/QRa0s.jpg",
    children: [
      {
        id: "418121830110656257",
        username: "顾磊",
        gender: 2,
        user: {
          detail: {
            age: 12
          }
        },
        idCard: "418121830110656257",
        email: "n.blmv@pxfuuj.travel",
        address: "陕西省 榆林市",
        createTime: "1987-09-08 22:35:58",
        status: 0,
        avatar: "https://i.imgtg.com/2023/01/16/QR57a.jpg"
      },
      {
        id: "835228266832144023",
        username: "沈霞",
        gender: 2,
        user: {
          detail: {
            age: 21
          }
        },
        idCard: "835228266832144023",
        email: "q.evwuisd@qqusrmdh.as",
        address: "西藏自治区 拉萨市",
        createTime: "1991-12-23 06:14:54",
        status: 1,
        avatar: "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
      },
      {
        id: "628559412131637620",
        username: "汪敏",
        gender: 1,
        user: {
          detail: {
            age: 12
          }
        },
        idCard: "628559412131637620",
        email: "e.hurydqyws@ivctqovaw.cg",
        address: "宁夏回族自治区 固原市",
        createTime: "2010-02-13 13:52:27",
        status: 0,
        avatar: "https://i.imgtg.com/2023/01/16/QRa0s.jpg"
      }
    ]
  },
  {
    id: "660357483179364038",
    username: "曹秀兰",
    gender: 2,
    user: {
      detail: {
        age: 24
      }
    },
    idCard: "660357483179364038",
    email: "h.iepdtz@jnvrbe.ro",
    address: "澳门特别行政区 澳门半岛",
    createTime: "2017-09-17 04:20:08",
    status: 0,
    avatar: "https://i.imgtg.com/2023/01/16/QRBHS.jpg",
    children: [
      {
        id: "871936197514241475",
        username: "潘霞",
        gender: 2,
        user: {
          detail: {
            age: 25
          }
        },
        idCard: "871936197514241475",
        email: "p.wxsg@heuclwrq.ml",
        address: "福建省 南平市",
        createTime: "1970-01-24 01:46:55",
        status: 0,
        avatar: "https://i.imgtg.com/2023/01/16/QR57a.jpg"
      },
      {
        id: "287431651447855711",
        username: "锺静",
        gender: 1,
        user: {
          detail: {
            age: 28
          }
        },
        idCard: "287431651447855711",
        email: "s.exyw@umiy.cu",
        address: "湖北省 咸宁市",
        createTime: "1993-04-24 14:48:51",
        status: 1,
        avatar: "https://i.imgtg.com/2023/01/16/QR57a.jpg"
      },
      {
        id: "859117715177718271",
        username: "赖涛",
        gender: 2,
        user: {
          detail: {
            age: 22
          }
        },
        idCard: "859117715177718271",
        email: "q.ioiefdmff@wgivek.lb",
        address: "江西省 宜春市",
        createTime: "1999-04-21 01:40:21",
        status: 1,
        avatar: "https://i.imgtg.com/2023/01/16/QR57a.jpg"
      }
    ]
  },
  {
    id: "841927382633578322",
    username: "胡秀兰",
    gender: 2,
    user: {
      detail: {
        age: 30
      }
    },
    idCard: "841927382633578322",
    email: "e.ctmugcaxfq@gcphscsyk.us",
    address: "福建省 三明市",
    createTime: "1997-06-21 07:53:18",
    status: 1,
    avatar: "https://i.imgtg.com/2023/01/16/QRqMK.jpg",
    children: [
      {
        id: "383623841312445282",
        username: "龙涛",
        gender: 1,
        user: {
          detail: {
            age: 11
          }
        },
        idCard: "383623841312445282",
        email: "h.iznawlects@vdxxxw.sa",
        address: "福建省 厦门市",
        createTime: "1994-10-10 19:50:06",
        status: 1,
        avatar: "https://i.imgtg.com/2023/01/16/QRBHS.jpg"
      },
      {
        id: "826176429474564729",
        username: "高杰",
        gender: 2,
        user: {
          detail: {
            age: 29
          }
        },
        idCard: "826176429474564729",
        email: "f.prhlkmvw@sdbujguip.mp",
        address: "西藏自治区 日喀则地区",
        createTime: "1977-09-02 00:49:48",
        status: 0,
        avatar: "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
      },
      {
        id: "383309577205732210",
        username: "孟涛",
        gender: 1,
        user: {
          detail: {
            age: 29
          }
        },
        idCard: "383309577205732210",
        email: "q.puci@ifnt.kz",
        address: "宁夏回族自治区 中卫市",
        createTime: "1996-04-11 00:53:22",
        status: 0,
        avatar: "https://i.imgtg.com/2023/01/16/QRa0s.jpg"
      }
    ]
  },
  {
    id: "888287242995287543",
    username: "阎秀兰",
    gender: 1,
    user: {
      detail: {
        age: 24
      }
    },
    idCard: "888287242995287543",
    email: "y.cgxrrkhv@skmatbx.td",
    address: "北京 北京市",
    createTime: "2023-08-22 09:23:34",
    status: 1,
    avatar: "https://i.imgtg.com/2023/01/16/QRqMK.jpg",
    children: [
      {
        id: "833785805345237133",
        username: "蒋芳",
        gender: 2,
        user: {
          detail: {
            age: 28
          }
        },
        idCard: "833785805345237133",
        email: "d.qnwmygueyk@yocs.com.cn",
        address: "香港特别行政区 九龙",
        createTime: "2012-02-08 02:49:14",
        status: 1,
        avatar: "https://i.imgtg.com/2023/01/16/QRa0s.jpg"
      },
      {
        id: "715542911323623235",
        username: "石娜",
        gender: 1,
        user: {
          detail: {
            age: 11
          }
        },
        idCard: "715542911323623235",
        email: "s.tyehvwnw@gvisvrgywh.gov.cn",
        address: "天津 天津市",
        createTime: "2023-02-06 12:37:51",
        status: 0,
        avatar: "https://i.imgtg.com/2023/01/16/QR57a.jpg"
      },
      {
        id: "266236944925784726",
        username: "叶芳",
        gender: 2,
        user: {
          detail: {
            age: 16
          }
        },
        idCard: "266236944925784726",
        email: "u.jgmfefcdd@dqcy.cc",
        address: "吉林省 通化市",
        createTime: "1985-12-05 00:32:52",
        status: 0,
        avatar: "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
      }
    ]
  },
  {
    id: "528519717834118157",
    username: "任敏",
    gender: 1,
    user: {
      detail: {
        age: 28
      }
    },
    idCard: "528519717834118157",
    email: "p.ihbnx@voikmropm.ph",
    address: "河南省 安阳市",
    createTime: "1989-02-14 03:52:36",
    status: 1,
    avatar: "https://i.imgtg.com/2023/01/16/QRBHS.jpg",
    children: [
      {
        id: "936213887911193663",
        username: "阎磊",
        gender: 1,
        user: {
          detail: {
            age: 28
          }
        },
        idCard: "936213887911193663",
        email: "r.lfyf@hdjgyrflm.gd",
        address: "宁夏回族自治区 银川市",
        createTime: "2008-04-23 03:12:24",
        status: 1,
        avatar: "https://i.imgtg.com/2023/01/16/QRBHS.jpg"
      },
      {
        id: "708135452263656227",
        username: "潘霞",
        gender: 2,
        user: {
          detail: {
            age: 18
          }
        },
        idCard: "708135452263656227",
        email: "p.qlwu@qknvss.hm",
        address: "北京 北京市",
        createTime: "2005-07-27 05:57:52",
        status: 1,
        avatar: "https://i.imgtg.com/2023/01/16/QRa0s.jpg"
      },
      {
        id: "730552456136341203",
        username: "高霞",
        gender: 2,
        user: {
          detail: {
            age: 29
          }
        },
        idCard: "730552456136341203",
        email: "u.ovxofzupkb@txcc.dm",
        address: "浙江省 绍兴市",
        createTime: "1997-12-17 07:27:40",
        status: 0,
        avatar: "https://i.imgtg.com/2023/01/16/QR57a.jpg"
      }
    ]
  },
  {
    id: "351222277296837816",
    username: "陆敏",
    gender: 1,
    user: {
      detail: {
        age: 13
      }
    },
    idCard: "351222277296837816",
    email: "y.pharjw@ndqo.cv",
    address: "四川省 攀枝花市",
    createTime: "1995-08-26 21:55:39",
    status: 1,
    avatar: "https://i.imgtg.com/2023/01/16/QR57a.jpg",
    children: [
      {
        id: "417934062833639568",
        username: "赖涛",
        gender: 1,
        user: {
          detail: {
            age: 16
          }
        },
        idCard: "417934062833639568",
        email: "v.rxdvnsbi@bhxgw.vu",
        address: "山东省 青岛市",
        createTime: "1983-10-30 23:08:00",
        status: 1,
        avatar: "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
      },
      {
        id: "845928457285763451",
        username: "孙杰",
        gender: 1,
        user: {
          detail: {
            age: 27
          }
        },
        idCard: "845928457285763451",
        email: "j.cffq@wewlwj.py",
        address: "上海 上海市",
        createTime: "2022-09-25 22:11:06",
        status: 1,
        avatar: "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
      },
      {
        id: "155077457048537123",
        username: "康秀兰",
        gender: 1,
        user: {
          detail: {
            age: 22
          }
        },
        idCard: "155077457048537123",
        email: "l.yota@sqqj.zw",
        address: "上海 上海市",
        createTime: "1985-01-30 06:10:24",
        status: 0,
        avatar: "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
      }
    ]
  },
  {
    id: "539050466762259758",
    username: "蒋超",
    gender: 2,
    user: {
      detail: {
        age: 21
      }
    },
    idCard: "539050466762259758",
    email: "o.pms@artrhm.vg",
    address: "西藏自治区 拉萨市",
    createTime: "1974-09-13 01:26:43",
    status: 0,
    avatar: "https://i.imgtg.com/2023/01/16/QR57a.jpg",
    children: [
      {
        id: "857724640778142385",
        username: "侯磊",
        gender: 1,
        user: {
          detail: {
            age: 11
          }
        },
        idCard: "857724640778142385",
        email: "p.hcx@htccllj.org",
        address: "宁夏回族自治区 石嘴山市",
        createTime: "1972-06-01 05:13:48",
        status: 1,
        avatar: "https://i.imgtg.com/2023/01/16/QRa0s.jpg"
      },
      {
        id: "526691436221648453",
        username: "杨强",
        gender: 1,
        user: {
          detail: {
            age: 28
          }
        },
        idCard: "526691436221648453",
        email: "e.nbazoywqny@lqbtc.coop",
        address: "辽宁省 朝阳市",
        createTime: "2020-04-24 12:29:30",
        status: 0,
        avatar: "https://i.imgtg.com/2023/01/16/QRa0s.jpg"
      },
      {
        id: "156210594584778851",
        username: "魏明",
        gender: 1,
        user: {
          detail: {
            age: 24
          }
        },
        idCard: "156210594584778851",
        email: "s.exjpnymugs@edly.ae",
        address: "重庆 重庆市",
        createTime: "1988-12-08 20:15:25",
        status: 0,
        avatar: "https://i.imgtg.com/2023/01/16/QRBHS.jpg"
      }
    ]
  }
];

// 搜索
function search() {
  console.log(searchParam.value);
}

// 重置
function reset() {
  console.log("============");
}
</script>

<template>
  <div class="meun-manage bg-white rounded p-[10px] h-full">
    <search-form
      :columns="searchCols"
      :search="search"
      :reset="reset"
      :searchParam="searchParam"
    />
    <com-table
      :columns="columns"
      :border="false"
      :tableData="tableData"
      :isPageable="false"
      class="table"
    >
      <template #tableHeader>
        <el-button type="primary">新增</el-button>
      </template>
      <template #operate>
        <el-button type="primary" :icon="EditPen" link size="small"
          >修改</el-button
        >
        <el-button type="primary" :icon="Plus" link size="small"
          >新增</el-button
        >
        <el-button type="primary" :icon="Delete" link size="small"
          >删除</el-button
        >
      </template>
    </com-table>
  </div>
</template>

<style lang="scss" scoped>
.menu-manage {
  .table {
    height: calc(100% - 100px);
  }
}
</style>

import{d as n,r as a,a as i,h as p,u as o,o as s}from"./index-6f0fa62f.js";const m=n({__name:"demo",setup(c){const e=a({option:{border:!0,stripe:!0,toolbar:{left:{columns:[{hidden:!1,events:{click:{type:"add"}},props:{type:"primary",icon:"plus",label:"添加"}},{hidden:!1,events:{click:{type:"edit"}},props:{type:"primary",icon:"edit",label:"编辑"}},{hidden:!1,events:{click:{type:"delete"}},props:{type:"danger",icon:"delete",label:"删除"}}]}},ext:{visible:!0,title:"操作",width:300,columns:[{hidden:!1,events:{click:{type:"edit"}},props:{type:"primary",icon:"edit",label:"编辑"}},{hidden:!1,events:{click:{type:"delete"}},props:{type:"danger",icon:"delete",label:"删除"}},{hidden:!1,events:{click:{value:t=>{console.log("我是自定义按钮事件",t)}}},props:{type:"success",icon:"rank",label:"弹窗"}},{hidden:!1,events:{click:{type:"script",value:"alert('')"}},props:{type:"success",icon:"rank",label:"弹窗2"}}]},columns:[{label:"标题",prop:"title"},{label:"内容",prop:"content"},{label:"时间",prop:"time"}],page:{position:"right",total:100}},data:[{title:"标题1",content:"内容1",time:"2023-05-22 11:11:22"},{title:"标题2",content:"内容2",time:"2023-05-22 11:11:22"},{title:"标题3",content:"内容3",time:"2023-05-22 11:11:22"}]});return(t,r)=>{const l=i("box-datagrid");return s(),p(l,{option:o(e).option,data:o(e).data},null,8,["option","data"])}}});export{m as default};

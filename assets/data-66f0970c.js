import{g as q,M as _e,_ as be}from"./index-e4d67d33.js";import{d as V,b as D,m as ve,E as v}from"./element-plus-990c01d8.js";import{_ as Ve}from"./index.vue_vue_type_style_index_0_lang-5c717ad5.js";import{a as we,r as I}from"./requestUtil-9787c5ea.js";import{H as ye,c as ge,a as T,_ as k,d as ke,ah as s,m as z,p as w,V as e,P as l,u as t,F as B,l as G,U as he,T as r,a8 as xe}from"./vue-5a70a57f.js";import"./index.vue_vue_type_style_index_0_lang-56cd8ea7.js";const Ue={class:"box-editor-chart box-lowcode-app"},Ce=["onClick"],Ee={class:"context-menu"},Ne={class:"el-dropdown-link"},Ae={class:"dialog-footer"},De={class:"dialog-footer"},Ie=ye({__name:"data",setup(Te){const O=ge().proxy;O.$router,O.$route;const H=we();T();const p=k({defaultProps:{children:"children",label:"name"},data:H.thatOption.data,selectedNode:null,defaultExpandIds:[]}),M=n=>{p.selectedNode=n,n.kind_type==2},Q=n=>{v.success("删除成功")},R=n=>{let o=!1;p.defaultExpandIds.some(i=>{if(i===n.id)return o=!0,!0}),o||p.defaultExpandIds.push(n.id)},j=n=>{p.defaultExpandIds.some((o,i)=>{o===n.id&&p.defaultExpandIds.splice(i,1)}),S(n)},S=n=>{n.children&&n.children.forEach(function(o){const i=p.defaultExpandIds.indexOf(o.id);i>0&&p.defaultExpandIds.splice(i,1),S(o)})},X=(n,o)=>{switch(n){case"newdir":U(null);break;case"renamedir":U(o);break;case"deletedir":K();break;case"newApi":C(null);break;case"new":C(null);break;case"edit":de(o);break;case"rename":C(o);break;case"delete":Q();break;case"copyurl":v.success("拷贝地址成功");break;case"qrcode":v.success("二维码地址生成");break}},x=async()=>{const n=await I.request("/admin/lowcode/data","post",{});p.data=n.data.list||[]};ke(()=>{x()});const J=k({data:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]}),F=T(),m=k({dialog:{visible:!1,title:"新建目录"},form:{},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}]}}),U=(n=null,o=!1)=>{m.dialog.visible=!0,m.form={},n?(m.dialog.title="重命名",m.form=n):(m.dialog.title="新建目录",o?m.form={kind_type:1}:m.form={kind_type:1,parent_id:p.selectedNode.id})},K=n=>{v.success("删除成功")},W=()=>{F.value.validate(async n=>{if(n){const o=await I.request("/admin/lowcode/data/create","post",m.form);if(o.code!=0){v.error(o.msg);return}x(),v.success("保存成功"),m.dialog.visible=!1}else return console.log("error submit!"),!1})},Y=T(),d=k({dialog:{visible:!1,title:"新建应用"},form:{},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}]},result:null,active:"first0"}),C=(n=null)=>{d.dialog.visible=!0,d.form={},n?(d.dialog.title="重命名",d.form=n):(d.dialog.title="新建应用",d.form={kind_type:2,parent_id:p.selectedNode.id})},Z=()=>{Y.value.validate(async n=>{if(n){const o=await I.request("/admin/lowcode/data/create","post",d.form);if(o.code!=0){v.error(o.msg);return}x(),v.success("保存成功"),d.dialog.visible=!1}else return console.log("error submit!"),!1})},ee=()=>{},le=n=>{const o=d.form.params.indexOf(n);o!==-1&&d.form.params.splice(o,1)},oe=()=>{d.form.params.push({key:"键",value:"",desc:""})},ae=n=>{const o=d.form.headers.indexOf(n);o!==-1&&d.form.headers.splice(o,1)},te=()=>{d.form.headers.push({key:"键",value:"",desc:""})},E=k({dialog:{visible:!1,title:"可视化"}}),de=(n=null)=>{E.dialog.visible=!0};return(n,o)=>{const i=s("el-button"),f=s("el-input"),g=s("el-col"),N=s("el-row"),ne=s("el-icon"),_=s("el-dropdown-item"),se=s("el-dropdown-menu"),re=s("el-dropdown"),ie=s("el-tree"),c=s("el-table-column"),A=s("el-table"),y=s("el-form-item"),L=s("el-form"),P=s("el-dialog"),ue=s("el-option"),me=s("el-select"),b=s("el-tab-pane"),h=s("system-ace"),pe=s("el-switch"),fe=s("el-tabs"),ce=s("el-drawer");return G(),z(B,null,[w("div",Ue,[e(t(_e),{class:"default-theme"},{default:l(()=>[e(t(q),{"min-size":"10",size:"20","max-size":"30"},{default:l(()=>[e(N,null,{default:l(()=>[e(g,null,{default:l(()=>[e(f,{placeholder:"输入关键词进行搜索"},{append:l(()=>[e(i,{icon:"Plus",onClick:o[0]||(o[0]=a=>U(null,!0))})]),_:1})]),_:1})]),_:1}),e(N,null,{default:l(()=>[e(g,null,{default:l(()=>[e(ie,{data:t(p).data,props:t(p).defaultProps,"expand-on-click-node":!1,"node-key":"id","highlight-current":"","default-expanded-keys":t(p).defaultExpandIds,onNodeExpand:R,onNodeCollapse:j,"default-expand-all":""},{default:l(({node:a,data:u})=>[w("span",{style:{width:"100%"},class:"custom-tree-node",onClick:$=>M(u)},[w("span",null,he(a.label),1),w("span",Ee,[e(re,{trigger:"click",onCommand:$=>X($,u)},{dropdown:l(()=>[e(se,null,{default:l(()=>[e(_,{icon:t(V),command:"newDir"},{default:l(()=>[r("新建目录")]),_:1},8,["icon"]),e(_,{icon:t(V),command:"newDBTable",disabled:"",divided:""},{default:l(()=>[r("数据库数据集")]),_:1},8,["icon"]),e(_,{icon:t(V),disabled:"",command:"newSQL"},{default:l(()=>[r("SQL数据集")]),_:1},8,["icon"]),e(_,{icon:t(V),disabled:"",command:"newExcel"},{default:l(()=>[r("EXCEL数据集")]),_:1},8,["icon"]),e(_,{icon:t(V),disabled:"",command:"newRelate"},{default:l(()=>[r("关联数据集")]),_:1},8,["icon"]),e(_,{icon:t(V),command:"newApi"},{default:l(()=>[r("API数据集")]),_:1},8,["icon"]),e(_,{icon:t(V),command:"copy",divided:""},{default:l(()=>[r("复制")]),_:1},8,["icon"]),e(_,{icon:t(D),command:"rename"},{default:l(()=>[r("重命名")]),_:1},8,["icon"]),e(_,{icon:t(D),command:"move"},{default:l(()=>[r("移动")]),_:1},8,["icon"]),e(_,{icon:t(D),command:"delete"},{default:l(()=>[r("删除")]),_:1},8,["icon"])]),_:1})]),default:l(()=>[w("span",Ne,[e(ne,{size:15},{default:l(()=>[e(t(ve))]),_:1})])]),_:2},1032,["onCommand"])])],8,Ce)]),_:1},8,["data","props","default-expanded-keys"])]),_:1})]),_:1})]),_:1}),e(t(q),null,{default:l(()=>[e(A,{data:t(J).data,style:{width:"100%"}},{default:l(()=>[e(c,{prop:"date",label:"Date",width:"180"}),e(c,{prop:"name",label:"Name",width:"180"}),e(c,{prop:"address",label:"Address"})]),_:1},8,["data"])]),_:1})]),_:1})]),e(P,{modelValue:t(m).dialog.visible,"onUpdate:modelValue":o[3]||(o[3]=a=>t(m).dialog.visible=a),title:t(m).dialog.title,width:"30%",draggable:"","append-to-body":""},{footer:l(()=>[w("span",Ae,[e(i,{onClick:o[2]||(o[2]=a=>t(m).dialog.visible=!1)},{default:l(()=>[r("取消")]),_:1}),e(i,{type:"primary",onClick:W},{default:l(()=>[r(" 确定 ")]),_:1})])]),default:l(()=>[e(L,{ref_key:"refDirForm",ref:F,model:t(m).form,"label-width":"120px",rules:t(m).rules},{default:l(()=>[e(y,{label:"目录名称",prop:"name"},{default:l(()=>[e(f,{modelValue:t(m).form.name,"onUpdate:modelValue":o[1]||(o[1]=a=>t(m).form.name=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),e(P,{modelValue:t(d).dialog.visible,"onUpdate:modelValue":o[16]||(o[16]=a=>t(d).dialog.visible=a),title:t(d).dialog.title,width:"30%",draggable:"","append-to-body":""},{footer:l(()=>[w("span",De,[e(i,{icon:"CircleCloseFilled",type:"success",onClick:ee},{default:l(()=>[r("测试")]),_:1}),e(i,{onClick:o[15]||(o[15]=a=>t(d).dialog.visible=!1)},{default:l(()=>[r("取消")]),_:1}),e(i,{type:"primary",onClick:Z},{default:l(()=>[r(" 确定 ")]),_:1})])]),default:l(()=>[e(L,{model:t(d).form,"label-width":"100px"},{default:l(()=>[e(N,null,{default:l(()=>[e(g,null,{default:l(()=>[e(y,{label:"名称："},{default:l(()=>[e(f,{modelValue:t(d).form.label,"onUpdate:modelValue":o[4]||(o[4]=a=>t(d).form.label=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(y,{label:"地址："},{default:l(()=>[e(f,{placeholder:"请输入请求URL",modelValue:t(d).form.url,"onUpdate:modelValue":o[6]||(o[6]=a=>t(d).form.url=a)},{prepend:l(()=>[e(me,{modelValue:t(d).form.method,"onUpdate:modelValue":o[5]||(o[5]=a=>t(d).form.method=a),style:{width:"100px"}},{default:l(()=>[(G(),z(B,null,xe(["GET","POST","PUT","DELETE"],(a,u)=>e(ue,{key:u,label:a,value:a},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(fe,{modelValue:t(d).active,"onUpdate:modelValue":o[14]||(o[14]=a=>t(d).active=a),type:"card"},{default:l(()=>[e(b,{name:"first0",label:"参数"},{default:l(()=>[e(A,{data:t(d).form.params,style:{width:"100%"}},{default:l(()=>[e(c,{prop:"key",label:"键"},{default:l(a=>[e(f,{modelValue:a.row.key,"onUpdate:modelValue":u=>a.row.key=u,placeholder:"请输入键"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(c,{prop:"value",label:"值"},{default:l(a=>[e(f,{modelValue:a.row.value,"onUpdate:modelValue":u=>a.row.value=u,placeholder:"请输入值"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(c,{prop:"desc",label:"说明"},{default:l(a=>[e(f,{modelValue:a.row.desc,"onUpdate:modelValue":u=>a.row.desc=u,placeholder:"请输入说明"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(c,{prop:"key",label:"操作",width:"140"},{default:l(a=>[e(i,{type:"primary"},{default:l(()=>[r("移动")]),_:1}),e(i,{type:"danger",onClick:u=>le(a.row)},{default:l(()=>[r("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(i,{type:"primary",onClick:oe},{default:l(()=>[r("添加")]),_:1})]),_:1}),e(b,{name:"first2",label:"Header"},{default:l(()=>[e(A,{data:t(d).form.headers,style:{width:"100%"}},{default:l(()=>[e(c,{prop:"key",label:"键"},{default:l(a=>[e(f,{modelValue:a.row.key,"onUpdate:modelValue":u=>a.row.key=u,placeholder:"请输入键"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(c,{prop:"value",label:"值"},{default:l(a=>[e(f,{modelValue:a.row.value,"onUpdate:modelValue":u=>a.row.value=u,placeholder:"请输入值"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(c,{prop:"desc",label:"说明"},{default:l(a=>[e(f,{modelValue:a.row.desc,"onUpdate:modelValue":u=>a.row.desc=u,placeholder:"请输入说明"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(c,{prop:"key",label:"操作",width:"140"},{default:l(a=>[e(i,{type:"primary"},{default:l(()=>[r("移动")]),_:1}),e(i,{type:"danger",onClick:u=>ae(a.row)},{default:l(()=>[r("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(i,{type:"primary",onClick:te},{default:l(()=>[r("添加")]),_:1})]),_:1}),e(b,{name:"first3",label:"Body"},{default:l(()=>[e(h,{lang:"json",value:t(d).form.body,"onUpdate:value":o[7]||(o[7]=a=>t(d).form.body=a)},null,8,["value"])]),_:1}),e(b,{name:"first4",label:"接口描述"},{default:l(()=>[e(f,{type:"textarea",rows:10})]),_:1}),e(b,{name:"first5",label:"请求前脚本"},{default:l(()=>[e(h,{value:t(d).form.script.before,"onUpdate:value":o[8]||(o[8]=a=>t(d).form.script.before=a)},null,8,["value"])]),_:1}),e(b,{name:"first6",label:"请求后脚本"},{default:l(()=>[e(h,{value:t(d).form.script.after,"onUpdate:value":o[9]||(o[9]=a=>t(d).form.script.after=a)},null,8,["value"])]),_:1}),e(b,{name:"first7",label:"设置"},{default:l(()=>[e(y,{label:"是否自动请求："},{default:l(()=>[e(pe,{modelValue:t(d).form.auto,"onUpdate:modelValue":o[10]||(o[10]=a=>t(d).form.auto=a)},null,8,["modelValue"])]),_:1}),e(y,{label:"超时时间："},{default:l(()=>[e(f,{type:"number",modelValue:t(d).form.timeout,"onUpdate:modelValue":o[11]||(o[11]=a=>t(d).form.timeout=a),placeholder:"请输入超时时间"},null,8,["modelValue"])]),_:1}),e(y,{label:"定时刷新："},{default:l(()=>[e(f,{type:"number",modelValue:t(d).form.refresh,"onUpdate:modelValue":o[12]||(o[12]=a=>t(d).form.refresh=a),placeholder:"请输入刷新时间"},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{name:"result",label:"请求结果"},{default:l(()=>[e(h,{value:t(d).result,"onUpdate:value":o[13]||(o[13]=a=>t(d).result=a)},null,8,["value"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),e(ce,{modelValue:t(E).dialog.visible,"onUpdate:modelValue":o[17]||(o[17]=a=>t(E).dialog.visible=a),title:"visualOption.dialog.title","with-header":!1,size:"100%","append-to-body":""},{default:l(()=>[e(Ve)]),_:1},8,["modelValue"])],64)}}});const qe=be(Ie,[["__scopeId","data-v-c492afec"]]);export{qe as default};

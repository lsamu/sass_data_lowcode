import{d as L,p as O,c as H,r as x,a as n,o as U,b as I,e as r,f as e,w as l,F as T,g as M,h as A,u as t,i as g,t as G,j as ne,k as q,l as ae,s as J,m as W,n as K,q as Q,v as X,x as Y,y as de,z as se,A as le,B as ie,E as ue,C as re,D as R,G as pe}from"./index-6ced5955.js";const me={class:"custom-tree-node"},ce=g("span",null,[g("a",null," 复制 "),g("a",null," 删除 ")],-1),fe={class:"dialog-footer"},_e=L({__name:"event",setup(z){const o=O(),b=H(()=>{const d=o.that.component.eventsList;return d||[]}),s=H(()=>{const d=o.that.component.events;if(!d)return[];const m=[];for(const a in d)m.push({name:a,value:d[a]});return m}),v=x({value:null,data:[]}),f=d=>{o.that.component.events[d]=""},i=x({visible:!1,form:{}}),p=d=>{i.visible=!0},c=x({input:"",data:[{label:"onChange",script:"console.log('123')"},{label:"onChange2",script:"console.log('456')"}],defaultProps:{children:"children",label:"label"}}),_=d=>{};return(d,m)=>{const a=n("el-option"),B=n("el-select"),y=n("el-table-column"),C=n("el-button"),S=n("el-table"),D=n("el-input"),E=n("el-tree"),V=n("el-col"),k=n("el-form-item"),N=n("box-ace"),$=n("el-row"),j=n("el-form"),h=n("el-dialog");return U(),I(T,null,[r(" 新建事件: "),e(B,{modelValue:t(v).value,"onUpdate:modelValue":m[0]||(m[0]=w=>t(v).value=w),placeholder:"组件自带事件",onChange:f},{default:l(()=>[(U(!0),I(T,null,M(t(b),(w,F)=>(U(),A(a,{key:F,label:w.name,value:w.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),e(S,{data:t(s)},{default:l(()=>[e(y,{prop:"name",label:"事件"}),e(y,{prop:"name",label:"操作",width:"180"},{default:l(w=>[e(C,{type:"primary",onClick:F=>p(w.row)},{default:l(()=>[r("绑定")]),_:2},1032,["onClick"]),e(C,{type:"danger"},{default:l(()=>[r("删除")]),_:1})]),_:1})]),_:1},8,["data"]),e(h,{modelValue:t(i).visible,"onUpdate:modelValue":m[7]||(m[7]=w=>t(i).visible=w),title:"事件设置",width:"60%",draggable:""},{footer:l(()=>[g("span",fe,[e(C,{onClick:m[4]||(m[4]=w=>t(i).visible=!1)},{default:l(()=>[r("取消")]),_:1}),e(C,{type:"success",onClick:m[5]||(m[5]=w=>t(i).visible=!1)},{default:l(()=>[r("保存")]),_:1}),e(C,{type:"primary",onClick:m[6]||(m[6]=w=>t(i).visible=!1)},{default:l(()=>[r(" 确定 ")]),_:1})])]),default:l(()=>[e(j,{model:t(i).form,"label-width":"120px"},{default:l(()=>[e($,null,{default:l(()=>[e(V,{span:4},{default:l(()=>[e(D,{modelValue:t(c).input,"onUpdate:modelValue":m[1]||(m[1]=w=>t(c).input=w),placeholder:"Please input"},{append:l(()=>[r("新建")]),_:1},8,["modelValue"]),e(E,{data:t(c).data,props:t(c).defaultProps,onNodeClick:_},{default:l(({node:w,data:F})=>[g("span",me,[g("span",null,G(w.label),1),ce])]),_:1},8,["data","props"])]),_:1}),e(V,{span:20},{default:l(()=>[e(k,{label:"函数名称"},{default:l(()=>[e(D,{modelValue:t(i).form.name,"onUpdate:modelValue":m[2]||(m[2]=w=>t(i).form.name=w)},null,8,["modelValue"])]),_:1}),e(k,{label:"脚本内容"},{default:l(()=>[e(N,{modelValue:t(i).form.script,"onUpdate:modelValue":m[3]||(m[3]=w=>t(i).form.script=w)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}}),be=L({__name:"style",setup(z){const o=x({form:{},activeName:"first"});return(b,s)=>{const v=n("box-ace"),f=n("el-radio-button"),i=n("el-radio-group"),p=n("el-form-item"),c=n("el-input"),_=n("el-collapse-item"),d=n("el-collapse"),m=n("el-form");return U(),A(m,{model:t(o).form,"label-width":"60px"},{default:l(()=>[e(v,{lang:"css",value:t(o).form.style,"onUpdate:value":s[0]||(s[0]=a=>t(o).form.style=a)},null,8,["value"]),e(d,{modelValue:t(o).activeName,"onUpdate:modelValue":s[20]||(s[20]=a=>t(o).activeName=a),accordion:""},{default:l(()=>[e(_,{title:"布局",name:"1"},{default:l(()=>[e(p,{label:"布局模式"},{default:l(()=>[e(i,{modelValue:t(o).form.display,"onUpdate:modelValue":s[1]||(s[1]=a=>t(o).form.display=a)},{default:l(()=>[e(f,{label:"内联"}),e(f,{label:"弹性"}),e(f,{label:"块级"}),e(f,{label:"内联块"}),e(f,{label:"隐藏"})]),_:1},8,["modelValue"])]),_:1}),e(p,{label:"宽度"},{default:l(()=>[e(c,{modelValue:t(o).form.width,"onUpdate:modelValue":s[2]||(s[2]=a=>t(o).form.width=a)},null,8,["modelValue"])]),_:1}),e(p,{label:"高度"},{default:l(()=>[e(c,{modelValue:t(o).form.height,"onUpdate:modelValue":s[3]||(s[3]=a=>t(o).form.height=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{title:"文字",name:"2"},{default:l(()=>[e(p,{label:"字号"},{default:l(()=>[e(c,{modelValue:t(o).form.fontSize,"onUpdate:modelValue":s[4]||(s[4]=a=>t(o).form.fontSize=a)},null,8,["modelValue"])]),_:1}),e(p,{label:"行高"},{default:l(()=>[e(c,{modelValue:t(o).form.lineHeight,"onUpdate:modelValue":s[5]||(s[5]=a=>t(o).form.lineHeight=a)},null,8,["modelValue"])]),_:1}),e(p,{label:"字重"},{default:l(()=>[e(c,{modelValue:t(o).form.weight,"onUpdate:modelValue":s[6]||(s[6]=a=>t(o).form.weight=a)},null,8,["modelValue"])]),_:1}),e(p,{label:"字体"},{default:l(()=>[e(c,{modelValue:t(o).form.font,"onUpdate:modelValue":s[7]||(s[7]=a=>t(o).form.font=a)},null,8,["modelValue"])]),_:1}),e(p,{label:"颜色"},{default:l(()=>[e(c,{modelValue:t(o).form.color,"onUpdate:modelValue":s[8]||(s[8]=a=>t(o).form.color=a)},null,8,["modelValue"])]),_:1}),e(p,{label:"对齐"},{default:l(()=>[e(i,{modelValue:t(o).form.align,"onUpdate:modelValue":s[9]||(s[9]=a=>t(o).form.align=a)},{default:l(()=>[e(f,{label:"左对齐"}),e(f,{label:"居中对齐"}),e(f,{label:"右对齐"}),e(f,{label:"两端对齐"})]),_:1},8,["modelValue"])]),_:1}),e(p,{label:"透明度"},{default:l(()=>[e(c,{modelValue:t(o).form.opt,"onUpdate:modelValue":s[10]||(s[10]=a=>t(o).form.opt=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{title:"背景",name:"3"},{default:l(()=>[e(p,{label:"背景"},{default:l(()=>[e(c,{modelValue:t(o).form.background,"onUpdate:modelValue":s[11]||(s[11]=a=>t(o).form.background=a)},null,8,["modelValue"])]),_:1}),e(p,{label:"透明度"},{default:l(()=>[e(c,{modelValue:t(o).form.backgroundopt,"onUpdate:modelValue":s[12]||(s[12]=a=>t(o).form.backgroundopt=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{title:"位置",name:"4"},{default:l(()=>[e(p,{label:"定位"},{default:l(()=>[e(c,{modelValue:t(o).form.position,"onUpdate:modelValue":s[13]||(s[13]=a=>t(o).form.position=a)},null,8,["modelValue"])]),_:1}),e(p,{label:"zIndex"},{default:l(()=>[e(c,{modelValue:t(o).form.zIndex,"onUpdate:modelValue":s[14]||(s[14]=a=>t(o).form.zIndex=a)},null,8,["modelValue"])]),_:1}),e(p,{label:"浮动方向"},{default:l(()=>[e(c,{modelValue:t(o).form.float,"onUpdate:modelValue":s[15]||(s[15]=a=>t(o).form.float=a)},null,8,["modelValue"])]),_:1}),e(p,{label:"清除位置"},{default:l(()=>[e(c,{modelValue:t(o).form.clear,"onUpdate:modelValue":s[16]||(s[16]=a=>t(o).form.clear=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{title:"边框",name:"5"},{default:l(()=>[e(p,{label:"圆角"},{default:l(()=>[e(c,{modelValue:t(o).form.biad,"onUpdate:modelValue":s[17]||(s[17]=a=>t(o).form.biad=a)},null,8,["modelValue"])]),_:1}),e(p,{label:"边框"},{default:l(()=>[e(c,{modelValue:t(o).form.border,"onUpdate:modelValue":s[18]||(s[18]=a=>t(o).form.border=a)},null,8,["modelValue"])]),_:1}),e(p,{label:"阴影"},{default:l(()=>[e(c,{modelValue:t(o).form.slod,"onUpdate:modelValue":s[19]||(s[19]=a=>t(o).form.slod=a)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["model"])}}}),ve=L({__name:"prop",setup(z){const o=O();x({com:null});const b=H(()=>"Option"+o.that.component.componentName);return(s,v)=>(U(),A(ne(t(b))))}}),Ve=["onClick"],ge={class:"context-menu"},he={class:"el-dropdown-link"},we=L({__name:"outline",setup(z){const o=O(),b=q(),s=x({activeName:"first",input:"",data:[],defaultProps:{children:"children",label:"title"}});ae(()=>{s.data=o.project.components});const v=f=>{o.setComponent(f)};return(f,i)=>{const p=n("el-input"),c=n("el-icon"),_=n("el-dropdown-item"),d=n("el-dropdown-menu"),m=n("el-dropdown"),a=n("el-tree");return U(),I(T,null,[e(p,{modelValue:t(s).input,"onUpdate:modelValue":i[0]||(i[0]=B=>t(s).input=B),placeholder:"搜索","suffix-icon":t(J)},null,8,["modelValue","suffix-icon"]),e(a,{ref_key:"refTree",ref:b,data:t(s).data,props:t(s).defaultProps,onNodeClick:v,"highlight-current":"","node-key":"id","expand-on-click-node":!1},{default:l(({node:B,data:y})=>[g("span",{style:{width:"100%"},class:"custom-tree-node",onClick:C=>v(y)},[g("span",null,G(B.label),1),g("span",ge,[e(m,{trigger:"click"},{dropdown:l(()=>[e(d,null,{default:l(()=>[e(_,{icon:t(W),command:"addInterface"},{default:l(()=>[r("设置")]),_:1},8,["icon"]),e(_,{icon:t(K),command:"edit"},{default:l(()=>[r("编辑")]),_:1},8,["icon"]),e(_,{icon:t(Q),command:"copy"},{default:l(()=>[r("复制")]),_:1},8,["icon"]),e(_,{icon:t(X),command:"delete"},{default:l(()=>[r("删除")]),_:1},8,["icon"])]),_:1})]),default:l(()=>[g("span",he,[e(c,{size:15},{default:l(()=>[e(t(Y))]),_:1})])]),_:1})])],8,Ve)]),_:1},8,["data","props"])],64)}}});const xe=g("div",{style:{padding:"10px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","font-size":"12px"}}," 空白表单 ",-1),ye=g("div",{style:{padding:"10px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","font-size":"12px"}}," 典型表单 ",-1),ke=g("div",{style:{padding:"10px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","font-size":"12px"}}," 注册表单 ",-1),Ne=L({__name:"component",setup(z){const o=O(),b=x({input:"",activeName:"first"}),s=x({activeName:"fisrt0"});x({activeName:"1"});const v=[{title:"容器",icon:"",children:[{title:"表单",componentName:"BoxForm",hidden:!1,locked:!1,props:{option:{title:"表单",labelWidth:120,span:24,toolbar:{visible:!0,location:"center",columns:[]}}},events:{},children:[{title:"文本框",componentName:"el-input",hidden:!1,locked:!1,props:{label:"字段",prop:"title"},events:{}}]},{title:"选项卡",componentName:"BoxTabs",hidden:!1,locked:!1,props:{option:{}},events:{},children:[{title:"选项卡",componentName:"BoxTabsItem",hidden:!1,locked:!1,props:{label:"选项卡"},events:{},children:[]}]},{title:"栅格",componentName:"BoxGrid",hidden:!1,locked:!1,props:{proportion:"24"},events:{},children:[]},{title:"表格",componentName:"BoxTable",hidden:!1,locked:!1,props:{},events:{},children:[]},{title:"折叠",componentName:"BoxCollapse",hidden:!1,locked:!1,props:{option:{}},events:{},children:[{title:"折叠项",componentName:"BoxCollapseItem",hidden:!1,locked:!1,props:{label:"折叠项"},children:[]}]},{title:"行内",componentName:"BoxInline",hidden:!1,locked:!1,props:{},events:{},children:[]},{title:"分割线",componentName:"BoxDivider",hidden:!1,locked:!1,props:{option:{}},events:{},children:[]}]},{title:"基础",icon:"",children:[{title:"单行文本",componentName:"ElInput",hidden:!1,locked:!1,props:{},eventsList:[{name:"change",desc:"仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发"}],events:{}},{title:"多行文本",componentName:"ElInput",hidden:!1,locked:!1,props:{type:"textarea",rows:5},events:{}},{title:"数字",componentName:"ElInput",hidden:!1,locked:!1,props:{type:"number"},events:{}},{title:"下拉",componentName:"BoxSelect",hidden:!1,locked:!1,props:{},events:{}},{title:"单选",componentName:"BoxRadio",hidden:!1,locked:!1,props:{},events:{}},{title:"多选",componentName:"BoxCheckbox",hidden:!1,locked:!1,props:{},events:{}},{title:"开关",componentName:"ElSwitch",hidden:!1,locked:!1,props:{},events:{}},{title:"上传",componentName:"BoxUpload",hidden:!1,locked:!1,props:{},events:{}},{title:"级联",componentName:"ElCascader",hidden:!1,locked:!1,props:{},events:{}},{title:"日期",componentName:"ElDatePicker",hidden:!1,locked:!1,props:{},events:{}},{title:"评分",componentName:"ElRate",hidden:!1,locked:!1,props:{},events:{}},{title:"树形下拉",componentName:"ElTreeSelect",hidden:!1,locked:!1,props:{},events:{}}]},{title:"高级",icon:"",children:[{title:"DataGrid",componentName:"BoxDatagrid",hidden:!1,locked:!1,props:{option:{size:"default",ext:{visible:!0,title:"操作",width:180,fixed:"right",columns:[{label:"编辑"}]},columns:[],toolbar:{visible:!0,left:{visible:!0,columns:[{label:"新建"}]},right:{visible:!0,columns:[]}},page:{visible:!0,location:"buttom",total:100,pageIndex:1,pageSize:20,pageSizes:[10,20,50,100,500],layout:"total, sizes, prev, pager, next, jumper"},data:[]}}},{title:"树",componentName:"BoxTree",hidden:!1,locked:!1,props:{option:{toolbar:{visible:!0,columns:[]}}}},{title:"对话框",componentName:"BoxDialog",hidden:!1,locked:!1,props:{},children:[]},{title:"抽屉",componentName:"BoxDrawer",hidden:!1,locked:!1,props:{},children:[]}]},{title:"图表",icon:"",children:[{title:"面积图",componentName:"BoxEchartArea",hidden:!1,locked:!1,props:{}},{title:"条形图",componentName:"BoxEchartBar",hidden:!1,locked:!1,props:{}},{title:"柱状图",componentName:"BoxEchartColumn",hidden:!1,locked:!1,props:{}},{title:"环形图",componentName:"BoxEchartDonut",hidden:!1,locked:!1,props:{}},{title:"折线图",componentName:"BoxEchartLine",hidden:!1,locked:!1,props:{}},{title:"饼图",componentName:"BoxEchartPie",hidden:!1,locked:!1,props:{}}]}],f=()=>({span:12}),i=c=>{const _=JSON.parse(JSON.stringify(c));o.addComponent(_)},p=c=>{const _=se(),d=JSON.parse(JSON.stringify(c));return d.id=_,d.name=c.componentName+"_"+_,o.setComponent(d),d};return(c,_)=>{const d=n("el-input"),m=n("el-button"),a=n("el-col"),B=n("el-collapse-item"),y=n("el-collapse"),C=n("el-tab-pane"),S=n("el-image"),D=n("el-card"),E=n("el-row"),V=n("el-scrollbar"),k=n("el-tabs");return U(),A(k,{modelValue:t(b).activeName,"onUpdate:modelValue":_[4]||(_[4]=N=>t(b).activeName=N)},{default:l(()=>[e(C,{label:"组件",name:"first"},{default:l(()=>[e(d,{modelValue:t(b).input,"onUpdate:modelValue":_[0]||(_[0]=N=>t(b).input=N),placeholder:"搜索","suffix-icon":t(J)},null,8,["modelValue","suffix-icon"]),e(y,{modelValue:t(s).activeName,"onUpdate:modelValue":_[1]||(_[1]=N=>t(s).activeName=N),accordion:""},{default:l(()=>[(U(),I(T,null,M(v,(N,$)=>e(B,{title:N.title,name:"fisrt"+$},{default:l(()=>[e(t(de),{tag:"el-row","component-data":f,modelValue:N.children,"onUpdate:modelValue":j=>N.children=j,group:{name:"components",pull:"clone",put:!1},"item-key":"componentName",sort:!1,clone:p},{item:l(({element:j})=>[e(a,{span:12},{default:l(()=>[e(m,{onClick:h=>i(j),style:{width:"95%",margin:"5px",border:"1px dashed #409eff"},title:j.componentName},{default:l(()=>[r(G(j.title),1)]),_:2},1032,["onClick","title"])]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["title","name"])),64))]),_:1},8,["modelValue"])]),_:1}),e(C,{label:"模板",name:"first2"},{default:l(()=>[e(d,{modelValue:t(b).input,"onUpdate:modelValue":_[2]||(_[2]=N=>t(b).input=N),placeholder:"搜索","suffix-icon":t(J)},null,8,["modelValue","suffix-icon"]),e(V,null,{default:l(()=>[e(E,null,{default:l(()=>[e(a,{span:12},{default:l(()=>[e(D,{"body-style":{padding:"0px"}},{default:l(()=>[e(S,{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",fit:"fit"}),xe]),_:1})]),_:1}),e(a,{span:12},{default:l(()=>[e(D,{"body-style":{padding:"0px"}},{default:l(()=>[e(S,{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",fit:"fit"}),ye]),_:1})]),_:1}),e(a,{span:12},{default:l(()=>[e(D,{"body-style":{padding:"0px"}},{default:l(()=>[e(S,{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",fit:"fit"}),ke]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(C,{label:"自定义",name:"first3"},{default:l(()=>[e(d,{modelValue:t(b).input,"onUpdate:modelValue":_[3]||(_[3]=N=>t(b).input=N),placeholder:"搜索","suffix-icon":t(J)},null,8,["modelValue","suffix-icon"])]),_:1})]),_:1},8,["modelValue"])}}}),Ue={style:{width:"100%"},class:"custom-tree-node"},Ce={class:"context-menu"},$e={class:"el-dropdown-link"},Se=L({__name:"index",setup(z){le().proxy;const o=x({input:"",data:[{label:"老师"},{label:"学生"},{label:"课程"},{label:"分数"}],defaultProps:{children:"children",label:"label"}}),b=()=>{};return(s,v)=>{const f=n("el-button"),i=n("el-input"),p=n("el-icon"),c=n("el-dropdown-item"),_=n("el-dropdown-menu"),d=n("el-dropdown"),m=n("el-tree");return U(),I(T,null,[e(f,{type:"primary",onClick:b},{default:l(()=>[r("新建")]),_:1}),e(f,{type:"primary",onClick:b},{default:l(()=>[r("导入")]),_:1}),e(f,{type:"primary",onClick:b},{default:l(()=>[r("设计")]),_:1}),e(i,{modelValue:t(o).input,"onUpdate:modelValue":v[0]||(v[0]=a=>t(o).input=a),placeholder:"搜索","suffix-icon":t(J)},null,8,["modelValue","suffix-icon"]),e(m,{data:t(o).data,props:t(o).defaultProps,"expand-on-click-node":!1},{default:l(({node:a,data:B})=>[g("span",Ue,[g("span",null,G(a.label),1),g("span",Ce,[e(d,{trigger:"click"},{dropdown:l(()=>[e(_,null,{default:l(()=>[e(c,{icon:t(W),command:"addInterface"},{default:l(()=>[r("设置")]),_:1},8,["icon"]),e(c,{icon:t(K),command:"edit"},{default:l(()=>[r("编辑")]),_:1},8,["icon"]),e(c,{icon:t(Q),command:"copy"},{default:l(()=>[r("复制")]),_:1},8,["icon"]),e(c,{icon:t(X),command:"delete"},{default:l(()=>[r("删除")]),_:1},8,["icon"])]),_:1})]),default:l(()=>[g("span",$e,[e(p,{size:15},{default:l(()=>[e(t(Y))]),_:1})])]),_:1})])])]),_:1},8,["data","props"])],64)}}});const Be={style:{width:"100%"},class:"custom-tree-node"},Ee={class:"context-menu"},Pe={class:"el-dropdown-link"},je={class:"dialog-footer"},Le={class:"dialog-footer"},ze=L({__name:"index",setup(z){const o=x({input:"",data:[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}],defaultProps:{children:"children",label:"label"}}),b=x({visible:!1}),s=()=>{b.visible=!0},v=()=>{i.form.params.push({key:"键"})},f=()=>{i.form.headers.push({key:"键"})},i=x({active:"first0",form:{auto:!1,method:"GET",timeout:60,params:[],headers:[],script:{before:"",after:""}}}),p=x({visible:!1,form:{content:""}}),c=()=>{p.visible=!0};return(_,d)=>{const m=n("el-button"),a=n("el-input"),B=n("el-icon"),y=n("el-dropdown-item"),C=n("el-dropdown-menu"),S=n("el-dropdown"),D=n("el-tree"),E=n("el-form-item"),V=n("el-col"),k=n("el-option"),N=n("el-select"),$=n("el-table-column"),j=n("el-table"),h=n("el-tab-pane"),w=n("box-ace"),F=n("el-switch"),te=n("el-tabs"),oe=n("el-row"),Z=n("el-form"),ee=n("el-dialog");return U(),I(T,null,[e(m,{type:"primary",onClick:s},{default:l(()=>[r("新建")]),_:1}),e(m,{type:"primary",onClick:c},{default:l(()=>[r("导入Swagger")]),_:1}),e(a,{modelValue:t(o).input,"onUpdate:modelValue":d[0]||(d[0]=u=>t(o).input=u),placeholder:"搜索","suffix-icon":t(J)},null,8,["modelValue","suffix-icon"]),e(D,{data:t(o).data,props:t(o).defaultProps,"expand-on-click-node":!1},{default:l(({node:u,data:P})=>[g("span",Be,[g("span",null,G(u.label),1),g("span",Ee,[e(S,{trigger:"click"},{dropdown:l(()=>[e(C,null,{default:l(()=>[e(y,{icon:t(W),command:"addInterface"},{default:l(()=>[r("设置")]),_:1},8,["icon"]),e(y,{icon:t(K),command:"edit"},{default:l(()=>[r("编辑")]),_:1},8,["icon"]),e(y,{icon:t(Q),command:"copy"},{default:l(()=>[r("复制")]),_:1},8,["icon"]),e(y,{icon:t(X),command:"delete"},{default:l(()=>[r("删除")]),_:1},8,["icon"])]),_:1})]),default:l(()=>[g("span",Pe,[e(B,{size:15},{default:l(()=>[e(t(Y))]),_:1})])]),_:1})])])]),_:1},8,["data","props"]),e(ee,{modelValue:t(b).visible,"onUpdate:modelValue":d[12]||(d[12]=u=>t(b).visible=u),title:"数据API",width:"60%",draggable:""},{footer:l(()=>[g("span",je,[e(m,{onClick:d[10]||(d[10]=u=>t(b).visible=!1)},{default:l(()=>[r("取消")]),_:1}),e(m,{type:"primary",onClick:d[11]||(d[11]=u=>t(b).visible=!1)},{default:l(()=>[r(" 确定 ")]),_:1})])]),default:l(()=>[e(Z,{model:t(i).form,"label-width":"100px"},{default:l(()=>[e(oe,null,{default:l(()=>[e(V,null,{default:l(()=>[e(E,{label:"名称"},{default:l(()=>[e(a,{modelValue:t(i).form.name,"onUpdate:modelValue":d[1]||(d[1]=u=>t(i).form.name=u)},null,8,["modelValue"])]),_:1})]),_:1}),e(V,null,{default:l(()=>[e(E,{label:"地址"},{default:l(()=>[e(a,{placeholder:"请输入请求URL",modelValue:t(i).form.url,"onUpdate:modelValue":d[3]||(d[3]=u=>t(i).form.url=u)},{prepend:l(()=>[e(N,{modelValue:t(i).form.method,"onUpdate:modelValue":d[2]||(d[2]=u=>t(i).form.method=u),style:{width:"100px"}},{default:l(()=>[(U(),I(T,null,M(["GET","POST","PUT","DELETE"],(u,P)=>e(k,{key:P,label:u,value:u},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(V,null,{default:l(()=>[e(te,{modelValue:t(i).active,"onUpdate:modelValue":d[9]||(d[9]=u=>t(i).active=u),type:"card"},{default:l(()=>[e(h,{name:"first0",label:"请求参数"},{default:l(()=>[e(j,{data:t(i).form.params,style:{width:"100%"}},{default:l(()=>[e($,{prop:"key",label:"键"},{default:l(u=>[e(a,{modelValue:u.row.key,"onUpdate:modelValue":P=>u.row.key=P,placeholder:"请输入键"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e($,{prop:"value",label:"值"},{default:l(u=>[e(a,{modelValue:u.row.value,"onUpdate:modelValue":P=>u.row.value=P,placeholder:"请输入值"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e($,{prop:"desc",label:"说明"},{default:l(u=>[e(a,{modelValue:u.row.value,"onUpdate:modelValue":P=>u.row.value=P,placeholder:"请输入说明"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e($,{prop:"key",label:"操作",width:"140"},{default:l(u=>[e(m,{type:"primary"},{default:l(()=>[r("移动")]),_:1}),e(m,{type:"danger"},{default:l(()=>[r("删除")]),_:1})]),_:1})]),_:1},8,["data"]),e(m,{type:"primary",onClick:v},{default:l(()=>[r("添加")]),_:1})]),_:1}),e(h,{name:"first2",label:"请求Header"},{default:l(()=>[e(j,{data:t(i).form.headers,style:{width:"100%"}},{default:l(()=>[e($,{prop:"key",label:"键"},{default:l(u=>[e(a,{modelValue:u.row.key,"onUpdate:modelValue":P=>u.row.key=P,placeholder:"请输入键"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e($,{prop:"value",label:"值"},{default:l(u=>[e(a,{modelValue:u.row.value,"onUpdate:modelValue":P=>u.row.value=P,placeholder:"请输入值"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e($,{prop:"desc",label:"说明"},{default:l(u=>[e(a,{modelValue:u.row.value,"onUpdate:modelValue":P=>u.row.value=P,placeholder:"请输入说明"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e($,{prop:"key",label:"操作",width:"140"},{default:l(u=>[e(m,{type:"primary"},{default:l(()=>[r("移动")]),_:1}),e(m,{type:"danger"},{default:l(()=>[r("删除")]),_:1})]),_:1})]),_:1},8,["data"]),e(m,{type:"primary",onClick:f},{default:l(()=>[r("添加")]),_:1})]),_:1}),e(h,{name:"first3",label:"请求Body"},{default:l(()=>[e(w,{lang:"json",value:t(i).form.body,"onUpdate:value":d[4]||(d[4]=u=>t(i).form.body=u)},null,8,["value"])]),_:1}),e(h,{name:"first4",label:"接口描述"},{default:l(()=>[e(a,{type:"textarea",rows:10})]),_:1}),e(h,{name:"first5",label:"请求前脚本"},{default:l(()=>[e(w,{value:t(i).form.script.before,"onUpdate:value":d[5]||(d[5]=u=>t(i).form.script.before=u)},null,8,["value"])]),_:1}),e(h,{name:"first6",label:"请求后脚本"},{default:l(()=>[e(w,{value:t(i).form.script.after,"onUpdate:value":d[6]||(d[6]=u=>t(i).form.script.after=u)},null,8,["value"])]),_:1}),e(h,{name:"first7",label:"设置"},{default:l(()=>[e(E,{label:"是否自动请求"},{default:l(()=>[e(F,{modelValue:t(i).form.auto,"onUpdate:modelValue":d[7]||(d[7]=u=>t(i).form.auto=u)},null,8,["modelValue"])]),_:1}),e(E,{label:"超时时间"},{default:l(()=>[e(a,{modelValue:t(i).form.timeout,"onUpdate:modelValue":d[8]||(d[8]=u=>t(i).form.timeout=u),placeholder:"请输入超时时间"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),e(ee,{modelValue:t(p).visible,"onUpdate:modelValue":d[16]||(d[16]=u=>t(p).visible=u),title:"导入Swagger",width:"60%",draggable:""},{footer:l(()=>[g("span",Le,[e(m,{onClick:d[14]||(d[14]=u=>t(p).visible=!1)},{default:l(()=>[r("取消")]),_:1}),e(m,{type:"primary",onClick:d[15]||(d[15]=u=>t(p).visible=!1)},{default:l(()=>[r(" 确定 ")]),_:1})])]),default:l(()=>[e(Z,{model:t(p).form,"label-width":"100px"},{default:l(()=>[e(E,{label:"内容"},{default:l(()=>[e(w,{lang:"json",value:t(p).form.content,"onUpdate:value":d[13]||(d[13]=u=>t(p).form.content=u)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}});const De=L({__name:"data-source",setup(z){const o=x({activeName:"first"});return(b,s)=>{const v=n("el-tab-pane"),f=n("el-tabs");return U(),A(f,{modelValue:t(o).activeName,"onUpdate:modelValue":s[0]||(s[0]=i=>t(o).activeName=i)},{default:l(()=>[e(v,{label:"数据模型",name:"first"},{default:l(()=>[e(Se)]),_:1}),e(v,{label:"APIS",name:"first1"},{default:l(()=>[e(ze)]),_:1})]),_:1},8,["modelValue"])}}}),Ie=L({__name:"source",setup(z){const o=x({activeName:"first",code:"function aa(){}",style:"#main{}"});return(b,s)=>{const v=n("box-ace"),f=n("el-tab-pane"),i=n("el-tabs");return U(),A(i,{modelValue:t(o).activeName,"onUpdate:modelValue":s[2]||(s[2]=p=>t(o).activeName=p)},{default:l(()=>[e(f,{label:"代码",name:"first"},{default:l(()=>[e(v,{value:t(o).code,"onUpdate:value":s[0]||(s[0]=p=>t(o).code=p)},null,8,["value"])]),_:1}),e(f,{label:"样式",name:"first1"},{default:l(()=>[e(v,{lang:"css",value:t(o).style,"onUpdate:value":s[1]||(s[1]=p=>t(o).style=p)},null,8,["value"])]),_:1})]),_:1},8,["modelValue"])}}}),Te={class:"topArea"},Oe=g("div",{class:"left"},"低代码平台",-1),Ae={class:"center"},Je={class:"right"},Fe=g("div",{class:"container-preview",style:{height:"calc(100vh - 230px)"}}," sdfsfsdsdfsf 预览内容 ",-1),Ge={class:"dialog-footer"},He=L({__name:"index",setup(z){const{isFullscreen:o,enter:b,exit:s,toggle:v}=ie(),f=O(),i=()=>{},p=()=>{},c=()=>{f.clearComponent()},_=()=>{v()},d=x({visible:!1}),m=()=>{d.visible=!0},a=x({visible:!1,content:""}),B=()=>{a.visible=!0,a.content=`
  const aa = args[0];
  function bb(){
    console.log("bb");
  }

  console.log(aa);
  `},y=x({visible:!1,content:""}),C=()=>{y.visible=!0;const E=JSON.stringify(f.project,null,"	");y.content=E},S=(E="pc")=>{switch(E){case"pc":f.project.width=1435;break;case"pad":f.project.width=770;break;case"mobile":f.project.width=375;break}},D=()=>{ue.success({message:"保存成功"})};return(E,V)=>{const k=n("el-button"),N=n("el-input"),$=n("el-dialog"),j=n("box-ace");return U(),I(T,null,[g("div",Te,[Oe,g("div",Ae,[e(k,{onClick:V[0]||(V[0]=h=>S("pc"))},{default:l(()=>[r("电脑")]),_:1}),e(k,{onClick:V[1]||(V[1]=h=>S("pad"))},{default:l(()=>[r("平板")]),_:1}),e(k,{onClick:V[2]||(V[2]=h=>S("mobile"))},{default:l(()=>[r("手机")]),_:1}),e(N,{type:"number",modelValue:t(f).project.width,"onUpdate:modelValue":V[3]||(V[3]=h=>t(f).project.width=h),style:{width:"150px"}},{append:l(()=>[r("px")]),_:1},8,["modelValue"])]),g("div",Je,[e(k,{onClick:i},{default:l(()=>[r("撤销")]),_:1}),e(k,{onClick:p},{default:l(()=>[r("恢复")]),_:1}),e(k,{onClick:_},{default:l(()=>[r("全屏")]),_:1}),e(k,{onClick:m},{default:l(()=>[r("预览")]),_:1}),e(k,{onClick:B},{default:l(()=>[r("生成代码")]),_:1}),e(k,{onClick:C},{default:l(()=>[r("生成JSON")]),_:1}),e(k,{onClick:c},{default:l(()=>[r("清空")]),_:1}),e(k,null,{default:l(()=>[r("快捷键")]),_:1}),e(k,{onClick:D},{default:l(()=>[r("保存")]),_:1})])]),e($,{modelValue:t(d).visible,"onUpdate:modelValue":V[6]||(V[6]=h=>t(d).visible=h),title:"预览",fullscreen:"",center:""},{footer:l(()=>[g("span",Ge,[e(k,{onClick:V[4]||(V[4]=h=>t(d).visible=!1)},{default:l(()=>[r("取消")]),_:1}),e(k,{type:"primary",onClick:V[5]||(V[5]=h=>t(d).visible=!1)},{default:l(()=>[r(" 确定 ")]),_:1})])]),default:l(()=>[Fe]),_:1},8,["modelValue"]),e($,{modelValue:t(a).visible,"onUpdate:modelValue":V[8]||(V[8]=h=>t(a).visible=h),title:"生成代码",width:"70%",draggable:"true"},{default:l(()=>[e(j,{value:t(a).content,"onUpdate:value":V[7]||(V[7]=h=>t(a).content=h)},null,8,["value"])]),_:1},8,["modelValue"]),e($,{modelValue:t(y).visible,"onUpdate:modelValue":V[10]||(V[10]=h=>t(y).visible=h),title:"生成JSON",width:"70%",draggable:"true"},{default:l(()=>[e(j,{lang:"json",value:t(y).content,"onUpdate:value":V[9]||(V[9]=h=>t(y).content=h)},null,8,["value"])]),_:1},8,["modelValue"])],64)}}});const Re={key:0,class:"empty"},Me=L({__name:"widget",setup(z){le().proxy;const o=O();x({value:""});const b=q();return(s,v)=>{const f=n("box-drag-item");return U(),I("div",{class:"widget-container",style:R({width:t(o).project.width+"px"})},[!t(o).project.components||t(o).project.components.length==0?(U(),I("div",Re,"从左侧拖拽或点击来添加字段 ")):re("",!0),e(f,{children:t(o).project.components,"onUpdate:children":v[0]||(v[0]=i=>t(o).project.components=i),ref_key:"refDragItem",ref:b},null,8,["children"])],4)}}});const We=L({__name:"index",setup(z){O();const o=q();pe(o);const b=x({activeName:"first"}),s=x({activeName:"first"}),v=x({left:!0,right:!0}),f=()=>{const p=!v.left;v.left=p},i=()=>{const p=!v.right;v.right=p};return(p,c)=>{const _=n("el-header"),d=n("el-tab-pane"),m=n("el-tabs"),a=n("el-aside"),B=n("el-main"),y=n("el-container"),C=n("el-footer");return U(),A(y,null,{default:l(()=>[e(_,{height:"48px"},{default:l(()=>[e(He)]),_:1}),e(y,{style:{height:"calc(100vh - 100px)"}},{default:l(()=>[e(a,{width:"350px",class:"widget-config-container",style:R([{padding:"10px"},{"--el-aside-width":t(v).left==!1?"0px":"350px"}])},{default:l(()=>[e(m,{modelValue:t(b).activeName,"onUpdate:modelValue":c[0]||(c[0]=S=>t(b).activeName=S),"tab-position":"left"},{default:l(()=>[e(d,{label:"组件库",name:"first"},{default:l(()=>[e(Ne)]),_:1}),e(d,{label:"大纲树",name:"second"},{default:l(()=>[e(we)]),_:1}),e(d,{label:"数据源",name:"third"},{default:l(()=>[e(De)]),_:1}),e(d,{label:"源码库",name:"fourth"},{default:l(()=>[e(Ie)]),_:1})]),_:1},8,["modelValue"]),g("div",{class:"container-left-arrow",onClick:f})]),_:1},8,["style"]),e(y,null,{default:l(()=>[e(B,{style:{padding:"0",position:"relative",background:"#f2f3f5"},ref_key:"refMain",ref:o},{default:l(()=>[e(Me)]),_:1},512)]),_:1}),e(a,{width:"350px",class:"widget-config-container",style:R([{padding:"10px"},{"--el-aside-width":t(v).right==!1?"0px":"350px"}])},{default:l(()=>[e(m,{modelValue:t(s).activeName,"onUpdate:modelValue":c[1]||(c[1]=S=>t(s).activeName=S)},{default:l(()=>[e(d,{label:"属性",name:"first"},{default:l(()=>[e(ve)]),_:1}),e(d,{label:"样式",name:"first1"},{default:l(()=>[e(be)]),_:1}),e(d,{label:"事件",name:"first2"},{default:l(()=>[e(_e)]),_:1})]),_:1},8,["modelValue"]),g("div",{class:"container-right-arrow",onClick:i})]),_:1},8,["style"])]),_:1}),e(C,{height:"30px"},{default:l(()=>[r("2022~")]),_:1})]),_:1})}}});export{We as default};

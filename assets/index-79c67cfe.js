import{d as E,p as I,c as H,r as k,a,o as $,b as L,e as b,f as e,w as l,F as T,g as R,h as O,u as t,i as x,t as G,j as te,k as Q,l as oe,s as F,m as X,n as ne,q as Y,v as ae,x as de,y as se,z as ie,A as ue,B as pe,C as M}from"./index-f57debb8.js";import"element-plus";const re={class:"custom-tree-node"},me=x("span",null,[x("a",null," 复制 "),x("a",null," 删除 ")],-1),fe={class:"dialog-footer"},ce=E({__name:"event",setup(P){const o=I(),v=H(()=>{const _=o.that.component.eventsList;return _||[]}),n=H(()=>{const _=o.that.component.events;if(!_)return[];const f=[];for(const s in _)f.push({name:s,value:_[s]});return f}),w=k({value:null,data:[]}),h=_=>{o.that.component.events[_]=""},V=k({visible:!1,form:{}}),p=_=>{V.visible=!0},m=k({input:"",data:[{label:"onChange",script:"console.log('123')"},{label:"onChange2",script:"console.log('456')"}],defaultProps:{children:"children",label:"label"}}),d=_=>{};return(_,f)=>{const s=a("el-option"),u=a("el-select"),c=a("el-table-column"),r=a("el-button"),B=a("el-table"),S=a("el-input"),z=a("el-tree"),y=a("el-col"),D=a("el-form-item"),N=a("box-ace"),A=a("el-row"),U=a("el-form"),J=a("el-dialog");return $(),L(T,null,[b(" 新建事件: "),e(u,{modelValue:t(w).value,"onUpdate:modelValue":f[0]||(f[0]=g=>t(w).value=g),placeholder:"组件自带事件",onChange:h},{default:l(()=>[($(!0),L(T,null,R(t(v),(g,j)=>($(),O(s,{key:j,label:g.name,value:g.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),e(B,{data:t(n)},{default:l(()=>[e(c,{prop:"name",label:"事件"}),e(c,{prop:"name",label:"操作",width:"180"},{default:l(g=>[e(r,{type:"primary",onClick:j=>p(g.row)},{default:l(()=>[b("绑定")]),_:2},1032,["onClick"]),e(r,{type:"danger"},{default:l(()=>[b("删除")]),_:1})]),_:1})]),_:1},8,["data"]),e(J,{modelValue:t(V).visible,"onUpdate:modelValue":f[7]||(f[7]=g=>t(V).visible=g),title:"事件设置",width:"60%",draggable:""},{footer:l(()=>[x("span",fe,[e(r,{onClick:f[4]||(f[4]=g=>t(V).visible=!1)},{default:l(()=>[b("取消")]),_:1}),e(r,{type:"success",onClick:f[5]||(f[5]=g=>t(V).visible=!1)},{default:l(()=>[b("保存")]),_:1}),e(r,{type:"primary",onClick:f[6]||(f[6]=g=>t(V).visible=!1)},{default:l(()=>[b(" 确定 ")]),_:1})])]),default:l(()=>[e(U,{model:t(V).form,"label-width":"120px"},{default:l(()=>[e(A,null,{default:l(()=>[e(y,{span:4},{default:l(()=>[e(S,{modelValue:t(m).input,"onUpdate:modelValue":f[1]||(f[1]=g=>t(m).input=g),placeholder:"Please input"},{append:l(()=>[b("新建")]),_:1},8,["modelValue"]),e(z,{data:t(m).data,props:t(m).defaultProps,onNodeClick:d},{default:l(({node:g,data:j})=>[x("span",re,[x("span",null,G(g.label),1),me])]),_:1},8,["data","props"])]),_:1}),e(y,{span:20},{default:l(()=>[e(D,{label:"函数名称"},{default:l(()=>[e(S,{modelValue:t(V).form.name,"onUpdate:modelValue":f[2]||(f[2]=g=>t(V).form.name=g)},null,8,["modelValue"])]),_:1}),e(D,{label:"脚本内容"},{default:l(()=>[e(N,{modelValue:t(V).form.script,"onUpdate:modelValue":f[3]||(f[3]=g=>t(V).form.script=g)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}}),_e=E({__name:"style",setup(P){const o=k({form:{},activeName:"first"});return(v,n)=>{const w=a("box-ace"),h=a("el-radio-button"),V=a("el-radio-group"),p=a("el-form-item"),m=a("el-input"),d=a("el-collapse-item"),_=a("el-collapse"),f=a("el-form");return $(),O(f,{model:t(o).form,"label-width":"60px"},{default:l(()=>[e(w,{lang:"css",value:t(o).form.style,"onUpdate:value":n[0]||(n[0]=s=>t(o).form.style=s)},null,8,["value"]),e(_,{modelValue:t(o).activeName,"onUpdate:modelValue":n[20]||(n[20]=s=>t(o).activeName=s),accordion:""},{default:l(()=>[e(d,{title:"布局",name:"1"},{default:l(()=>[e(p,{label:"布局模式"},{default:l(()=>[e(V,{modelValue:t(o).form.display,"onUpdate:modelValue":n[1]||(n[1]=s=>t(o).form.display=s)},{default:l(()=>[e(h,{label:"内联"}),e(h,{label:"弹性"}),e(h,{label:"块级"}),e(h,{label:"内联块"}),e(h,{label:"隐藏"})]),_:1},8,["modelValue"])]),_:1}),e(p,{label:"宽度"},{default:l(()=>[e(m,{modelValue:t(o).form.width,"onUpdate:modelValue":n[2]||(n[2]=s=>t(o).form.width=s)},null,8,["modelValue"])]),_:1}),e(p,{label:"高度"},{default:l(()=>[e(m,{modelValue:t(o).form.height,"onUpdate:modelValue":n[3]||(n[3]=s=>t(o).form.height=s)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{title:"文字",name:"2"},{default:l(()=>[e(p,{label:"字号"},{default:l(()=>[e(m,{modelValue:t(o).form.fontSize,"onUpdate:modelValue":n[4]||(n[4]=s=>t(o).form.fontSize=s)},null,8,["modelValue"])]),_:1}),e(p,{label:"行高"},{default:l(()=>[e(m,{modelValue:t(o).form.lineHeight,"onUpdate:modelValue":n[5]||(n[5]=s=>t(o).form.lineHeight=s)},null,8,["modelValue"])]),_:1}),e(p,{label:"字重"},{default:l(()=>[e(m,{modelValue:t(o).form.weight,"onUpdate:modelValue":n[6]||(n[6]=s=>t(o).form.weight=s)},null,8,["modelValue"])]),_:1}),e(p,{label:"字体"},{default:l(()=>[e(m,{modelValue:t(o).form.font,"onUpdate:modelValue":n[7]||(n[7]=s=>t(o).form.font=s)},null,8,["modelValue"])]),_:1}),e(p,{label:"颜色"},{default:l(()=>[e(m,{modelValue:t(o).form.color,"onUpdate:modelValue":n[8]||(n[8]=s=>t(o).form.color=s)},null,8,["modelValue"])]),_:1}),e(p,{label:"对齐"},{default:l(()=>[e(V,{modelValue:t(o).form.align,"onUpdate:modelValue":n[9]||(n[9]=s=>t(o).form.align=s)},{default:l(()=>[e(h,{label:"左对齐"}),e(h,{label:"居中对齐"}),e(h,{label:"右对齐"}),e(h,{label:"两端对齐"})]),_:1},8,["modelValue"])]),_:1}),e(p,{label:"透明度"},{default:l(()=>[e(m,{modelValue:t(o).form.opt,"onUpdate:modelValue":n[10]||(n[10]=s=>t(o).form.opt=s)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{title:"背景",name:"3"},{default:l(()=>[e(p,{label:"背景"},{default:l(()=>[e(m,{modelValue:t(o).form.background,"onUpdate:modelValue":n[11]||(n[11]=s=>t(o).form.background=s)},null,8,["modelValue"])]),_:1}),e(p,{label:"透明度"},{default:l(()=>[e(m,{modelValue:t(o).form.backgroundopt,"onUpdate:modelValue":n[12]||(n[12]=s=>t(o).form.backgroundopt=s)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{title:"位置",name:"4"},{default:l(()=>[e(p,{label:"定位"},{default:l(()=>[e(m,{modelValue:t(o).form.position,"onUpdate:modelValue":n[13]||(n[13]=s=>t(o).form.position=s)},null,8,["modelValue"])]),_:1}),e(p,{label:"zIndex"},{default:l(()=>[e(m,{modelValue:t(o).form.zIndex,"onUpdate:modelValue":n[14]||(n[14]=s=>t(o).form.zIndex=s)},null,8,["modelValue"])]),_:1}),e(p,{label:"浮动方向"},{default:l(()=>[e(m,{modelValue:t(o).form.float,"onUpdate:modelValue":n[15]||(n[15]=s=>t(o).form.float=s)},null,8,["modelValue"])]),_:1}),e(p,{label:"清除位置"},{default:l(()=>[e(m,{modelValue:t(o).form.clear,"onUpdate:modelValue":n[16]||(n[16]=s=>t(o).form.clear=s)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{title:"边框",name:"5"},{default:l(()=>[e(p,{label:"圆角"},{default:l(()=>[e(m,{modelValue:t(o).form.biad,"onUpdate:modelValue":n[17]||(n[17]=s=>t(o).form.biad=s)},null,8,["modelValue"])]),_:1}),e(p,{label:"边框"},{default:l(()=>[e(m,{modelValue:t(o).form.border,"onUpdate:modelValue":n[18]||(n[18]=s=>t(o).form.border=s)},null,8,["modelValue"])]),_:1}),e(p,{label:"阴影"},{default:l(()=>[e(m,{modelValue:t(o).form.slod,"onUpdate:modelValue":n[19]||(n[19]=s=>t(o).form.slod=s)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["model"])}}}),be=E({__name:"prop",setup(P){const o=I();k({com:null});const v=H(()=>"Option"+o.that.component.componentName);return(n,w)=>($(),O(te(t(v))))}}),ve={style:{float:"right"}},Ve=E({__name:"outline",setup(P){const o=I(),v=Q(),n=k({activeName:"first",input:"",data:[],defaultProps:{children:"children",label:"title"}});oe(()=>{n.data=o.project.components});const w=m=>{o.setComponent(m)},h=m=>{},V=m=>{o.copyComponent(m)},p=m=>{o.deleteComponent(m)};return(m,d)=>{const _=a("el-input"),f=a("el-icon"),s=a("el-tree");return $(),L(T,null,[e(_,{modelValue:t(n).input,"onUpdate:modelValue":d[0]||(d[0]=u=>t(n).input=u),placeholder:"搜索","suffix-icon":t(F)},null,8,["modelValue","suffix-icon"]),e(s,{ref_key:"refTree",ref:v,data:t(n).data,props:t(n).defaultProps,onNodeClick:w,"highlight-current":"","node-key":"id"},{default:l(({node:u,data:c})=>[x("span",null,[x("span",null,G(u.label),1),x("span",ve,[e(f,{size:15,style:{padding:"5px"}},{default:l(()=>[e(t(X))]),_:1}),e(f,{size:15,style:{padding:"5px"},onClick:r=>h(c)},{default:l(()=>[e(t(ne))]),_:2},1032,["onClick"]),e(f,{size:15,style:{padding:"5px"},onClick:r=>V(c)},{default:l(()=>[e(t(Y))]),_:2},1032,["onClick"]),e(f,{size:15,style:{padding:"5px"},onClick:r=>p(c)},{default:l(()=>[e(t(ae))]),_:2},1032,["onClick"])])])]),_:1},8,["data","props"])],64)}}}),ge=x("div",{style:{padding:"10px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","font-size":"12px"}}," 空白表单 ",-1),he=x("div",{style:{padding:"10px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","font-size":"12px"}}," 典型表单 ",-1),xe=x("div",{style:{padding:"10px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","font-size":"12px"}}," 注册表单 ",-1),ye=E({__name:"component",setup(P){const o=I(),v=k({input:"",activeName:"first"}),n=k({activeName:"fisrt0"});k({activeName:"1"});const w=[{title:"容器",icon:"",children:[{title:"表单",componentName:"BoxForm",hidden:!1,locked:!1,props:{option:{title:"表单",labelWidth:120,span:24,toolbar:{visible:!0,location:"center",columns:[]}}},events:{},children:[{title:"文本框",componentName:"el-input",hidden:!1,locked:!1,props:{label:"字段",prop:"title"},events:{}}]},{title:"选项卡",componentName:"BoxTabs",hidden:!1,locked:!1,props:{option:{}},events:{},children:[{title:"选项卡",componentName:"BoxTabsItem",hidden:!1,locked:!1,props:{label:"选项卡"},events:{},children:[]}]},{title:"栅格",componentName:"BoxGrid",hidden:!1,locked:!1,props:{proportion:"24"},events:{},children:[]},{title:"表格",componentName:"BoxTable",hidden:!1,locked:!1,props:{},events:{},children:[]},{title:"折叠",componentName:"BoxCollapse",hidden:!1,locked:!1,props:{option:{}},events:{},children:[{title:"折叠项",componentName:"BoxCollapseItem",hidden:!1,locked:!1,props:{label:"折叠项"},children:[]}]},{title:"行内",componentName:"BoxInline",hidden:!1,locked:!1,props:{},events:{},children:[]},{title:"分割线",componentName:"BoxDivider",hidden:!1,locked:!1,props:{option:{}},events:{},children:[]}]},{title:"基础",icon:"",children:[{title:"单行文本",componentName:"ElInput",hidden:!1,locked:!1,props:{},eventsList:[{name:"change",desc:"仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发"}],events:{}},{title:"多行文本",componentName:"ElInput",hidden:!1,locked:!1,props:{type:"textarea",rows:5},events:{}},{title:"数字",componentName:"ElInput",hidden:!1,locked:!1,props:{type:"number"},events:{}},{title:"下拉",componentName:"BoxSelect",hidden:!1,locked:!1,props:{},events:{}},{title:"单选",componentName:"BoxRadio",hidden:!1,locked:!1,props:{},events:{}},{title:"多选",componentName:"BoxCheckbox",hidden:!1,locked:!1,props:{},events:{}},{title:"开关",componentName:"ElSwitch",hidden:!1,locked:!1,props:{},events:{}},{title:"上传",componentName:"BoxUpload",hidden:!1,locked:!1,props:{},events:{}},{title:"级联",componentName:"ElCascader",hidden:!1,locked:!1,props:{},events:{}},{title:"日期",componentName:"ElDatePicker",hidden:!1,locked:!1,props:{},events:{}},{title:"评分",componentName:"ElRate",hidden:!1,locked:!1,props:{},events:{}},{title:"树形下拉",componentName:"ElTreeSelect",hidden:!1,locked:!1,props:{},events:{}}]},{title:"高级",icon:"",children:[{title:"DataGrid",componentName:"BoxDatagrid",hidden:!1,locked:!1,props:{option:{size:"default",ext:{visible:!0,title:"操作",width:180,fixed:"right",columns:[{label:"编辑"}]},columns:[],toolbar:{visible:!0,left:{visible:!0,columns:[{label:"新建"}]},right:{visible:!0,columns:[]}},page:{visible:!0,location:"buttom",total:100,pageIndex:1,pageSize:20,pageSizes:[10,20,50,100,500],layout:"total, sizes, prev, pager, next, jumper"},data:[]}}},{title:"树",componentName:"BoxTree",hidden:!1,locked:!1,props:{option:{toolbar:{visible:!0,columns:[]}}}},{title:"对话框",componentName:"BoxDialog",hidden:!1,locked:!1,props:{},children:[]},{title:"抽屉",componentName:"BoxDrawer",hidden:!1,locked:!1,props:{},children:[]}]},{title:"图表",icon:"",children:[{title:"面积图",componentName:"BoxEchartArea",hidden:!1,locked:!1,props:{}},{title:"条形图",componentName:"BoxEchartBar",hidden:!1,locked:!1,props:{}},{title:"柱状图",componentName:"BoxEchartColumn",hidden:!1,locked:!1,props:{}},{title:"环形图",componentName:"BoxEchartDonut",hidden:!1,locked:!1,props:{}},{title:"折线图",componentName:"BoxEchartLine",hidden:!1,locked:!1,props:{}},{title:"饼图",componentName:"BoxEchartPie",hidden:!1,locked:!1,props:{}}]}],h=()=>({span:12}),V=m=>{const d=JSON.parse(JSON.stringify(m));o.addComponent(d)},p=m=>{const d=se(),_=JSON.parse(JSON.stringify(m));return _.id=d,_.name=m.componentName+"_"+d,o.setComponent(_),_};return(m,d)=>{const _=a("el-input"),f=a("el-button"),s=a("el-col"),u=a("el-collapse-item"),c=a("el-collapse"),r=a("el-tab-pane"),B=a("el-image"),S=a("el-card"),z=a("el-row"),y=a("el-scrollbar"),D=a("el-tabs");return $(),O(D,{modelValue:t(v).activeName,"onUpdate:modelValue":d[4]||(d[4]=N=>t(v).activeName=N)},{default:l(()=>[e(r,{label:"组件",name:"first"},{default:l(()=>[e(_,{modelValue:t(v).input,"onUpdate:modelValue":d[0]||(d[0]=N=>t(v).input=N),placeholder:"搜索","suffix-icon":t(F)},null,8,["modelValue","suffix-icon"]),e(c,{modelValue:t(n).activeName,"onUpdate:modelValue":d[1]||(d[1]=N=>t(n).activeName=N),accordion:""},{default:l(()=>[($(),L(T,null,R(w,(N,A)=>e(u,{title:N.title,name:"fisrt"+A},{default:l(()=>[e(t(de),{tag:"el-row","component-data":h,modelValue:N.children,"onUpdate:modelValue":U=>N.children=U,group:{name:"components",pull:"clone",put:!1},"item-key":"componentName",sort:!1,clone:p},{item:l(({element:U})=>[e(s,{span:12},{default:l(()=>[e(f,{onClick:J=>V(U),style:{width:"95%",margin:"5px",border:"1px dashed #409eff"},title:U.componentName},{default:l(()=>[b(G(U.title),1)]),_:2},1032,["onClick","title"])]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["title","name"])),64))]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"模板",name:"first2"},{default:l(()=>[e(_,{modelValue:t(v).input,"onUpdate:modelValue":d[2]||(d[2]=N=>t(v).input=N),placeholder:"搜索","suffix-icon":t(F)},null,8,["modelValue","suffix-icon"]),e(y,null,{default:l(()=>[e(z,null,{default:l(()=>[e(s,{span:12},{default:l(()=>[e(S,{"body-style":{padding:"0px"}},{default:l(()=>[e(B,{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",fit:"fit"}),ge]),_:1})]),_:1}),e(s,{span:12},{default:l(()=>[e(S,{"body-style":{padding:"0px"}},{default:l(()=>[e(B,{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",fit:"fit"}),he]),_:1})]),_:1}),e(s,{span:12},{default:l(()=>[e(S,{"body-style":{padding:"0px"}},{default:l(()=>[e(B,{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",fit:"fit"}),xe]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{label:"自定义",name:"first3"},{default:l(()=>[e(_,{modelValue:t(v).input,"onUpdate:modelValue":d[3]||(d[3]=N=>t(v).input=N),placeholder:"搜索","suffix-icon":t(F)},null,8,["modelValue","suffix-icon"])]),_:1})]),_:1},8,["modelValue"])}}}),ke={style:{float:"right"}},we={class:"dialog-footer"},Ne={class:"dialog-footer"},Ce=E({__name:"data-source",setup(P){const o=k({input:"",data:[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}],defaultProps:{children:"children",label:"label"}}),v=k({visible:!1}),n=()=>{v.visible=!0},w=s=>{v.visible=!0},h=s=>{},V=s=>{},p=()=>{d.form.params.push({key:"键"})},m=()=>{d.form.headers.push({key:"键"})},d=k({active:"first0",form:{auto:!1,method:"GET",timeout:60,params:[],headers:[],script:{before:"",after:""}}}),_=k({visible:!1,form:{content:""}}),f=()=>{_.visible=!0};return(s,u)=>{const c=a("el-button"),r=a("el-input"),B=a("el-icon"),S=a("Delete"),z=a("el-tree"),y=a("el-form-item"),D=a("el-col"),N=a("el-option"),A=a("el-select"),U=a("el-table-column"),J=a("el-table"),g=a("el-tab-pane"),j=a("box-ace"),Z=a("el-switch"),ee=a("el-tabs"),le=a("el-row"),q=a("el-form"),W=a("el-dialog");return $(),L(T,null,[e(c,{type:"primary",onClick:n},{default:l(()=>[b("新建")]),_:1}),e(c,{type:"primary",onClick:f},{default:l(()=>[b("导入Swagger")]),_:1}),e(r,{modelValue:t(o).input,"onUpdate:modelValue":u[0]||(u[0]=i=>t(o).input=i),placeholder:"搜索","suffix-icon":t(F)},null,8,["modelValue","suffix-icon"]),e(z,{data:t(o).data,props:t(o).defaultProps},{default:l(({node:i,data:C})=>[x("span",null,[x("span",null,G(i.label),1),x("span",ke,[e(B,{size:15,style:{padding:"5px"}},{default:l(()=>[e(t(X))]),_:1}),e(B,{size:15,style:{padding:"5px"}},{default:l(()=>[e(t(ie),{onClick:K=>w(C)},null,8,["onClick"])]),_:2},1024),e(B,{size:15,style:{padding:"5px"},onClick:K=>h(C)},{default:l(()=>[e(t(Y))]),_:2},1032,["onClick"]),e(B,{size:15,style:{padding:"5px"},onClick:K=>V(C)},{default:l(()=>[e(S)]),_:2},1032,["onClick"])])])]),_:1},8,["data","props"]),e(W,{modelValue:t(v).visible,"onUpdate:modelValue":u[12]||(u[12]=i=>t(v).visible=i),title:"数据API",width:"60%",draggable:""},{footer:l(()=>[x("span",we,[e(c,{onClick:u[10]||(u[10]=i=>t(v).visible=!1)},{default:l(()=>[b("取消")]),_:1}),e(c,{type:"primary",onClick:u[11]||(u[11]=i=>t(v).visible=!1)},{default:l(()=>[b(" 确定 ")]),_:1})])]),default:l(()=>[e(q,{model:t(d).form,"label-width":"100px"},{default:l(()=>[e(le,null,{default:l(()=>[e(D,null,{default:l(()=>[e(y,{label:"名称"},{default:l(()=>[e(r,{modelValue:t(d).form.name,"onUpdate:modelValue":u[1]||(u[1]=i=>t(d).form.name=i)},null,8,["modelValue"])]),_:1})]),_:1}),e(D,null,{default:l(()=>[e(y,{label:"地址"},{default:l(()=>[e(r,{placeholder:"请输入请求URL",modelValue:t(d).form.url,"onUpdate:modelValue":u[3]||(u[3]=i=>t(d).form.url=i)},{prepend:l(()=>[e(A,{modelValue:t(d).form.method,"onUpdate:modelValue":u[2]||(u[2]=i=>t(d).form.method=i),style:{width:"100px"}},{default:l(()=>[($(),L(T,null,R(["GET","POST","PUT","DELETE"],(i,C)=>e(N,{key:C,label:i,value:i},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(D,null,{default:l(()=>[e(ee,{modelValue:t(d).active,"onUpdate:modelValue":u[9]||(u[9]=i=>t(d).active=i),type:"card"},{default:l(()=>[e(g,{name:"first0",label:"请求参数"},{default:l(()=>[e(J,{data:t(d).form.params,style:{width:"100%"}},{default:l(()=>[e(U,{prop:"key",label:"键"},{default:l(i=>[e(r,{modelValue:i.row.key,"onUpdate:modelValue":C=>i.row.key=C,placeholder:"请输入键"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(U,{prop:"value",label:"值"},{default:l(i=>[e(r,{modelValue:i.row.value,"onUpdate:modelValue":C=>i.row.value=C,placeholder:"请输入值"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(U,{prop:"desc",label:"说明"},{default:l(i=>[e(r,{modelValue:i.row.value,"onUpdate:modelValue":C=>i.row.value=C,placeholder:"请输入说明"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(U,{prop:"key",label:"操作",width:"140"},{default:l(i=>[e(c,{type:"primary"},{default:l(()=>[b("移动")]),_:1}),e(c,{type:"danger"},{default:l(()=>[b("删除")]),_:1})]),_:1})]),_:1},8,["data"]),e(c,{type:"primary",onClick:p},{default:l(()=>[b("添加")]),_:1})]),_:1}),e(g,{name:"first2",label:"请求Header"},{default:l(()=>[e(J,{data:t(d).form.headers,style:{width:"100%"}},{default:l(()=>[e(U,{prop:"key",label:"键"},{default:l(i=>[e(r,{modelValue:i.row.key,"onUpdate:modelValue":C=>i.row.key=C,placeholder:"请输入键"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(U,{prop:"value",label:"值"},{default:l(i=>[e(r,{modelValue:i.row.value,"onUpdate:modelValue":C=>i.row.value=C,placeholder:"请输入值"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(U,{prop:"desc",label:"说明"},{default:l(i=>[e(r,{modelValue:i.row.value,"onUpdate:modelValue":C=>i.row.value=C,placeholder:"请输入说明"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(U,{prop:"key",label:"操作",width:"140"},{default:l(i=>[e(c,{type:"primary"},{default:l(()=>[b("移动")]),_:1}),e(c,{type:"danger"},{default:l(()=>[b("删除")]),_:1})]),_:1})]),_:1},8,["data"]),e(c,{type:"primary",onClick:m},{default:l(()=>[b("添加")]),_:1})]),_:1}),e(g,{name:"first3",label:"请求Body"},{default:l(()=>[e(j,{lang:"json",value:t(d).form.body,"onUpdate:value":u[4]||(u[4]=i=>t(d).form.body=i)},null,8,["value"])]),_:1}),e(g,{name:"first4",label:"接口描述"},{default:l(()=>[e(r,{type:"textarea",rows:10})]),_:1}),e(g,{name:"first5",label:"请求前脚本"},{default:l(()=>[e(j,{value:t(d).form.script.before,"onUpdate:value":u[5]||(u[5]=i=>t(d).form.script.before=i)},null,8,["value"])]),_:1}),e(g,{name:"first6",label:"请求后脚本"},{default:l(()=>[e(j,{value:t(d).form.script.after,"onUpdate:value":u[6]||(u[6]=i=>t(d).form.script.after=i)},null,8,["value"])]),_:1}),e(g,{name:"first7",label:"设置"},{default:l(()=>[e(y,{label:"是否自动请求"},{default:l(()=>[e(Z,{modelValue:t(d).form.auto,"onUpdate:modelValue":u[7]||(u[7]=i=>t(d).form.auto=i)},null,8,["modelValue"])]),_:1}),e(y,{label:"超时时间"},{default:l(()=>[e(r,{modelValue:t(d).form.timeout,"onUpdate:modelValue":u[8]||(u[8]=i=>t(d).form.timeout=i),placeholder:"请输入超时时间"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),e(W,{modelValue:t(_).visible,"onUpdate:modelValue":u[16]||(u[16]=i=>t(_).visible=i),title:"导入Swagger",width:"60%",draggable:""},{footer:l(()=>[x("span",Ne,[e(c,{onClick:u[14]||(u[14]=i=>t(_).visible=!1)},{default:l(()=>[b("取消")]),_:1}),e(c,{type:"primary",onClick:u[15]||(u[15]=i=>t(_).visible=!1)},{default:l(()=>[b(" 确定 ")]),_:1})])]),default:l(()=>[e(q,{model:t(_).form,"label-width":"100px"},{default:l(()=>[e(y,{label:"内容"},{default:l(()=>[e(j,{lang:"json",value:t(_).form.content,"onUpdate:value":u[13]||(u[13]=i=>t(_).form.content=i)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}}),Ue=E({__name:"source",setup(P){const o=k({activeName:"first",code:"function aa(){}",style:"#main{}"});return(v,n)=>{const w=a("box-ace"),h=a("el-tab-pane"),V=a("el-tabs");return $(),O(V,{modelValue:t(o).activeName,"onUpdate:modelValue":n[2]||(n[2]=p=>t(o).activeName=p)},{default:l(()=>[e(h,{label:"代码",name:"first"},{default:l(()=>[e(w,{value:t(o).code,"onUpdate:value":n[0]||(n[0]=p=>t(o).code=p)},null,8,["value"])]),_:1}),e(h,{label:"样式",name:"first1"},{default:l(()=>[e(w,{lang:"css",value:t(o).style,"onUpdate:value":n[1]||(n[1]=p=>t(o).style=p)},null,8,["value"])]),_:1})]),_:1},8,["modelValue"])}}}),$e={class:"topArea"},Be=x("div",{class:"left"},"低代码平台",-1),Se={class:"center"},Ee={class:"right"},Pe=x("div",{class:"container-preview",style:{height:"calc(100vh - 230px)"}}," sdfsfsdsdfsf 预览内容 ",-1),Le={class:"dialog-footer"},ze=E({__name:"index",setup(P){const o=I(),v=k({width:1e3}),n=()=>{},w=()=>{},h=()=>{o.clearComponent()},V=()=>{},p=k({visible:!1}),m=()=>{p.visible=!0},d=k({visible:!1,content:""}),_=()=>{d.visible=!0,d.content=`
  const aa = args[0];
  function bb(){
    console.log("bb");
  }

  console.log(aa);
  `},f=k({visible:!1,content:""}),s=()=>{f.visible=!0;const u=JSON.stringify(o.project,null,"	");f.content=u};return(u,c)=>{const r=a("el-button"),B=a("el-input"),S=a("el-dialog"),z=a("box-ace");return $(),L(T,null,[x("div",$e,[Be,x("div",Se,[e(r,null,{default:l(()=>[b("电脑")]),_:1}),e(r,null,{default:l(()=>[b("平板")]),_:1}),e(r,null,{default:l(()=>[b("手机")]),_:1}),e(B,{type:"number",modelValue:t(v).width,"onUpdate:modelValue":c[0]||(c[0]=y=>t(v).width=y),style:{width:"200px"}},{append:l(()=>[b("px")]),_:1},8,["modelValue"])]),x("div",Ee,[e(r,{onClick:n},{default:l(()=>[b("撤销")]),_:1}),e(r,{onClick:w},{default:l(()=>[b("恢复")]),_:1}),e(r,{onClick:V},{default:l(()=>[b("全屏")]),_:1}),e(r,{onClick:m},{default:l(()=>[b("预览")]),_:1}),e(r,{onClick:_},{default:l(()=>[b("生成代码")]),_:1}),e(r,{onClick:s},{default:l(()=>[b("生成JSON")]),_:1}),e(r,{onClick:h},{default:l(()=>[b("清空")]),_:1}),e(r,null,{default:l(()=>[b("快捷键")]),_:1}),e(r,null,{default:l(()=>[b("保存")]),_:1})])]),e(S,{modelValue:t(p).visible,"onUpdate:modelValue":c[3]||(c[3]=y=>t(p).visible=y),title:"预览",fullscreen:"",center:""},{footer:l(()=>[x("span",Le,[e(r,{onClick:c[1]||(c[1]=y=>t(p).visible=!1)},{default:l(()=>[b("取消")]),_:1}),e(r,{type:"primary",onClick:c[2]||(c[2]=y=>t(p).visible=!1)},{default:l(()=>[b(" 确定 ")]),_:1})])]),default:l(()=>[Pe]),_:1},8,["modelValue"]),e(S,{modelValue:t(d).visible,"onUpdate:modelValue":c[5]||(c[5]=y=>t(d).visible=y),title:"生成代码",width:"70%",draggable:"true"},{default:l(()=>[e(z,{value:t(d).content,"onUpdate:value":c[4]||(c[4]=y=>t(d).content=y)},null,8,["value"])]),_:1},8,["modelValue"]),e(S,{modelValue:t(f).visible,"onUpdate:modelValue":c[7]||(c[7]=y=>t(f).visible=y),title:"生成JSON",width:"70%",draggable:"true"},{default:l(()=>[e(z,{lang:"json",value:t(f).content,"onUpdate:value":c[6]||(c[6]=y=>t(f).content=y)},null,8,["value"])]),_:1},8,["modelValue"])],64)}}});const De={class:"widget-container"},je={key:0,class:"empty"},Te=E({__name:"widget",setup(P){ue().proxy;const o=I();k({value:""});const v=Q();return(n,w)=>{const h=a("box-drag-item");return $(),L("div",De,[!t(o).project.components||t(o).project.components.length==0?($(),L("div",je,"从左侧拖拽或点击来添加字段 ")):pe("",!0),e(h,{children:t(o).project.components,"onUpdate:children":w[0]||(w[0]=V=>t(o).project.components=V),ref_key:"refDragItem",ref:v},null,8,["children"])])}}});const Ae=E({__name:"index",setup(P){I();const o=k({activeName:"first"}),v=k({activeName:"first"}),n=k({left:!0,right:!0}),w=()=>{const V=!n.left;n.left=V},h=()=>{const V=!n.right;n.right=V};return(V,p)=>{const m=a("el-header"),d=a("el-tab-pane"),_=a("el-tabs"),f=a("el-aside"),s=a("el-main"),u=a("el-container"),c=a("el-footer");return $(),O(u,null,{default:l(()=>[e(m,{height:"48px"},{default:l(()=>[e(ze)]),_:1}),e(u,{style:{height:"calc(100vh - 100px)"}},{default:l(()=>[e(f,{width:"350px",class:"widget-config-container",style:M([{padding:"10px"},{"--el-aside-width":t(n).left==!1?"0px":"350px"}])},{default:l(()=>[e(_,{modelValue:t(o).activeName,"onUpdate:modelValue":p[0]||(p[0]=r=>t(o).activeName=r),"tab-position":"left"},{default:l(()=>[e(d,{label:"组件库",name:"first"},{default:l(()=>[e(ye)]),_:1}),e(d,{label:"大纲树",name:"second"},{default:l(()=>[e(Ve)]),_:1}),e(d,{label:"数据源",name:"third"},{default:l(()=>[e(Ce)]),_:1}),e(d,{label:"源码库",name:"fourth"},{default:l(()=>[e(Ue)]),_:1})]),_:1},8,["modelValue"]),x("div",{class:"container-left-arrow",onClick:w})]),_:1},8,["style"]),e(u,null,{default:l(()=>[e(s,{style:{padding:"0",position:"relative",background:"#f2f3f5"}},{default:l(()=>[e(Te)]),_:1})]),_:1}),e(f,{width:"350px",class:"widget-config-container",style:M([{padding:"10px"},{"--el-aside-width":t(n).right==!1?"0px":"350px"}])},{default:l(()=>[e(_,{modelValue:t(v).activeName,"onUpdate:modelValue":p[1]||(p[1]=r=>t(v).activeName=r)},{default:l(()=>[e(d,{label:"属性",name:"first"},{default:l(()=>[e(be)]),_:1}),e(d,{label:"样式",name:"first1"},{default:l(()=>[e(_e)]),_:1}),e(d,{label:"事件",name:"first2"},{default:l(()=>[e(ce)]),_:1})]),_:1},8,["modelValue"]),x("div",{class:"container-right-arrow",onClick:h})]),_:1},8,["style"])]),_:1}),e(c,{height:"30px"},{default:l(()=>[b("2022~")]),_:1})]),_:1})}}});export{Ae as default};

import{H as f,_ as i,ah as d,O as V,P as t,u as o,l as b,V as e,T as _}from"./vue-13df00ad.js";const U=f({__name:"index",setup(c){const l=i({name:""}),p=()=>{console.log("submit!")};return(x,n)=>{const u=d("el-input"),m=d("el-form-item"),s=d("el-button"),r=d("el-form");return b(),V(r,{model:o(l),"label-width":"120px"},{default:t(()=>[e(m,{label:"用户名"},{default:t(()=>[e(u,{modelValue:o(l).name,"onUpdate:modelValue":n[0]||(n[0]=a=>o(l).name=a)},null,8,["modelValue"])]),_:1}),e(m,{label:"密码"},{default:t(()=>[e(u,{modelValue:o(l).name,"onUpdate:modelValue":n[1]||(n[1]=a=>o(l).name=a)},null,8,["modelValue"])]),_:1}),e(m,{label:"确认密码"},{default:t(()=>[e(u,{modelValue:o(l).name,"onUpdate:modelValue":n[2]||(n[2]=a=>o(l).name=a)},null,8,["modelValue"])]),_:1}),e(m,{label:"验证码"},{default:t(()=>[e(u,{modelValue:o(l).name,"onUpdate:modelValue":n[3]||(n[3]=a=>o(l).name=a)},null,8,["modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(s,{type:"primary",onClick:p},{default:t(()=>[_("注册")]),_:1}),e(s,null,{default:t(()=>[_("取消")]),_:1})]),_:1})]),_:1},8,["model"])}}});export{U as default};

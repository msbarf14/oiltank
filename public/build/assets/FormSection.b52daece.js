import{p as n,o as i,k as r,a as l,f as m,A as t,g as e,y as c,v as p,u as a,x as u,G as g}from"./app.e1064abd.js";import{J as _}from"./SectionTitle.8c979708.js";const f={class:"md:grid md:grid-cols-3 md:gap-6"},h={class:"mt-5 md:mt-0 md:col-span-2"},v={class:"grid grid-cols-6 gap-6"},b={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"},k={__name:"FormSection",emits:["submitted"],setup(y){const o=n(()=>!!g().actions);return(s,d)=>(i(),r("div",f,[l(_,null,{title:m(()=>[t(s.$slots,"title")]),description:m(()=>[t(s.$slots,"description")]),_:3}),e("div",h,[e("form",{onSubmit:d[0]||(d[0]=c($=>s.$emit("submitted"),["prevent"]))},[e("div",{class:p(["px-4 py-5 bg-white sm:p-6 shadow",a(o)?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"])},[e("div",v,[t(s.$slots,"form")])],2),a(o)?(i(),r("div",b,[t(s.$slots,"actions")])):u("",!0)],32)])]))}};export{k as _};
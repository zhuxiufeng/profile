import{d as l,c as m,a as s,b as i,e as d,r as p,o as u,l as h,f,g as b,h as g,i as _,j as y,k as v,m as k,n as x,p as w,q as j,s as I,F as z}from"./vendor.b5c76f1a.js";const A=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}};A();var L="/assets/spiderman.053aa9bc.jpg";const M={class:"container flex min-w-fit"},N={class:"card w-64 h-96 bg-base-100 shadow ml-60 sticky top-0"},P=s("figure",{class:"px-10 pt-10 pb-4 border-b-2 w-56 m-auto"},[s("div",{class:"avatar m-auto"},[s("div",{class:"w-24 rounded-full"},[s("img",{src:L})])])],-1),S={class:"card-body items-center text-center"},B=s("h2",{class:"card-title"},"Xiufeng Zhu",-1),D=s("p",null,"Is a dog ?",-1),F={class:"menu menu-horizontal bg-base-200 bg-transparent"},O={href:"https://github.com/zhuxiufeng"},C={href:"https://stackoverflow.com/users/6538803/sage-byte"},G={class:"card w-6/12 bg-base-100 shadow ml-5"},T={class:"card-body space-y-10"},V=d('<div><h2 class="card-title mb-10">About me</h2><p class="mb-10">Hello! I\u2019m Xiufeng Zhu. I&#39;m a programmer living in Guangdong. I code in Python.</p><table class="table-auto"><tbody class=""><tr class="mb-5"><td class="bg-gray-100 text-white rounded px-2 py-3 capitalize text-black">residence:</td><td><span class="ml-10">Luohu District, Shenzhen</span></td></tr><tr class="mb-5"><td class="bg-gray-100 text-white rounded px-2 py-3 capitalize text-black">availability:</td><td><span class="ml-10">9AM - 5PM PST</span></td></tr><tr class="mb-5"><td class="bg-gray-100 text-white rounded px-2 py-3 capitalize text-black">address:</td><td><span class="ml-10">Guangdong, China</span></td></tr></tbody></table></div><div class="divider"></div>',2),q=s("h2",{class:"card-title"},"My Skills",-1),E={class:"mt-10 space-x-5 flex"},X={class:"rating flex-col space-y-3"},Z=d('<div><input disabled type="radio" name="rating-1" class="mask mask-star"><input disabled type="radio" name="rating-1" class="mask mask-star"><input disabled type="radio" name="rating-1" class="mask mask-star"><input disabled type="radio" name="rating-1" class="mask mask-star" checked><input disabled type="radio" name="rating-1" class="mask mask-star"></div>',1),H={class:"rating flex-col space-y-3"},J=d('<div><input disabled type="radio" name="rating-3" class="mask mask-star"><input disabled type="radio" name="rating-3" class="mask mask-star"><input disabled type="radio" name="rating-3" class="mask mask-star"><input disabled type="radio" name="rating-3" class="mask mask-star" checked><input disabled type="radio" name="rating-3" class="mask mask-star"></div>',1),K={class:"rating flex-col space-y-3"},U=d('<div><input disabled type="radio" name="rating-2" class="mask mask-star"><input disabled type="radio" name="rating-2" class="mask mask-star"><input disabled type="radio" name="rating-2" class="mask mask-star" checked><input disabled type="radio" name="rating-2" class="mask mask-star"><input disabled type="radio" name="rating-2" class="mask mask-star"></div>',1),W=s("div",{class:"divider"},null,-1),$=s("h2",{class:"card-title"},"My Services",-1),Q={class:"grid md:grid-cols-2 grid-cols-1 gap-4 mb-3 mt-10 md:mb-5"},R={class:"grid border justify-items-center rounded py-4 px-2","data-sal":"slide-up","data-sal-duration":"800"},Y={class:"grid justify-items-center items-center icon w-12 h-12 rounded-full bg-gray-400 mb-2"},ss=s("div",{class:"grid justify-items-center"},[s("h2",{class:"font-bold mb-2"},"Python"),s("p",{class:"text-center mb-2"},"I teach python on Udemy.")],-1),ts={class:"grid border justify-items-center rounded py-4 px-2","data-sal":"slide-up","data-sal-duration":"800"},as={class:"grid justify-items-center items-center icon w-12 h-12 rounded-full bg-gray-400 mb-2"},es=s("div",{class:"grid justify-items-center"},[s("h2",{class:"font-bold mb-2"},"Data Science"),s("p",{class:"text-center mb-2"},"I work on Big Data and Machine Learning.")],-1),is={class:"grid border justify-items-center rounded py-4 px-2","data-sal":"slide-up","data-sal-duration":"800"},ds={class:"grid justify-items-center items-center icon w-12 h-12 rounded-full bg-gray-400 mb-2"},os=s("div",{class:"grid justify-items-center"},[s("h2",{class:"font-bold mb-2"},"Marketing"),s("p",{class:"text-center mb-2"},"I have marketed several products online.")],-1),ns={class:"grid border justify-items-center rounded py-4 px-2","data-sal":"slide-up","data-sal-duration":"800"},cs={class:"grid justify-items-center items-center icon w-12 h-12 rounded-full bg-gray-400 mb-2"},rs=s("div",{class:"grid justify-items-center"},[s("h2",{class:"font-bold mb-2"},"Blogging"),s("p",{class:"text-center mb-2"},"I write blogs on everything.")],-1),ls=d('<div class="divider"></div><div><h2 class="card-title">My Works</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6 py-3"><a data-sveltekit-prefetch="" href="./works/automate/"><div data-sal="slide-up" data-sal-duration="800"><img width="200" height="150" loading="lazy" class="lazyload h-44 w-full object-cover object-center rounded" src="https://picsum.photos/id/1/500/300" alt="Automate Tasks"><h3 class="font-semibold text-center">Automate Tasks</h3><p class="text-sm text-center">A project to automate a lot of my daily mundane taks.</p></div></a><a data-sveltekit-prefetch="" href="./works/fake-news-detector/"><div data-sal="slide-up" data-sal-duration="800"><img width="200" height="150" loading="lazy" class="lazyload h-44 w-full object-cover object-center rounded" src="https://picsum.photos/id/1073/500/300" alt="Fake News Detector"><h3 class="font-semibold text-center">Fake News Detector</h3><p class="text-sm text-center">A Python project to detect fake news on the Internet.</p></div></a></div></div>',2),ms=l({setup(r){return(o,c)=>{const a=p("font-awesome-icon");return u(),m("div",M,[s("div",N,[P,s("div",S,[B,D,s("ul",F,[s("li",null,[s("a",null,[i(a,{icon:"fa-brands fa-twitter"})])]),s("li",null,[s("a",null,[i(a,{icon:"fa-brands fa-linkedin"})])]),s("li",null,[s("a",O,[i(a,{icon:"fa-brands fa-github"})])]),s("li",null,[s("a",C,[i(a,{icon:"fa-brands fa-stack-overflow"})])])])])]),s("div",G,[s("div",T,[V,s("div",null,[q,s("ul",E,[s("li",X,[i(a,{icon:"fa-brands fa-python"}),Z]),s("li",H,[i(a,{icon:"fa-solid fa-c"}),J]),s("li",K,[i(a,{icon:"fa-brands fa-java"}),U])])]),W,s("div",null,[$,s("div",Q,[s("div",R,[s("div",Y,[i(a,{icon:"fa-brands fa-python",class:"text-3xl"})]),ss]),s("div",ts,[s("div",as,[i(a,{icon:"fa-solid fa-database",class:"text-3xl"})]),es]),s("div",is,[s("div",ds,[i(a,{icon:"fa-solid fa-globe",class:"text-3xl"})]),os]),s("div",ns,[s("div",cs,[i(a,{icon:"fa-solid fa-blog",class:"text-3xl"})]),rs])])]),ls])])])}}});h.add(f,b,g,_,y,v,k,x,w,j);I(ms).component("font-awesome-icon",z).mount("#app");
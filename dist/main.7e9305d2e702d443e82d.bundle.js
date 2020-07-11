!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}({0:function(e,t,n){},6:function(e,t,n){"use strict";n.r(t);n(0);var i=()=>({mainContainer:document.getElementById("content"),searchForm:document.getElementById("searchForm"),citySearch:document.getElementById("citySearch"),cityField:document.getElementById("city"),tempField:document.getElementById("temperature"),mainField:document.getElementById("main"),descField:document.getElementById("description"),maxField:document.getElementById("max"),minField:document.getElementById("min"),feelsLikeField:document.getElementById("feelsLike"),celsiusBtn:document.getElementById("metric"),farenBtn:document.getElementById("imperial")});var a=async(e,t,n="metric")=>{const i=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&units=${n}&appid=${t}`);return await i.json()},r=async(e,t,n,i="metric")=>{const a=await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}&units=${i}&appid=${n}`);return await a.json()};var s={farenCelsius:JSON.parse(localStorage.getItem("farenCelsius"))||{celsius:!0,currentCity:"London"}};var l=async e=>{const t=!0===s.farenCelsius.celsius?"metric":"imperial";return await a(e,"586beec31912ba88b366b0309c325c56",t)};var o=e=>{const{mainContainer:t}=i();switch(e){case"Clouds":t.classList="cloudBg";break;case"Clear":t.classList="clearBg";break;case"Rain":t.classList="rainBg";break;case"Thunderstorm":t.classList="thunderBg";break;default:console.log("default")}};var d=(e,t,n,a,r,l,d)=>{const{cityField:c,tempField:u,mainField:m,descField:p,maxField:f,minField:b,feelsLikeField:g,celsiusBtn:y,farenBtn:x}=i(),{celsius:h}=s.farenCelsius;c.innerText=e,u.innerText=`${t} ${!0===h?"°C":"°F"}`,m.innerText="Main: "+n,p.innerText="Description: "+a,f.innerText="Max: "+r,b.innerText="Min: "+l,o(n),g.innerText="Feels Like: "+d,h?(y.classList="w-1/4 hover:bg-red-900 px-1 text-white font-bold py-2 rounded bg-purple-800",x.classList="w-1/4 hover:bg-red-900 px-1 text-white font-bold py-2 rounded bg-purple-400"):(y.classList="w-1/4 hover:bg-red-900 px-1 text-white font-bold py-2 rounded bg-purple-400",x.classList="w-1/4 hover:bg-red-900 px-1 text-white font-bold py-2 rounded bg-purple-800"),localStorage.setItem("farenCelsius",JSON.stringify(s.farenCelsius))};var c=async e=>{e.preventDefault();const{citySearch:t}=i(),n=await l(t.value);s.farenCelsius.currentCity=t.value;const{main:a,name:r,weather:o}=n;d(r,a.temp,o[0].main,o[0].description,a.temp_max,a.temp_min,a.feels_like)};var u=()=>{const{searchForm:e}=i();e.addEventListener("submit",c)};var m=()=>{const{mainContainer:e}=i();e.classList.add("defaultBg"),e.innerHTML='\n  <div class="mx-auto  pt-16 w-full max-w-xs">\n  <form class="bg-white bg-blue-100 bg-opacity-75 shadow-md rounded px-8 pt-6 pb-8 mb-4" id="searchForm">\n    <div class="mb-4">\n      <label class="block text-gray-700 text-sm font-bold mb-2" for="citySearch">\n        Type in the city you want to check the temperature.\n      </label>\n      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="citySearch" type="text" placeholder="Username">\n    </div>\n\n  </form>\n\n</div>\n  ',u()};var p=async e=>{"metric"===e.target.id?s.farenCelsius.celsius=!0:"imperial"===e.target.id&&(s.farenCelsius.celsius=!1);const t=await l(s.farenCelsius.currentCity),{main:n,name:i,weather:a}=t;d(i,n.temp,a[0].main,a[0].description,n.temp_max,n.temp_min,n.feels_like)};var f=(e,t,n,a,r,l,o)=>{const{mainContainer:d}=i(),c=document.getElementById("addWeatherToDom")||document.createElement("div");c.id="addWeatherToDom",c.classList="mx-auto bg-blue-100 bg-opacity-75 max-w-sm rounded overflow-hidden shadow-lg",c.innerHTML=`\n<div class="mx-auto bg-blue-100 bg-opacity-75 max-w-sm rounded overflow-hidden shadow-lg">\n  <div class="px-6 py-4">\n    <div class="text-center">\n    <div class="font-bold text-xl mb-2" id='city'>${e}</div>\n    <p class="temperature text-3xl" id='temperature'>${t} ${!0===s.farenCelsius.celsius?"°C":"°F"}</p>\n    <div class="tempToggler">\n      <button class="w-1/4 hover:bg-red-900 px-1 text-white font-bold py-2 rounded ${!0===s.farenCelsius.celsius?"bg-purple-400":"bg-purple-800"}" id='imperial'>Farenheit</button>\n      <button class="bg-red-700 w-1/4 hover:bg-red-900 text-white font-bold py-2 px-4 rounded ${!0===s.farenCelsius.celsius?"bg-purple-800":"bg-purple-400"}" id='metric'>Celsius</button>\n    </div>\n    <ul>\n      <li id='main'>Main: ${n}</li>\n      <li id='description'>Description: ${a} </li>\n      <li id='max'>Max: ${r}</li>\n      <li id='min'>Min: ${l}</li>\n      <li id='feelsLike'>Feels Like: ${o}</li>\n\n    </ul>\n    <p class="text-gray-700 text-base">\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.\n    </p>\n  </div>\n</div>\n  <div class="px-6 py-4">\n    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>\n    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>\n    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>\n  </div>\n</div>\n\n`,d.appendChild(c),Array.from(document.querySelector(".tempToggler").children).forEach(e=>e.addEventListener("click",p))};var b=async(e="586beec31912ba88b366b0309c325c56")=>{navigator.geolocation.getCurrentPosition(async t=>{const n=!0===s.farenCelsius.celsius?"metric":"imperial",i=await r(t.coords.latitude,t.coords.longitude,e,n),{main:a,name:l,weather:o}=i;s.farenCelsius.currentCity=l,f(l,a.temp,o[0].main,o[0].description,a.temp_max,a.temp_min,a.feels_like)})};var g=async()=>{b()};(()=>{g(),m()})()}});
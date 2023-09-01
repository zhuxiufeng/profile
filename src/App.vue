<script setup lang="ts">
</script>
<template>
  <div class="container flex min-w-fit">
    <div class="card w-64 h-96 bg-base-100 shadow ml-60 sticky top-0">
      <figure class="px-10 pt-10 pb-4 border-b-2 w-56 m-auto">
        <div class="avatar m-auto">
          <div class="w-24 rounded-full"><img src="./img/work.jpg"/></div>
        </div>
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Xiufeng Zhu</h2>
<!--        <p>Is a dog ?</p>-->
        <ul class="menu menu-horizontal bg-base-200 bg-transparent">
          <li><a>
            <font-awesome-icon icon="fa-brands fa-twitter"/>
          </a></li>
          <li><a>
            <font-awesome-icon icon="fa-brands fa-linkedin"/>
          </a></li>
          <li><a href="https://github.com/zhuxiufeng">
            <font-awesome-icon icon="fa-brands fa-github"/>
          </a></li>
          <li><a href="https://stackoverflow.com/users/6538803/sage-byte">
            <font-awesome-icon icon="fa-brands fa-stack-overflow"/>
          </a></li>
        </ul>
      </div>
    </div>
    <div class="card w-6/12 bg-base-100 shadow ml-5">
      <div class="card-body space-y-10">
        <div>
          <h2 class="card-title mb-10">About me</h2>
          <div class="hero bg-transparent text-left">
            <div class="hero-content text-left">
              <div class="max-w-md text-left">
                <p class="py-6">I'm a programmer living in Guangdong.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div>
          <h2 class="card-title">My Skills</h2>
          <ul class="mt-10">
            <li>
              <div>  Programming languages</div>
              <div class="flex justify-between">
                <a href="#"><img src="https://img.shields.io/badge/C%2B%2B-%23092E20.svg?style=plastic&logo=c%2B%2B&logoColor=white"  alt=""/></a>
                <a href="#"><img src="https://img.shields.io/badge/Python-%23092E20.svg?style=plastic&logo=python&logoColor=white"  alt=""/></a>
                <a href="#"><img src="https://img.shields.io/badge/Java-%23092E20.svg?style=plastic&logo=openjdk&logoColor=white"  alt=""/></a>
                <a href="#"><img src="https://img.shields.io/badge/JavaScript-%23092E20.svg?style=plastic&logo=javascript&logoColor=white"  alt=""/></a>
                <a href="#"><img src="https://img.shields.io/badge/Rust-%23092E20.svg?style=plastic&logo=rust&logoColor=white"  alt=""/></a>
                <a href="#"><img src="https://img.shields.io/badge/Go-%23092E20.svg?style=plastic&logo=go&logoColor=white"  alt=""/></a>
              </div>
            </li>
            <li class="pt-5">
              <div> Software & Tools</div>
              <div class="flex justify-between" i>
                <a href="#"><img src="https://img.shields.io/badge/Vue.js-%23092E20.svg?style=plastic&logo=Vue.js&logoColor=white"  alt=""/></a>
                <a href="#"><img src="https://img.shields.io/badge/Spring-%23092E20.svg?style=plastic&logo=spring&logoColor=white"  alt=""/></a>
                <a href="#"><img src="https://img.shields.io/badge/flask-%23092E20.svg?&style=plastic&logo=flask&logoColor=white"  alt=""/></a>
                <a href="#"><img src="https://img.shields.io/badge/django-%23092E20.svg?&style=plastic&logo=django&logoColor=white"  alt=""/></a>
                <a href="#"><img src="https://img.shields.io/badge/nginx-%23092E20.svg?&style=plastic&logo=nginx&logoColor=white"  alt=""/></a>
                <a href="#"><img src="https://img.shields.io/badge/Qt-%23092E20.svg?style=plastic&logo=qt&logoColor=white"  alt=""/></a>
                <a href="#"><img src="https://img.shields.io/badge/Docker-%23092E20.svg?style=plastic&logo=docker&logoColor=white"  alt=""/></a>
                <a href="#"><img src="https://img.shields.io/badge/Pandas-%23092E20.svg?style=plastic&logo=pandas&logoColor=white"  alt=""/></a>
              </div>
            </li>
          </ul>
        </div>
        <div class="divider"></div>
        <div>
          <h2 class="card-title ">My Services</h2>
          <div class="grid md:grid-cols-2 grid-cols-1 gap-4 mb-3 mt-10 md:mb-5">
            <div class="grid border justify-items-center rounded py-4 px-2" data-sal="slide-up" data-sal-duration="800">
              <div class="grid justify-items-center items-center icon w-12 h-12 rounded-full bg-gray-400 mb-2">
                <font-awesome-icon icon="fa-solid fa-server" class="text-3xl"/>
              </div>
              <div class="grid justify-items-center"> <h2 class="font-bold mb-2">Web</h2> <p class="text-center mb-2">I am engaged in web development work.</p> </div>
            </div>
            <div class="grid border justify-items-center rounded py-4 px-2" data-sal="slide-up" data-sal-duration="800">
              <div class="grid justify-items-center items-center icon w-12 h-12 rounded-full bg-gray-400 mb-2">
                <font-awesome-icon icon="fa-solid fa-database" class="text-3xl"/>
              </div>
              <div class="grid justify-items-center"><h2 class="font-bold mb-2">Data Science</h2> <p class="text-center mb-2">I work on Big Data and Machine Learning.</p></div>
            </div>
            <div class="grid border justify-items-center rounded py-4 px-2" data-sal="slide-up" data-sal-duration="800">
              <div class="grid justify-items-center items-center icon w-12 h-12 rounded-full bg-gray-400 mb-2">
                <font-awesome-icon icon="fa-solid fa-globe" class="text-3xl"/>
              </div>
              <div class="grid justify-items-center"><h2 class="font-bold mb-2">Marketing</h2>
                <p class="text-center mb-2">I have marketed several products online.</p></div>
            </div>
            <div class="grid border justify-items-center rounded py-4 px-2" data-sal="slide-up" data-sal-duration="800">
              <div class="grid justify-items-center items-center icon w-12 h-12 rounded-full bg-gray-400 mb-2">
                <font-awesome-icon icon="fa-solid fa-blog" class="text-3xl"/>
              </div>
              <div class="grid justify-items-center"><h2 class="font-bold mb-2">Blogging</h2>
                <p class="text-center mb-2">I write blogs on everything.</p></div>
            </div>
          </div>
        </div>
        <div class="divider"></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
<script setup lang="ts">
import YwzButton from './components/button/src/myButton.vue'
import {myButton} from "./components/button";

</script>
<!--<script src="https://kit.fontawesome.com/bd92341a41.js" crossorigin="anonymous"></script>-->
<template>
  <!--  <h1>111111111111111111111111111111111111111111111111</h1>-->
  <!--  <myButton>x</myButton>-->
  <!--  <div class="button-container flex justify-center my-10">-->
  <!--    <YwzButton type="error" outline size="lg">按钮</YwzButton>-->
  <!--  </div>-->
  <!--  <div class="button-container flex justify-center my-10">-->
  <!--    <p>123</p>-->
  <!--  </div>-->
  <!--  <h1 class="text-4xl text-center ">Hello Vite + Vue 3 + TSX</h1>-->
  <div class="container flex min-w-fit">
    <div class="card w-64 h-96 bg-base-100 shadow ml-60 sticky top-0">
      <figure class="px-10 pt-10 pb-4 border-b-2 w-56 m-auto">
        <!--        <img src="./img/spiderman.jpg" alt="Shoes" class="rounded-xl w-32" />-->
        <div class="avatar m-auto">
          <div class="w-24 rounded-full"><img src="./img/spiderman.jpg"/></div>
        </div>
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Xiufeng Zhu</h2>
        <p>Is a dog ?</p>
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
        <!--        <div class="card-actions">-->
        <!--&lt;!&ndash;          <button class="btn btn-primary">Buy Now</button>&ndash;&gt;-->
        <!--        </div>-->
      </div>
    </div>
    <div class="card w-6/12 bg-base-100 shadow ml-5">
      <div class="card-body ">
        <div >
          <h2 class="card-title mb-10">About me</h2>
          <p class="mb-10">Hello! I’m Xiufeng Zhu. I'm a programmer living in Guangdong. I code in Python.</p>
          <!--          <div class="overflow-x-auto">-->
          <table class="table-auto">
            <tbody class="">
<!--            <tr class="mb-5">-->
<!--              <td class="bg-black text-white rounded px-2 py-3 capitalize">age:</td>-->
<!--              <td><span class="ml-10">28</span></td>-->
<!--            </tr>-->
            <tr class="mb-5">
              <td class="bg-gray-500 text-white rounded px-2 py-3 capitalize">residence:</td>
              <td><span class="ml-10 ">Luohu District, Shenzhen</span></td>
            </tr>
            <tr class="mb-5">
              <td class="bg-gray-500 text-white rounded px-2 py-3 capitalize">availability:</td>
              <td><span class="ml-10">9AM - 5PM PST</span></td>
            </tr>
            <tr class="mb-5">
              <td class="bg-gray-500 text-white rounded px-2 py-3 capitalize">address:</td>
              <td><span class="ml-10">Guangdong, China</span></td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="divider"></div>
        <div>
          <h2 class="card-title">My Skills</h2>
          <ul class="mt-10 space-x-5 flex">
            <li class="rating flex-col space-y-3">
<!--              <div>Python</div>-->
              <font-awesome-icon icon="fa-brands fa-python" />
              <div>
                <input disabled type="radio" name="rating-1" class="mask mask-star" />
                <input disabled type="radio" name="rating-1" class="mask mask-star"  />
                <input disabled type="radio" name="rating-1" class="mask mask-star" />
                <input disabled type="radio" name="rating-1" class="mask mask-star " checked />
                <input disabled type="radio" name="rating-1" class="mask mask-star" />
              </div>
            </li>
            <li class="rating flex-col space-y-3">
              <font-awesome-icon icon="fa-solid fa-c" />
              <div>
                <input disabled type="radio" name="rating-3" class="mask mask-star" />
                <input disabled type="radio" name="rating-3" class="mask mask-star" />
                <input disabled type="radio" name="rating-3" class="mask mask-star" />
                <input disabled type="radio" name="rating-3" class="mask mask-star"  checked />
                <input disabled type="radio" name="rating-3" class="mask mask-star" />
              </div>
            </li>

            <li class="rating flex-col space-y-3">
              <font-awesome-icon icon="fa-brands fa-java" />
              <div>
                <input disabled type="radio" name="rating-2" class="mask mask-star" />
                <input disabled type="radio" name="rating-2" class="mask mask-star" />
                <input disabled type="radio" name="rating-2" class="mask mask-star" checked/>
                <input disabled type="radio" name="rating-2" class="mask mask-star" />
                <input disabled type="radio" name="rating-2" class="mask mask-star" />
              </div>
            </li>
          </ul>
        </div>
        <div class="divider"></div>
        <div>
          <h2 class="card-title">My Services</h2>
        </div>
        <div class="divider"></div>
        <div>
          <h2 class="card-title">My Works</h2>
        </div>
        <div class="divider"></div>
        <div>
          <h2 class="card-title">My Blog</h2>
        </div>
        <div class="divider"></div>
        <div>
          <h2 class="card-title">My Hobbies</h2>
        </div>
      </div>
      <!--    <main class="col-span-12 md:col-span-8 shadow-lg md:rounded-lg bg-white p-4 md:p-8 overflow-hidden ml-5">-->
      <!--    </main>-->

    </div>
  </div>
</template>

<style scoped></style>
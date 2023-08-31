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
        <!--        <div class="card-actions">-->
        <!--&lt;!&ndash;          <button class="btn btn-primary">Buy Now</button>&ndash;&gt;-->
        <!--        </div>-->
      </div>
    </div>
    <div class="card w-6/12 bg-base-100 shadow ml-5">
      <div class="card-body space-y-10">
        <div>
          <h2 class="card-title mb-10">About me</h2>
          <p class="mb-10">Hello! I’m Xiufeng Zhu. I'm a programmer living in Guangdong</p>
          <!--          <div class="overflow-x-auto">-->
          <table class="table-auto">
            <tbody class="">
            <!--            <tr class="mb-5">-->
            <!--              <td class="bg-black text-white rounded px-2 py-3 capitalize">age:</td>-->
            <!--              <td><span class="ml-10">28</span></td>-->
            <!--            </tr>-->
            <tr class="mb-5">
              <td class="bg-gray-100 text-white rounded px-2 py-3 capitalize text-black">residence:</td>
              <td><span class="ml-10">Luohu District, Shenzhen</span></td>
            </tr>
            <tr class="mb-5">
              <td class="bg-gray-100 text-white rounded px-2 py-3 capitalize text-black">availability:</td>
              <td><span class="ml-10">9AM - 5PM PST</span></td>
            </tr>
            <tr class="mb-5">
              <td class="bg-gray-100 text-white rounded px-2 py-3 capitalize text-black">address:</td>
              <td><span class="ml-10">Guangdong, China</span></td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="divider"></div>
        <div>
          <h2 class="card-title">🛠️ My Skills</h2>
          <ul class="mt-10">
            <li>
              <div><img src = "https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/Programming_Languages.gif?raw=true" width = 50px alt="">  Programming languages</div>
              <div class="flex">
                &emsp;
                <a href="https://www.cprogramming.com/" target="_blank">
                  <img alt="C" src="https://img.shields.io/badge/C%20-%232370ED.svg?style=plastic&logo=c&logoColor=white">
                </a>
                &emsp;
                <a href="https://www.w3schools.com/cpp/" target="_blank">
                  <img alt="C++" src="https://img.shields.io/badge/C++%20-%2300599C.svg?style=plastic&logo=c%2B%2B&logoColor=white">
                </a>
                &emsp;
                <a href="https://www.python.org" target="_blank">
                  <img alt="Python" src="https://img.shields.io/badge/Python%20-%2314354C.svg?style=plastic&logo=python&logoColor=white">
                </a>
                &emsp;
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript%20-%23F7DF1E.svg?style=plastic&logo=javascript&logoColor=black">
                </a>
                &emsp;
                <a href="https://www.java.com" target="_blank">
                  <img alt="Java" src="https://img.shields.io/badge/Java-%23007396.svg?style=plastic&logo=java&logoColor=white">
                </a>
              </div>

            </li>
            <li>
              <div> <img src = "https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/Software_Tools.gif?raw=true" width = 50px alt=""> Software & Tools</div>
              <div class="flex">
                &emsp;
                <a href="#"><img alt="Git" src="https://img.shields.io/badge/Git%20-%23F05033.svg?style=plastic&logo=git&logoColor=white"></a>
                &emsp;
                <a href="#"><img alt="GitHub" src="https://img.shields.io/badge/github-%23181717.svg?style=plastic&logo=github&logoColor=white"></a>
                &emsp;
                <a href="#"><img alt="Mark Down" src="https://img.shields.io/badge/Markdown-000000?style=plastic&logo=markdown&logoColor=white"></a>
                &emsp;
                <a href="#"><img alt="Stack Overflow" src="https://img.shields.io/badge/-Stack%20Overflow-FE7A16?style=plastic&logo=stack-overflow&logoColor=white"></a>
                &emsp;
                <a href="#"><img alt="Geekf For Geeks" src="https://img.shields.io/badge/geeksforgeeks-%230F9D58.svg?style=plastic&logo=geeksforgeeks&logoColor=white"></a>
                &emsp;
                <a href="#"><img src="https://img.shields.io/badge/django-%23092E20.svg?&style=plastic&logo=django&logoColor=white"  alt=""/></a>
                &emsp;
                <a href="#"><img src="https://img.shields.io/badge/mysql-%234479A1.svg?&style=plastic&logo=mysql&logoColor=white" alt=""/></a>
              </div>
            </li>


<!--            <li class="rating flex-col space-y-3">-->
<!--              &lt;!&ndash;              <div>Python</div>&ndash;&gt;-->
<!--              <font-awesome-icon icon="fa-brands fa-python"/>-->
<!--              <div>-->
<!--                <input disabled type="radio" name="rating-1" class="mask mask-star"/>-->
<!--                <input disabled type="radio" name="rating-1" class="mask mask-star"/>-->
<!--                <input disabled type="radio" name="rating-1" class="mask mask-star"/>-->
<!--                <input disabled type="radio" name="rating-1" class="mask mask-star " checked/>-->
<!--                <input disabled type="radio" name="rating-1" class="mask mask-star"/>-->
<!--              </div>-->
<!--            </li>-->
<!--            <li class="rating flex-col space-y-3">-->
<!--              <font-awesome-icon icon="fa-solid fa-c"/>-->
<!--              <div>-->
<!--                <input disabled type="radio" name="rating-3" class="mask mask-star"/>-->
<!--                <input disabled type="radio" name="rating-3" class="mask mask-star"/>-->
<!--                <input disabled type="radio" name="rating-3" class="mask mask-star"/>-->
<!--                <input disabled type="radio" name="rating-3" class="mask mask-star" checked/>-->
<!--                <input disabled type="radio" name="rating-3" class="mask mask-star"/>-->
<!--              </div>-->
<!--            </li>-->

<!--            <li class="rating flex-col space-y-3">-->
<!--              <font-awesome-icon icon="fa-brands fa-java"/>-->
<!--              <div>-->
<!--                <input disabled type="radio" name="rating-2" class="mask mask-star"/>-->
<!--                <input disabled type="radio" name="rating-2" class="mask mask-star"/>-->
<!--                <input disabled type="radio" name="rating-2" class="mask mask-star" checked/>-->
<!--                <input disabled type="radio" name="rating-2" class="mask mask-star"/>-->
<!--                <input disabled type="radio" name="rating-2" class="mask mask-star"/>-->
<!--              </div>-->
<!--            </li>-->
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
        <div>
          <h2 class="card-title">My Works</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 py-3">
            <a data-sveltekit-prefetch="" href="./works/automate/">
            <div data-sal="slide-up" data-sal-duration="800">
              <img width="200" height="150" loading="lazy" class="lazyload h-44 w-full object-cover object-center rounded" src="https://picsum.photos/id/1/500/300" alt="Automate Tasks">
              <h3 class="font-semibold text-center">Automate Tasks</h3>
              <p class="text-sm text-center">A project to automate a lot of my daily mundane taks.</p>
            </div>
          </a><a data-sveltekit-prefetch="" href="./works/fake-news-detector/">
            <div data-sal="slide-up" data-sal-duration="800"><img width="200" height="150" loading="lazy"
                                                                  class="lazyload h-44 w-full object-cover object-center rounded"
                                                                  src="https://picsum.photos/id/1073/500/300"
                                                                  alt="Fake News Detector">
              <h3 class="font-semibold text-center">Fake News Detector</h3>
              <p class="text-sm text-center">A Python project to detect fake news on the Internet.</p></div>
          </a></div>
        </div>
      </div>
      <!--    <main class="col-span-12 md:col-span-8 shadow-lg md:rounded-lg bg-white p-4 md:p-8 overflow-hidden ml-5">-->
      <!--    </main>-->

    </div>
  </div>
</template>

<style scoped></style>
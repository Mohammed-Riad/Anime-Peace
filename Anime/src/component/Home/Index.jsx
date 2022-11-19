import React from 'react'

import img1 from '../img/2.png'
import img3 from '../img/3.png'
import img5 from '../img/5.png'
import img6 from '../img/6.png'
import img7 from '../img/7.png'
import img8 from '../img/8.png'
import img9 from '../img/9.png'
import img10 from '../img/10.png'

import {
    Link
} from "react-router-dom";


export default function Index() {




    return (

        <>
            <section>
                <div
                    id="carouselDarkVariant"
                    class="carousel slide carousel-fade carousel-dark relative height: 24rem;"
                    data-bs-ride="carousel"

                >

                    <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button
                            data-bs-target="#carouselDarkVariant"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            data-bs-target="#carouselDarkVariant"
                            data-bs-slide-to="1"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            data-bs-target="#carouselDarkVariant"
                            data-bs-slide-to="2"
                            aria-label="Slide 1"
                        ></button>
                    </div>


                    <div class="carousel-inner relative w-full overflow-hidden">

                        <div class="carousel-item active relative float-left w-full">
                            <img
                                src="https://wallpaperaccess.com/full/4724804.png"
                                class="block w-full"
                                alt="Motorbike Smoke"
                            />
                            <div class="carousel-caption hidden md:block absolute text-center">
                            </div>
                        </div>


                        <div class="carousel-item relative float-left w-full">
                            <img
                                src={img3}
                                class="block w-full"
                                alt="Mountaintop"
                            />
                            <div class="carousel-caption hidden md:block absolute text-center">
                            </div>
                        </div>


                        <div class="carousel-item relative float-left w-full">
                            <img
                                src={img1}
                                class="block w-full"
                                alt="Woman Reading a Book"
                            />
                            <div class="carousel-caption hidden md:block absolute text-center">
                            </div>
                        </div>
                    </div>

                    <button
                        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide="prev"
                    >
                        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide="next"
                    >
                        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </section>

            <br />
            <br />
            <br />


            <section class="bg-white-900 text-black w-full">
                <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="mx-auto max-w-lg text-center">
                        <h2 class="text-3xl font-bold sm:text-4xl">Anime Movie </h2>

                    </div>
                    <br />

                    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">







                        <div href="#" class="group relative block bg-black shadow-lg shadow-black cursor-pointer" >
                            <img
                                alt="Developer"
                                src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/qG3RYlIVpTYclR9TYIsy8p7m7AT.jpg"
                                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div class="relative p-8">
                                <p class="text-sm font-medium uppercase tracking-widest text-white">
                                    Grave of the Fireflies
                                </p>

                                <p class="text-2xl font-bold text-white">1988</p>

                                <div class="mt-64">
                                    <div
                                        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p class="text-sm text-white">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                            perferendis hic asperiores quibusdam quidem voluptates doloremque
                                            reiciendis nostrum harum. Repudiandae?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>








                        <div href="#" class="group relative block bg-black shadow-lg shadow-black cursor-pointer">
                            <img
                                alt="Developer"
                                src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg"
                                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div class="relative p-8">
                                <p class="text-sm font-medium uppercase tracking-widest text-white">
                                    Spirited Away
                                </p>

                                <p class="text-2xl font-bold text-white">2001</p>

                                <div class="mt-64">
                                    <div
                                        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p class="text-sm text-white">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                            perferendis hic asperiores quibusdam quidem voluptates doloremque
                                            reiciendis nostrum harum. Repudiandae?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>








                        <div href="#" class="group relative block bg-black shadow-lg shadow-black cursor-pointer">
                            <img
                                alt="Developer"
                                src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/vug1dvDI1tSa60Z8qjCuUE7ntkO.jpg"
                                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div class="relative p-8">
                                <p class="text-sm font-medium uppercase tracking-widest text-white">
                                    When Marnie Was There
                                </p>

                                <p class="text-2xl font-bold text-white">2014</p>

                                <div class="mt-64">
                                    <div
                                        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p class="text-sm text-white">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                            perferendis hic asperiores quibusdam quidem voluptates doloremque
                                            reiciendis nostrum harum. Repudiandae?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>






                        <div href="#" class="group relative block bg-black shadow-lg shadow-black cursor-pointer">
                            <img
                                alt="Developer"
                                src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/wOBU3SLjQ9358Km9YWYasPZyebp.jpg"
                                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div class="relative p-8">
                                <p class="text-sm font-medium uppercase tracking-widest text-white">
                                    The Red Turtle
                                </p>

                                <p class="text-2xl font-bold text-white">2016</p>

                                <div class="mt-64">
                                    <div
                                        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p class="text-sm text-white">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                            perferendis hic asperiores quibusdam quidem voluptates doloremque
                                            reiciendis nostrum harum. Repudiandae?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>





                        <div href="#" class="group relative block bg-black shadow-lg shadow-black cursor-pointer">
                            <img
                                alt="Developer"
                                src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/mikKSEdk5kLhflWXbp4S5mmHsDo.jpg"
                                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div class="relative p-8">
                                <p class="text-sm font-medium uppercase tracking-widest text-white">
                                    Ponyo
                                </p>

                                <p class="text-2xl font-bold text-white">2008</p>

                                <div class="mt-64">
                                    <div
                                        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p class="text-sm text-white">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                            perferendis hic asperiores quibusdam quidem voluptates doloremque
                                            reiciendis nostrum harum. Repudiandae?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>






                        <div href="#" class="group relative block bg-black shadow-lg shadow-black cursor-pointer"  >
                            <img
                                alt="Developer"
                                src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/TkTPELv4kC3u1lkloush8skOjE.jpg"
                                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div class="relative p-8">
                                <p class="text-sm font-medium uppercase tracking-widest text-white">
                                    Howl's Moving Castle
                                </p>

                                <p class="text-2xl font-bold text-white">2004</p>

                                <div class="mt-64">
                                    <div
                                        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p class="text-sm text-white">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                            perferendis hic asperiores quibusdam quidem voluptates doloremque
                                            reiciendis nostrum harum. Repudiandae?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>

                    <div class="mt-12 text-center cursor-pointer">
                        <Link to="/Animes"> <a
                            href="#"
                            class="mt-8 inline-flex items-center rounded border border-blue-800 bg-blue-600 px-8 py-3 text-white hover:bg-blue-500 focus:outline-none focus:ring active:text-white-500"
                        >

                            <span class="text-sm font-medium"> All Anime</span>
                            <svg
                                class="ml-3 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a></Link>

                    </div>
                </div>
            </section>




            <section class="overflow-hidden text-gray-700">

                <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                    <div class="mx-auto max-w-lg text-center">
                        <h2 class="text-black font-bold sm:text-4xl ">Gallery</h2>
                    </div>
                    <br />
                    <br />

                    <div class="flex flex-wrap -m-1 md:-m-2">
                        <div class="flex flex-wrap w-1/2">
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src={img5} />
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src={img6} />
                            </div>
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src={img7} />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src={img8} />
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src={img9} />
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src={img10} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
        </>

    )
}

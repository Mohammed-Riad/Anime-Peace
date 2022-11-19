import React, { useContext } from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { Favorite } from '../../models/favorite';

const baseURL = "https://gogoanime.consumet.org/popular";
const detailsURL = "https://gogoanime.consumet.org/anime-details";

export default function Animes() {

  const [animes, setanimes] = useState([baseURL]);
  const [search, setsearch] = useState("");
  const [fav, setfav] = useState({});
  const { auth } = useContext(AuthContext);

  let user = JSON.parse(localStorage.getItem('currentUser'));
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  let userFavorites;
  if(user) {
    userFavorites = favorites.filter(x => x.userId == user.userID);
  }

  const fetchAllData = () => {
    axios.get(baseURL).then((response) => {
      setanimes(response.data);
    });
  }

  const addToFav = (name) => {
    if (user) {
      let favorite = new Favorite();
      if (!favorites.some((fav) => fav.animeId == name && fav.userId == user.userID)) {
        favorite.animeId = name;
        favorite.userId = user.userID;
        favorites.push(favorite);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        fetchAllData();
      }
    }
  }

  const removeToFav = (name) => {
    if (user && favorites.findIndex((fav) => fav.animeId == name && fav.userId == user.userID) > 0) {
      const index = favorites.findIndex((fav) => fav.animeId == name && fav.userId == user.userID);
      favorites.splice(index,1);
      console.log(favorites)
      localStorage.setItem('favorites', JSON.stringify(favorites));
      fetchAllData();
    }
  }

  useEffect(() => {
    if (search) {
      let filter = animes?.filter(anime => {
        return anime.animeTitle.toLowerCase().includes(search.toLowerCase())
      })
      setanimes(filter)
    } else {
      fetchAllData()
    }
  }, [search])

  if (!animes) return null;

  return (

    <>
      <div>
        <div class="mx-auto max-w-lg text-center mt-10">
          <h2 class="text-3xl font-bold sm:text-4xl">
            <form>
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search For Anime ..." required onChange={(event) => setsearch(event.target.value)} />
              </div>
            </form>
          </h2>

        </div>
      </div>



      <section class="bg-white-900 text-black w-full">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-3xl font-bold sm:text-4xl">Animes </h2>

          </div>
          <br />

          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">




            {animes?.map((anime) => {
              return (

                <div href="#" class="group relative block bg-black shadow-lg shadow-black cursor-pointer">

                  <img
                    alt="Developer"
                    src={anime.animeImg}
                    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 cursor-auto "
                  />

                  <div class="relative p-8 ">
                    <p class="text-sm font-medium uppercase tracking-widest text-white text-2xl font-bold">
                      {anime.animeTitle}
                    </p>


                    <p class="text-2xl font-bold text-white">{anime.releasedDate}</p>

                    {
                      (user && userFavorites.some(x => x.animeId == anime.animeId)) ?
                        <button class="text-3xl font-bold text-white text-yellow-300 cursor-pointer">
                          <FaHeart onClick={() => removeToFav(anime.animeId)} />
                        </button>
                        :
                        <button class="text-3xl font-bold text-white text-white-300 cursor-pointer">
                          <FaHeart onClick={() => addToFav(anime.animeId)} />
                        </button>
                    }


                    <div class="mt-64">
                      <div
                        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        <p class=" text-2xl text-white m-1 ">
                          Click Here To Watch This   <a class="text-2xl text-white m-1 text-yellow-300  " target="_blanck" href={anime.animeUrl}>Anime</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>


        </div>
      </section>

    </>





  )
}













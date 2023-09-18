import {
  RocketLaunchIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export default function IndexHero() {
  return (
    <main className=" h-[60vh] shadow-xl lg:h-[80vh] bg-[url(/assets/img/herobg.jpg)] bg-cover">
      <div className="h-full w-full backdrop-blur-sm">
        <div className="container mx-auto flex justify-center items-center gap-2 lg:gap-10 h-full flex-col text-center">
          <h1 className="px-5 text-xl lg:text-5xl italic font-bold __border_custom_h leading-snug">
            Anak Sawit&trade; | Jelajahi Potensi Luar Biasa Industri Sawit Indonesia
            Bersama Kami!
          </h1>
          <p className="text-slate-50 text-sm text-justify lg:text-center __border_custom_p px-5 lg:text-2xl leading-snug italic  mt-1">
            Selamat datang di website terpercaya kami. Tingkatkan produktivitas
            perkebunan Anda dan dukung pertumbuhan industri kelapa sawit
            Indonesia dengan memilih bibit unggul berkualitas hanya di website
            kami. Dapatkan bibit unggul berkualitas tinggi dan peluang investasi
            yang tak terbatas untuk perkebunan sawit Anda. Temukan solusi
            terbaik untuk investasi masa depan Anda sekarang!
          </p>
          <div className="flex gap-2 w-full justify-evenly lg:justify-center">
            <button className="border animate-pulse border-slate-50 text-slate-50 bg-teal-500 py-1 px-2 rounded-md shadow-lg hover:scale-95 transition-all duration-300 active:outline-double active:scale-90">
              <RocketLaunchIcon className="w-6 h-6 inline-block" /> Jelajah Anak
              Sawit
            </button>

            <button className="border-slate-50 border text-slate-50 py-1 px-2 rounded-md shadow-lg hover:scale-95 transition-all duration-300 active:outline-double active:scale-90">
              <UserPlusIcon className="h-6 w-6 inline-block" /> Register
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

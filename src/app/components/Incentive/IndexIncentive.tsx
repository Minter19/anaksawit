import { BanknotesIcon, BeakerIcon, TrophyIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function IndexIncentive() {
  return (
    <div className='h-[50vh] container mx-auto pt-20'>
        <h2 className='font-bold text-3xl leading-snug w-1/2 text-green-500'>Kenapa harus memilih Anak Sawit ?</h2>
        <p className='leading-snug w-1/2 text-slate-600 mt-2'>At the beginning at least, but then we realized we could make a lot more money if we kinda stopped caring about that. Our new strategy is to write a bunch of things that look really good in the headlines, then clarify in the small print but hope people don&apos;t actually read it.</p>
        <div className='flex gap-4 justify-evenly'>
            <figure className='py-10'>
                <UserGroupIcon className='w-14 h-14 mb-5 text-red-500' /> Konsultasi Gratis
                <p className='text-xs pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum libero neque molestiae sint iusto odit doloribus provident vitae nam.</p>
            </figure>
            <figure className='py-10'>
                <BanknotesIcon className='w-14 h-14 mb-5 text-orange-500' /> Harga Termurah
                <p className='text-xs pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum libero neque molestiae sint iusto odit doloribus provident vitae nam.</p>
            </figure>
            <figure className='py-10'>
                <TrophyIcon className='w-14 h-14 mb-5 text-yellow-500' /> Kualitas Premium
                <p className='text-xs pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum libero neque molestiae sint iusto odit doloribus provident vitae nam.</p>
            </figure>
        </div>
    </div>
  )
}

import { PhotoIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Image from 'next/image'

export default function IndexGallery() {
  return (
    <div className='container mx-auto'>
        <h2 className='p-3 text-2xl'><PhotoIcon className='w-10 h-10 inline-block' /> Galeri Kami</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            <figure className='p-3'><Image className='__img_gallery' width={500} height={500} src="/assets/img/1.jpg" alt="ig" /></figure>
            <figure className='p-3'><Image className='__img_gallery' width={500} height={500} src="/assets/img/2.jpg" alt="ig" /></figure>
            <figure className='p-3'><Image className='__img_gallery' width={500} height={500} src="/assets/img/3.jpg" alt="ig" /></figure>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            <figure className='p-3'><Image className='__img_gallery' width={500} height={500} src="/assets/img/4.jpg" alt="ig" /></figure>
            <figure className='p-3'><Image className='__img_gallery' width={500} height={500} src="/assets/img/5.jpg" alt="ig" /></figure>
            <figure className='p-3'><Image className='__img_gallery' width={500} height={500} src="/assets/img/6.jpg" alt="ig" /></figure>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            <figure className='p-3'><Image className='__img_gallery' width={500} height={500} src="/assets/img/7.jpg" alt="ig" /></figure>
            <figure className='p-3'><Image className='__img_gallery' width={500} height={500} src="/assets/img/8.jpg" alt="ig" /></figure>
            <figure className='p-3'><Image className='__img_gallery' width={500} height={500} src="/assets/img/9.jpg" alt="ig" /></figure>
        </div>
        
    </div>
  )
}

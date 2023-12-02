import GalleryCard from '../../../Components/Gallery/GalleryCard';

function Gallery() {
  return (
    <div className="flex-grow p-6 overflow-auto">
      <div className="flex my-6 items-center gap-20">
        <span className="text-4xl font-semibold ">Galeria</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <GalleryCard imgSrc='https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg' />
          <GalleryCard imgSrc='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' />
          <GalleryCard imgSrc='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' />
          <GalleryCard imgSrc='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' />
          <GalleryCard imgSrc='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' />
          <GalleryCard imgSrc='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' />
          <GalleryCard imgSrc='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg' />
          <GalleryCard imgSrc='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg' />
          <GalleryCard imgSrc='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg' />
          <GalleryCard imgSrc='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg' />
          <GalleryCard imgSrc='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg' />
      </div>

    </div>
  )
}

export default Gallery;
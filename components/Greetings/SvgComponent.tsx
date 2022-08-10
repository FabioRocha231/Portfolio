import Image from 'next/image'

export const SvgComponent = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-t from-blue-700 via-blue-800 to-black">
      <Image
        src="/images/mainImage.svg"
        alt="a developer image"
        width={700}
        height={700}
      />
    </div>
  )
}

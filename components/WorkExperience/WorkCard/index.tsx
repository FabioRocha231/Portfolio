import Image from 'next/image'

interface WorkCardProps {
  company: 'apex' | 'solcraft'
}

export const WorkCard = ({ company }: WorkCardProps) => {
  return (
    <section className="mt-10 flex flex-col items-center justify-center">
      <Image
        src={
          company === 'apex'
            ? '/images/apexLogo.png'
            : '/images/solcraft-logo.webp'
        }
        width={300}
        height={300}
        objectFit={'contain'}
        alt="Company Logo"
        className="rounded-2xl"
      />
    </section>
  )
}

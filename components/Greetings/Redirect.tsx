import Link from 'next/link'
import { memo } from 'react'

export interface RedirectProps {
  to: string
  content: string
}

const Redirect = ({ to, content }: RedirectProps) => {
  return (
    <Link href={to}>
      <a className="rounded-xl bg-slate-300 p-2 text-lg font-medium underline lg:text-slate-500 xl:p-1 xs:text-base">
        {content}
      </a>
    </Link>
  )
}

export default memo(Redirect)

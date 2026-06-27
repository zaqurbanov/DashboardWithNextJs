import Link from 'next/link'
import SearchInput from './menuSearch/SearchInput'

interface Props {
  placeholder: string
  link: string
}

const MenuTop = ({ placeholder, link }: Props) => {
  return (
    <div className='flex justify-between items-center p-5 neu-flat rounded-2xl gap-4'>
      <SearchInput placeholder={placeholder} />
      <Link
        href={link}
        className='neu-button text-sm font-semibold py-2 px-5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shrink-0'
        style={{ color: 'var(--color-primary)' }}
      >
        + Add
      </Link>
    </div>
  )
}

export default MenuTop

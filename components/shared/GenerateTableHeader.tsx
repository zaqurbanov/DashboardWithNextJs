import { TableHeader } from '@/types/table/header'

const GenerateTableHeader = ({ headers }: { headers: TableHeader[] }) => {
  return (
    <>
      {headers.map((header: TableHeader) => {
        return (
          <th key={header.key} className='p-3 neu-inset rounded-xl '>
            {header.label}
          </th>
        )
      })}

    </>
  )
}

export default GenerateTableHeader
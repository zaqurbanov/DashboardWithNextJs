import { TableHeader } from '@/types/table/header'

const GenerateTableHeader = ({ headers }: { headers: TableHeader[] }) => {
  return (
    <>
      {headers.map((header: TableHeader) => {
        return (
          <th key={header.key}>
            {header.label}
          </th>
        )
      })}

    </>
  )
}

export default GenerateTableHeader
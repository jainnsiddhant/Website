import { useMemo } from 'react';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { data} from './makeData';

const Example = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'logo',
        header: 'Profile Photo',  
        Cell: ({ cell }) => <img className='w-20 h-10 rounded-full' src={cell.getValue()} />,
      },
      {
        accessorKey: 'university',
        header: 'University',
        filterVariant: 'text',  
      }, 
      {
        accessorKey: 'name',
        header: 'Name',
        filterVariant: 'text',  
      },
      {
        accessorKey: 'view',
        header: 'View',
        Cell: ({ cell }) => <a className='text-blue-500 underline' target='_blank' href={cell.getValue()} >Link</a>,
      }
    ],
    [],
  );

  const table = useMantineReactTable({
    columns,
    data, 
    icons:{},
    initialState: { showColumnFilters: false },
  });

  return (
    <div className='p-4 md:p-6 mt-5'>
    <MantineReactTable  table={table}  />
    </div>
  )
};

export default Example;
import { useMemo } from 'react';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { data} from './makeData';

const Example = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'logo',
        header: 'Profile Photo',  
        Cell: ({ cell }) => <img src={cell} />,
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
        header: 'View'
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
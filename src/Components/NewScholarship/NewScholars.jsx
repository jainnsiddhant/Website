import React , {useMemo} from 'react'
import { useReactTable , getCoreRowModel , flexRender } from '@tanstack/react-table'
import mData from "./MockData.json"
import './NewScholars.css';
import { motion } from 'framer-motion';

const NewScholars = () => {
    const data = useMemo(() => mData, [])

    const columns = [
        {
            header: "ID",
            accessorKey: "id",
            footer: "ID",
        },
        {
            header: "Name",
            accessorKey: "name",
            footer: "Name",
        },
        {
            header: "Start Time",
            accessorKey: "startTime",
            footer: "Start Time",
        },
        {
            header: "End Time",
            accessorKey: "endTime",
            footer: "End Time",
        },
        {
            header: "Price",
            accessorKey: "price",
            footer: "Price",
        },
        {
            header: "Link",
            accessorKey: "action",
            footer: "Link",
        },
    ]

    const table = useReactTable({data, columns, getCoreRowModel: getCoreRowModel()})
  return (
    <> 
       <div className='w-[80%] mx-auto'>
       <div className="py-4 px-4">
                    <h2 data-aos='fade-right' className='mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
                        All Scholarships
                    </h2>
                    <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                        <div className='space-x-3'>
                        <button 
                                    type="button" 
                                    style={{
                                            color: 'white',
                                            backgroundImage: 'linear-gradient(to right, #3b82f6, #2563eb)',
                                            boxShadow: '0 0 0 1px rgba(66, 153, 225, 0.5), 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
                                            borderRadius: '0.375rem',
                                            fontSize: '0.875rem',
                                            padding: '0.625rem 1.25rem',
                                            textAlign: 'center',
                                            marginRight: '0.5rem',
                                            marginBottom: '0.5rem',
                                            outline: 'none',
                                            transition: 'background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                                          }} 
                                          className='text-lg'
                                    onClick={() => window.open('www.google.com', '_blank')}
                                    >
                                    All
                                </button>
                                 <button 
                                    type="button" 
                                    style={{
                                            color: 'white',
                                            backgroundImage: 'linear-gradient(to right, #3b82f6, #2563eb)',
                                            boxShadow: '0 0 0 1px rgba(66, 153, 225, 0.5), 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
                                            borderRadius: '0.375rem',
                                            fontSize: '0.875rem',
                                            padding: '0.625rem 1.25rem',
                                            textAlign: 'center',
                                            marginRight: '0.5rem',
                                            marginBottom: '0.5rem',
                                            outline: 'none',
                                            transition: 'background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                                          }} 
                                          className='text-lg'
                                    onClick={() => window.open('www.google.com', '_blank')}
                                    >
                                    Active
                                </button>
                                 <button 
                                    type="button" 
                                    style={{
                                            color: 'white',
                                            backgroundImage: 'linear-gradient(to right, #3b82f6, #2563eb)',
                                            boxShadow: '0 0 0 1px rgba(66, 153, 225, 0.5), 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
                                            borderRadius: '0.375rem',
                                            fontSize: '0.875rem',
                                            padding: '0.625rem 1.25rem',
                                            textAlign: 'center',
                                            marginRight: '0.5rem',
                                            marginBottom: '0.5rem',
                                            outline: 'none',
                                            transition: 'background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                                          }} 
                                          className='text-lg'
                                    onClick={() => window.open('www.google.com', '_blank')}
                                    >
                                    Archived
                                </button>
                        </div>
                    </p>
        </div>
        <table>
            <thead>
               {table.getHeaderGroups().map(headerGroup => (
                   <tr key={headerGroup.id}>
                       {headerGroup.headers.map(header =>(
                           <th key={header.id}>
                              {flexRender(
                                   header.column.columnDef.header , header.getContext()
                               )}
                           </th>
                       ))}
                   </tr>
               ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>
                            {flexRender(cell.column.columnDef.cell , cell.getContext())}
                        </td>
                    ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
               {table.getFooterGroups().map(footerGroup => (
                   <tr key={footerGroup.id}>
                       {footerGroup.headers.map(header =>(
                           <th key={header.id}>
                              {flexRender(
                                   header.column.columnDef.header , header.getContext()
                               )}
                           </th>
                       ))}
                   </tr>
               ))}
            </tfoot>
        </table>
       </div>
    </>
  )
}

export default NewScholars
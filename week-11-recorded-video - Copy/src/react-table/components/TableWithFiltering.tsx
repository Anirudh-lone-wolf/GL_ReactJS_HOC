// import React from 'react';
// import { useTable, useGlobalFilter, Column } from 'react-table';

// import './Table.css';

// const TableWithFiltering = ({ columns, data } : { columns : Column<object>[], data : any } ) => {
//     /**
//      * Accept state, setGlobalFilter as well, by passing in useGlobalFilter hook as the second argument to useTable
//      */
//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow,
//         state,
//         setGlobalFilter
//     } = useTable(
//         {
//             columns,
//             data
//         },
//         useGlobalFilter
//     );

//     /**
//      * Extract globalFilter from state
//      */

//     return (
//         <>
//             {
//                 /**
//                  * Create an controlled input that derives its value from globalFilter
//                  * Call setGlobalFilter on changes 
//                  */
//                 <input
//                     type="search"
//                     value={state.globalFilter}
//                     onChange={( event : React.ChangeEvent<HTMLInputElement> ) => setGlobalFilter( event.target.value )}
//                 />
//             }
//             <table {...getTableProps()}>
//                 <thead>
//                     {
//                         headerGroups.map(headerGroup => (
//                             <tr {...headerGroup.getHeaderGroupProps()}>
//                                 {
//                                     headerGroup.headers.map(column => (
//                                         <th {...column.getHeaderProps()}>
//                                             {column.render('Header')}
//                                         </th>
//                                     ))
//                                 }
//                             </tr>
//                         ))
//                     }
//                 </thead>
//                 <tbody {...getTableBodyProps()}>
//                     {
//                         rows.map((row, i) => {
//                             prepareRow( row );

//                             return (
//                                 <tr {...row.getRowProps()}>
//                                     {
//                                         row.cells.map(cell => (
//                                             <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                                         ))
//                                     }
//                                 </tr>
//                             );
//                         })
//                     }
//                 </tbody>
//             </table>
//         </>
//     )
// };

// export default TableWithFiltering;
//-------------------------------------------------------------------------------------------------

/* import Table CSS */
import { Column, useTable, useGlobalFilter } from "react-table";
import "./Table.css";

type Props = {
    columns : Column<object>[],
    data : any
}
/**
 * Define and export TableBasic component that accepts columns of type Column<object>[] and data
*/
const TableWithFiltering = ( {columns, data} : Props ) => {
    /**
     * Use the state and functions returned from useTable to build the UI
     *
     * Get getTableProps, getTableBodyProps, headerGroups, rows, prepareRow by calling useTable and pasing columns, data as argument
    */
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter } = useTable({
        columns,
        data
    }, useGlobalFilter)

    return (
        <>
            {/* /**
            * Create an controlled input that derives its value from globalFilter
            * Call setGlobalFilter on changes 
            */ }
            <input type="search" value={state.globalFilter}
            onChange={ (event : React.ChangeEvent<HTMLInputElement>) => 
            setGlobalFilter( event.target.value )}/>
            {/* /**
            * Render the UI for the table
            *
            * table: Pass props obtained using getTableProps()
            *
            * head row: Render a row within thead for every headerGroup in headerGroups, passing headerGroup.getHeaderGroupProps() to the row
            *
            * heading cells : Render a heading cell for every header in headerGroup.headers, passing header.getHeaderProps() to the heading cell - the text within the cell is obtained by calling header.render()
            */ }
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map( headerGroup => <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map( header => (
                                    <th {...header.getHeaderProps()}>
                                        {
                                            header.render( 'Header' )
                                        }
                                    </th>
                                ) )
                            }  
                        </tr> )
                    }
                </thead>

        {/* /**
        * table body: Pass props obtained using getTableBodyProps()
        *
        * Iterate through rows and render an array of rows. Make sure to prepareRow passing it row
        *
        * table row: Pass props obtained using row.getRowProps()
        *
        * table cells: Iterate through row.cells and render data cells - pass cell.getCellProps() to a cell - the text within the cell is obtained by calling cell.render( 'Cell' )
        */ }
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map( ( row, i) => {
                            prepareRow( row );
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map( 
                                            cell => (
                                                <td {...cell.getCellProps()}>
                                                    {cell.render( 'Cell' )}
                                                </td>
                                            )
                                        )
                                    }
                                </tr>
                            )
                        } )
                    }
                </tbody>
            </table>
        </>
    
    
   
    );
    
    
};

export default TableWithFiltering;

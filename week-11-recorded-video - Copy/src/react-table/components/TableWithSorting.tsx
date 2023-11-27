// import React from 'react';
// import { useTable, useSortBy, Column } from 'react-table';

// import './Table.css';

// const TableWithSorting = ({ columns, data } : { columns : Column<object>[], data : any } ) => {
//     /**
//      * Pass in useSortBy hook as the second argument to useTable
//      */
//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow
//     } = useTable(
//         {
//             columns,
//             data
//         },
//         useSortBy
//     );

//     return (
//         <table {...getTableProps()}>
//             <thead>
//                 {
//                     headerGroups.map(headerGroup => (
//                         <tr {...headerGroup.getHeaderGroupProps()}>
//                             {
//                                 headerGroup.headers.map(column => (
//                                     /**
//                                      * Pass in column.getSortByToggleProps() to getHeaderProps
//                                      */
//                                     <th {...column.getHeaderProps( column.getSortByToggleProps() )}>
//                                         {column.render('Header')}
//                                         <span>
//                                             {
//                                                 /**
//                                                  * Use column.isSorted and column.isSortedDesc to show &darr; or &uarr; (or nothing) as indicator
//                                                  */
//                                                 column.isSorted ? (
//                                                     column.isSortedDesc ? (
//                                                         <span>&darr;</span>
//                                                     ) : (
//                                                         <span>&uarr;</span>
//                                                     )
//                                                 ) : (
//                                                     <span></span>
//                                                 )
//                                             }
//                                         </span>
//                                     </th>
//                                 ))
//                             }
//                         </tr>
//                     ))
//                 }
//             </thead>
//             <tbody {...getTableBodyProps()}>
//                 {
//                     rows.map((row, i) => {
//                         prepareRow( row );

//                         return (
//                             <tr {...row.getRowProps()}>
//                                 {
//                                     row.cells.map(cell => (
//                                         <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                                     ))
//                                 }
//                             </tr>
//                         );
//                     })
//                 }
//             </tbody>
//         </table>
//     )
// };

// export default TableWithSorting;
//-----------------------------------------------------------------------------------------------
import React from 'react';
import { useTable, useSortBy, Column } from 'react-table';
import './Table.css';

type Props = {
    columns: Column<object>[],
    data: any
};


const TableWithSorting = ( {columns, data} : Props ) => {
    /**
     * Use the state and functions returned from useTable to build the UI
     *
     * Get getTableProps, getTableBodyProps, headerGroups, rows, prepareRow by calling useTable and pasing columns, data as argument
    */

    /**
    * Pass in useSortBy hook as the second argument to useTable
     */
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data
    }, useSortBy)

    return (
    /**
     * Render the UI for the table
     *
     * table: Pass props obtained using getTableProps()
     *
     * head row: Render a row within thead for every headerGroup in headerGroups, passing headerGroup.getHeaderGroupProps() to the row
     *
     * heading cells : Render a heading cell for every header in headerGroup.headers, passing header.getHeaderProps() to the heading cell - the text within the cell is obtained by calling header.render()
    */
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map( headerGroup => <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map( column => (
                                /**
                                * Pass in column.getSortByToggleProps() to getHeaderProps
                                */
                                <th {...column.getHeaderProps( column.getSortByToggleProps() )}>
                                    {
                                        column.render( 'Header' )
                                    }
                                    <span>
                                        {
                                            /**
                                            * Use column.isSorted and column.isSortedDesc to show &darr; or &uarr; (or nothing) as indicator
                                            */
                                            column.isSorted ? (
                                                column.isSortedDesc ? (
                                                    <span>&darr;</span>
                                                ) : (
                                                    <span>&uarr;</span>
                                                )
                                            ) : (
                                                <span></span>
                                            )
                                        }
                                    </span>
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
                    rows.map( row => {
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
    
   
    );
    
    
};


export default TableWithSorting;
/* Header, accessor for name, language, genres (with Cell mapper function that receives value prop) */

/* Header for Info column, nested columns for premiered, runtime, rating.average, status */

// const columns = [
//     {
//         Header: 'Name',
//         accessor: 'name'
//     },
//     {
//         Header: 'Language',
//         accessor: 'language'
//     },
//     {
//         Header: 'Genres',
//         accessor: 'genres',
//         Cell: ( props : any ) => props.value.join( ', ')
//     },
//     {
//         Header: 'Info',
//         columns: [
//             {
//                 Header: 'Premiered',
//                 accessor: 'premiered'
//             },
//             {
//                 Header: 'Runtime (mins)',
//                 accessor: 'runtime'
//             },
//             {
//                 Header: 'Rating',
//                 accessor: 'rating.average'
//             },
//             {
//                 Header: 'Status',
//                 accessor: 'status'
//             }
//         ]
//     }
// ];

const columns = [
  {
    Header: "Name",
    accessor: "name",
  },

  {
    Header: "Language",
    accessor: "language",
  },

  {
    Header: "Genres",
    accessor: "genres",
    Cell: (props: any) => props.value.join(","),
  },

  {
    Header: "Info",
    columns: [
      {
        Header: "Premiered",
        accessor: "premiered",
      },

      {
        Header: "Runtime (Minutes)",
        accessor: "runtime",
      },

      {
        Header: "Rating",
        accessor: "rating.average",
      },

      {
        Header: "Status",
        accessor: "status",
      },
    ],
  },
];

export default columns;

import React, { useMemo } from 'react'
import TableWithSorting from './components/TableWithSorting';

import columnsConfig from './columns';
import shows from './shows';

function App() {
    const columns = useMemo( () => columnsConfig, [] );
    const data = useMemo( () => shows, [] );

    return <TableWithSorting columns={columns} data={data} />;
}

export default <App />;

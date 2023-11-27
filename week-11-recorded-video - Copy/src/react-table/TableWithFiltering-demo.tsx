import React, { useMemo } from 'react'
import TableWithFiltering from './components/TableWithFiltering';

import columnsConfig from './columns';
import shows from './shows';

function App() {
    const columns = useMemo( () => columnsConfig, [] );
    const data = useMemo( () => shows, [] );

    return <TableWithFiltering columns={columns} data={data} />;
}

export default <App />;


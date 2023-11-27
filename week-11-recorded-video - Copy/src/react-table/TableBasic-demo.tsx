/* export App component instance that renders a TableBasic element */
import TableBasic from './components/TableBasic';
import columns from './columns';
import shows from './shows';
import { useMemo } from 'react';

const App = () => {
    const columnsConfig = useMemo( () => columns, [] );
    const data = useMemo( () => shows, [] );

    return <TableBasic columns={columnsConfig} data={data} />
};

export default <App />;
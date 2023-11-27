import React from 'react';

type Props = {
    value: string
};

const Email = ( { value } : Props ) => {
    return <div>{value}</div>
};

export default Email;
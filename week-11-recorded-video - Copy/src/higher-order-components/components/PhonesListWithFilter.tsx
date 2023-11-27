import React, { Component } from 'react';
import withFilter from './withFilter';

type Item = {
    id: number,
    name: string,
    platform: string
};

type Props = {
    items: Item[],
    title: string
};

class PhonesList extends Component<any> {

    render() {
        const { filterKey, filteredItems, filter } = this.props;

        return (
            <>
                <h1>{this.props.title}</h1>
                <hr />
                <input
                    type="search"
                    placeholder="Search by platform"
                    value={filterKey}
                    onChange={( event ) => filter( event.target.value )}
                />
                <ul>
                {
                    filteredItems.map( (item : any) => <li key={item.id}>{item.name} ({item.platform})</li> )
                }
                </ul>
            </>
        );
    }
};

export default withFilter(PhonesList, "platform");
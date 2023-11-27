import React, { Component } from 'react';

type Item = {
    id: number,
    name: string,
    platform: string
};

type Props = {
    items: Item[],
    title: string
};

type State = {
    filterKey: string,
    filteredItems: Item[]
}

class PhonesList extends Component<Props, State> {
    state = {
        filterKey: '',
        filteredItems: this.props.items
    };

    filter = ( filterKey : string ) => {
        this.setState({
            filterKey,
            filteredItems: this.props.items.filter( item => item['platform'].toUpperCase().includes( filterKey.toUpperCase() ) )
        });
    }

    render() {
        const { filterKey, filteredItems } = this.state;

        return (
            <>
                <h1>{this.props.title}</h1>
                <hr />
                <input
                    type="search"
                    placeholder="Search by platform"
                    value={filterKey}
                    onChange={( event ) => this.filter( event.target.value )}
                />
                <ul>
                {
                    filteredItems.map( item => <li key={item.id}>{item.name} ({item.platform})</li> )
                }
                </ul>
            </>
        );
    }
};

export default PhonesList;
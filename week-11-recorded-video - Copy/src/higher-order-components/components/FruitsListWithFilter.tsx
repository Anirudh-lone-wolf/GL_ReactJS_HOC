import React, { Component } from 'react';
import withFilter from './withFilter';

type Item = {
    id: number,
    name: string
};

type Props = {
    items: Item[]
};

// type State = {
//     filterKey: string,
//     filteredItems: Item[]
// }

class FruitsList extends Component<any> {
    
    render() {
        const { filterKey, filteredItems, filter } = this.props

        return (
            <>
                <h1>FruitsList component</h1>
                <hr />
                {/* <input
                    type="search"
                    placeholder="Search by name"
                    value={filterKey}
                    onChange={( event ) => this.filter( event.target.value )}
                /> */}
                <input type="search" placeholder="Search by name" value={filterKey}
                onChange={( event ) => filter( event.target.value ) }/>

                <ul>
                {
                    filteredItems.map( ( item : any ) => <li key={item.id}>{item.name}</li> )
                }
                </ul>
            </>
        );
    }
};

export default withFilter(FruitsList, "name"); 
import React, { Component } from 'react';

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

type State = {
    filterKey : string,
    filteredItems : Item[]
}

class FruitsList extends Component<Props, State> {
    // state = {
    //     filterKey: '',
    //     filteredItems: this.props.items
    // };

    state = {
        filterKey : '',
        filteredItems : this.props.items
    }

    // filter = ( filterKey : string ) => {
    //     this.setState({
    //         filterKey,
    //         filteredItems: this.props.items.filter( item => item['name'].toUpperCase().includes( filterKey.toUpperCase() ) )
    //     });
    // }

    filter = ( filterKey : string ) => {
        this.setState( {
            filterKey,
            filteredItems : this.props.items.filter( item => item['name'].toLowerCase().includes( filterKey.toLowerCase() ) )
        } );
    };

    render() {
        const { filterKey, filteredItems } = this.state;

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
                onChange={( event ) => this.filter( event.target.value ) }/>

                <ul>
                {
                    filteredItems.map( item => <li key={item.id}>{item.name}</li> )
                }
                </ul>
            </>
        );
    }
};

export default FruitsList;
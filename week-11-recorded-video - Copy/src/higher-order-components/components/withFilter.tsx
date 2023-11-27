import React, {Component} from "react";

const withFilter = ( WrappedComponent : any, itemKey : string ) => {
    return class WrappedComponent extends Component<any, any> {
        state = {
            filterKey : '',
            filteredItems : this.props.items
        }

        filter = ( filterKey : string ) => {
            this.setState( {
                filterKey,
                filteredItems : this.props.items.filter( (item :any) => item[itemKey].toLowerCase().includes( filterKey.toLowerCase() ) )
            } );
        };

        render(){
            return <WrappedComponent {...this.state} {...this.props} filter = {this.filter}/>
        }
    } 
}

export default withFilter;
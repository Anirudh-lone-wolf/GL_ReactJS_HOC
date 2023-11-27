
import React, {Component} from "react"
import Item from "../models/Item";
import { fetchProductsOfPage } from "../services/products";

type Props = {  };
type State = { 
    page : number,
    status : 'LOADING' | 'LOADED' | 'ERROR_LOADING',
    products : Item[],
    error : Error | any
};

class LifecycleDemo extends Component<Props, State> {
    constructor( props : Props ) {
        super( props );
        console.log( 'inside constructor' );
        

        this.state = {
            page : 1,
            status : 'LOADING',
            products : [],
            error : null
        }
    }

    nextPage = (  ) => {
        this.setState(
            state => {//this is used whenenevernew state depends upon the current state
                return {
                    page : state.page + 1
                }
            }
        )
    }

    render() {
        console.log( 'inside render' );
        const {page, status, products, error } = this.state;
        return (
            <>
                {status === 'LOADING' && <div>Loading Products</div>}
                {status === 'ERROR_LOADING' && <div>{error?.message}</div>}
                {
                    status === 'LOADED' && (
                        <>
                            <button onClick={this.nextPage}>Next Page</button>
                            <span >You are on page {page}</span>
                            <ul>
                                {
                                    products.map(
                                        ( { id, name } ) => <li key={id}>{name}</li>
                                    )
                                }
                            </ul>
                        </>
                    )
                }
            </>
        )
    }

    async fetchProductsOfPage() {
        this.setState({
            status : 'LOADING'
        })

        try {
            const products = await fetchProductsOfPage( this.state.page );
            this.setState({
                status : 'LOADED',
                products
            });
        } catch( error ) {
            this.setState({
                status : 'ERROR_LOADING',
                error
            });
        }
        
    }

    componentDidMount() {
        console.log( 'inside compmonentDidMount' );
        this.fetchProductsOfPage();
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        console.log( 'inside compmonentDidUpdate' );
        if( prevState.page !== this.state.page ) {
            this.fetchProductsOfPage();
        }
    }

    componentWillUnmount() {
        console.log( 'inside compmonentWillUnmount' );
    }
}

export default LifecycleDemo;
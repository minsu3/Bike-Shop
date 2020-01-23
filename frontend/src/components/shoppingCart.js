import React, { Component } from 'react';

class shoppingCart extends Component {
    state = {
        key: '',
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        return fetch(`http://localhost:9000/api/specializedbikes`)
        .then(response => {
            response.json
            response.filter((index) => {
                if (index.brand_name == "Specialized") {
                    this.setState({
                        brand_name: index.brand_name
                    })
                }
            }
        )}
    )}    
    render() {
        return (
            <div>
                <h2>Shopping Cart</h2>
            </div>
        )
    }
}

export default shoppingCart;
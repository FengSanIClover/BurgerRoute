import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../withErrorHandler/WithErrorHandler';

class Orders extends Component {

    state = {
        orders: [],
        loading: false
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {

                const fetchedOrders = [];

                for (let key in res.data) {
                    // console.log(key)
                    // console.log(...res.data[key])
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }

                this.setState({
                    orders: fetchedOrders,
                    loading: false
                })
                // console.log(res);
                // console.log(fetchedOrders)
            })
            .catch(err => {
                // console.log(err);
                this.setState({
                    loading: false
                })
            })
    }

    render() {
        return (
            <div>
                <Order />
                <Order />
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios);
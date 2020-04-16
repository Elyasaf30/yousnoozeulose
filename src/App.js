import React from 'react'

import styles from './App.module.css'

import { Cards, Chart, CountryPicker } from './components'
import { fetchData } from './api';

class App extends React.Component {
    state = {
        data: {},
    }

    async componentDidMount() {
        console.log('mount');
        const response = await fetchData();
        this.setState({ data: response })
    }

    render() {
        const { data } = this.state;
        console.log('render')
        return (
            <div className={styles.container} >
                <Cards data={data} />
                <Chart />
                <CountryPicker />
            </div>
        )
    }
}

export default App

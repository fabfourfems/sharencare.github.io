import React, { Component } from 'react';
import ReactChartkick, { ColumnChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

class FoodbankDashboard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <ColumnChart id = "categorychart" data={[["Produce", 32], ["Canned Food", 46], ["Pantry Goods", 28]]} />
        );
    }

}

export default FoodbankDashboard;
import React, { Component } from 'react';
import ReactChartkick, { ColumnChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FoodbankDataTable from './FoodbankDataTable';
import Button from '@material-ui/core/Button';


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
            <div>
                <div className="row">
                    <div>
                        <h2 id="title">Supply Tracker</h2>
                        <ColumnChart id="categorychart" data={[["Produce", 32], ["Canned Food", 46], ["Pantry Goods", 28]]} />
                    </div>
                    <div id="lowon">
                        <Card>
                            <CardContent id="setOrange" className="content">
                                <h2>Low On</h2>
                            </CardContent>
                        </Card>

                        <Card id="expiring">
                            <CardContent id="setYellow" className="content">
                                <h2>Expiring Soon</h2>

                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="table">
                    <Button variant="contained" id="add">Add Item</Button>
                    <FoodbankDataTable />
                </div>

                <br />
                <br />

            </div>
        );
    }

}

export default FoodbankDashboard;
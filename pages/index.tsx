import React from 'react';

import PieChart, {Connector, Export, Label, Series, Size,} from 'devextreme-react/pie-chart';

import {areas} from '../src/data.js';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
`;

class App extends React.Component {
    constructor(props: Readonly<'P'> | 'P') {
        super(props);

        this.pointClickHandler = this.pointClickHandler.bind(this);
        this.legendClickHandler = this.legendClickHandler.bind(this);
    }


    render() {
        // @ts-ignore
        return (
            <Container>
                <PieChart
                    id="pie"
                    dataSource={areas}
                    palette="Bright"
                    title="Percentual de linguagens dominadas"
                    onPointClick={this.pointClickHandler}
                    onLegendClick={this.legendClickHandler}
                >
                    <Series
                        argumentField="country"
                        valueField="area"
                    >
                        <Label visible={true}>
                            <Connector visible={true} width={1}/>
                        </Label>
                    </Series>

                    <Size width={500}/>
                    <Export enabled={true}/>
                </PieChart>
            </Container>
        );
    }

    pointClickHandler(e) {
        this.toggleVisibility(e.target);
    }

    legendClickHandler(e) {
        const arg = e.target;
        const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

        this.toggleVisibility(item);
    }

    toggleVisibility(item) {
        item.isVisible() ? item.hide() : item.show();
    }
}

export default App;

import React from 'react';
import SelectBox from 'devextreme-react/select-box';
import {
    ArgumentAxis,
    Chart,
    Export, Font,
    Label,
    Legend, Margin,
    Series,
    Tick,
    Title,
    Tooltip,
    ValueAxis,
} from 'devextreme-react/chart';
import {overlappingModes, population} from '../../data';

console.log('population', population);

function customizeTooltip(arg: { valueText: any; }) {
    return {
        text: `${arg.valueText}${'%'}`,
    };
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMode: overlappingModes[0],
        };
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <Chart
                    id="chart"
                    dataSource={population}
                    palette="Violet"
                >
                    <Title text="Linguagens mais utilizadas">
                        <Font size={30} color="#CFB53B" />
                        <Margin top={25} />
                    </Title>
                    <Series argumentField="key" type={'stackedspline'} valueField={`percent`} name={'Linguagens'}>
                        <Label visible={true} connector={'curve'} customizeText={(e: { valueText: number; }) => {
                            return `${(e.valueText / 100 * 100).toFixed(2)}${'%'}`;
                        }}/>
                    </Series>
                    <ArgumentAxis>
                        <Label
                            wordWrap="none"
                            overlappingBehavior={this.state.currentMode}
                            rotationAngle={-45}
                        />
                    </ArgumentAxis>
                    <ValueAxis>
                        <Tick visible={true}/>
                        <Label visible={true} customizeText={(item) => {
                            return item.value + '%';
                        }}/>
                    </ValueAxis>
                    <Legend visible={false} customizeText={(item) => {
                        return item.value + '%';
                    }}/>
                    <Legend visible={true}
                            verticalAlignment="bottom"
                            horizontalAlignment="center"
                            itemTextPosition="right"
                            rowCount={2}/>

                    <Tooltip
                        enabled={true}
                        customizeTooltip={customizeTooltip}/>
                    <Export enabled={true} />

                </Chart>
                <div className="options">
                    <div className="caption">Options</div>
                    <div className="option">
                        <span>Overlapping Modes: </span>
                        <SelectBox
                            dataSource={overlappingModes}
                            value={this.state.currentMode}
                            onValueChanged={this.handleChange}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }

    handleChange(e) {
        this.setState({currentMode: e.value});
    }
}

export default App;

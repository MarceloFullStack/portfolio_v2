import React from 'react';
import SelectBox from 'devextreme-react/select-box';
import {
    Chart,
    Series,
    ArgumentAxis,
    Legend,
    Label, Tooltip, Title, ValueAxis, Tick,
} from 'devextreme-react/chart';
import { overlappingModes, population } from '../../data';
console.log('population', population);

function customizeTooltip(arg) {
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
                    title="Population by Countries"
                    palette="Violet"
                >
                    <Series argumentField="key" type={'stackedspline'} valueField={`percent`} name={'vaca'}>
                        <Label visible={true} connector={'curve'} customizeText={(e)=>{
                            return `${(e.valueText / 100 * 100).toFixed(2)}${'%'}`;
                        }}/>
                    </Series>
                    <ArgumentAxis >
                        <Label
                            wordWrap="none"
                            overlappingBehavior={this.state.currentMode}
                            rotationAngle={-45}


                        />
                    </ArgumentAxis>
                    <ValueAxis>
                        <Tick visible={true} />
                        <Label visible={true}  customizeText={(item) => {
                            return item.value + '%';
                        }}/>
                    </ValueAxis>
                    <Legend visible={false} customizeText={(item) => {
                        return item.value + '%';
                    }}/>
                    <Legend visible={true} />
                    <Tooltip
                        enabled={true}
                        customizeTooltip={customizeTooltip} />
                    />
                    <Title text="Weather in Las Vegas, NV (2017)" />
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
        this.setState({ currentMode: e.value });
    }
}

export default App;

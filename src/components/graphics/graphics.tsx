import React, {useEffect} from 'react';

import SelectBox from 'devextreme-react/select-box';
import {
    ArgumentAxis,
    Chart,
    Export,
    Font,
    Label,
    Legend,
    Margin,
    Series,
    Tick,
    Title,
    Tooltip,
    ValueAxis,
} from 'devextreme-react/chart';


function customizeTooltip(arg: { valueText: any; }) {
    return {
        text: `${arg.valueText}${'%'}`,
    };
}

// https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Line/React/Light/

const App: React.FunctionComponent<any> = ({languages, today}) => {
    const [payloadGrpah, setPayloadGraph] = React.useState(languages);
    const overlappingModes = ['hoje', 'ontem', 'semana'];

    const [changeView, setChangeView] = React.useState('semana');

    function handleChange(e: any) {
        setChangeView(e.value);
    }

    useEffect(() => {
        if (changeView === 'hoje') {
            return setPayloadGraph(today[7].languages);
        }
        if (changeView === 'ontem') {
            return setPayloadGraph(today[6].languages);
        }
        if (changeView === 'semana') {
            return setPayloadGraph(languages);
        }
    }, [changeView]);
    return (
        <React.Fragment>
            <Chart
                id="chart"
                dataSource={payloadGrpah}
                palette="Violet"
            >
                <Title text="Linguagens mais utilizadas">
                    <Font size={30} color="#D1A1D1"/>
                    <Margin top={25}/>
                </Title>
                <Series argumentField="name" type={'stackedspline'} valueField={`percent`} name={'Linguagens'}>
                    <Label visible={true} connector={'curve'} customizeText={(e: { valueText: number; }) => {
                        return `${(e.valueText / 100 * 100).toFixed(2)}${'%'}`;
                    }}/>
                </Series>
                <ArgumentAxis>
                    <Label
                        wordWrap="none"
                        overlappingBehavior={'rotate'}
                        rotationAngle={-45}
                    />
                </ArgumentAxis>
                <ValueAxis>
                    <Tick visible={true}/>
                    <Label visible={true} customizeText={(item: any) => {
                        return item.value + '%';
                    }}/>
                </ValueAxis>
                <Legend visible={true}
                        verticalAlignment="bottom"
                        horizontalAlignment="center"
                        itemTextPosition="right"
                        rowCount={2}/>

                <Tooltip
                    enabled={true}
                    customizeTooltip={customizeTooltip}/>
                <Export enabled={true}/>

            </Chart>
            <div className="options">
                <div className="caption">Espaço de tempo</div>
                <div className="option">
                    {/*<span>Escolha o tempo: </span>*/}
                    <SelectBox
                        dataSource={overlappingModes}
                        value={changeView}
                        onValueChanged={handleChange}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}
export default App;

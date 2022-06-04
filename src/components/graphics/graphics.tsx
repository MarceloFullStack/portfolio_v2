import React, {useEffect} from 'react';

import SelectBox from 'devextreme-react/select-box';
import {
    ArgumentAxis,
    Chart, CommonSeriesSettings,
    Export,
    Font,
    Label,
    Legend,
    Margin,
    Series, SeriesTemplate, Subtitle,
    Tick,
    Title,
    Tooltip,
    ValueAxis,
} from 'devextreme-react/chart';
import styled from "styled-components";


function customizeTooltip(arg: { valueText: any; }) {
    return {
        text: `${arg.valueText}${'%'}`,
    };
}

// https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Line/React/Light/
const Container = styled.div`
  min-width: 800px;
  padding: 50px;
`;
const App: React.FunctionComponent<any> = ({allTimeLanguageShare, last7DaysShare}) => {
    const [payloadGrpah, setPayloadGraph] = React.useState([]);
    const [graphType, setGraphType] = React.useState('bar');

    const typeGraphModes = ['stackedspline', 'bar', 'line'];
    const overlappingModes = ['Semana', 'Todo o tempo'];
    const [changeView, setChangeView] = React.useState('Semana');

    function handleChange(e: any) {
        setChangeView(e.value);
    }
    function handleChangeTypeGraph(e: any) {
        setGraphType(e.value);
    }

    useEffect(() => {
        // if (changeView === 'hoje') {
        //     return setPayloadGraph(today[7].languages);
        // }
        if (changeView === 'Semana') {
            return setPayloadGraph(last7DaysShare);
        }
        if (changeView === 'Todo o tempo') {
            return setPayloadGraph(allTimeLanguageShare);
        }
    }, [allTimeLanguageShare, changeView]);
    return (
        <Container>
            <Chart
                id="chart"
                dataSource={payloadGrpah}
                palette="Violet"
            >
                <CommonSeriesSettings
                    argumentField="name"
                    valueField="percent"
                    type={graphType}
                    ignoreEmptyPoints={true}
                />

                <SeriesTemplate nameField="name" />
                <Title
                    text={`Linguagens mais utilizadas - ${changeView}`}

                >
                    <Font size={25} color={'#D1A1D1'} />
                    <Subtitle  text="Porcentagem de tempo gasto em cada linguagem" color={'white'}>
                    <Font color={"#9b779b"} />
                    </Subtitle>
                </Title>

                <Series argumentField="name" type={graphType} valueField={`percent`} name={'Linguagens'}>
                    <Label visible={true}  customizeText={(e: { valueText: number; }) => {
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
                <SeriesTemplate nameField="name"  />
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
            {/*<div className="options">*/}
            {/*    <div className="caption">Tipo do gráfico</div>*/}
            {/*    <div className="option">*/}
            {/*        /!*<span>Escolha o tempo: </span>*!/*/}
            {/*        <SelectBox*/}
            {/*            dataSource={typeGraphModes}*/}
            {/*            value={graphType}*/}
            {/*            onValueChanged={handleChangeTypeGraph}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Container>
    );
}
export default App;

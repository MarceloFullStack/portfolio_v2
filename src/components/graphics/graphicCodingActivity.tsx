// const GraphicCodingActivity = () => {
//     return (
//             <div className="graphic-coding-activity-title">
//                 <h1>Atividade de Código</h1>
//             </div>
//
//     )
// }
//
// export default GraphicCodingActivity;
import React from 'react';

import {Chart, Label, Series, ValueAxis} from 'devextreme-react/chart';
import {Title} from 'devextreme-react/bar-gauge';
import {secondsToHms} from "../../../utility/time/secondToHms";

const GraphicCodingActivity = ({codingActivity}: any) => {
    console.log('codingActivity', codingActivity);
    return (
        <Chart id="chart" dataSource={codingActivity} palette="Violet">
            <Series
                valueField="total_seconds"
                argumentField="day"
                name="Semana"
                type="bar"
                label={
                    {
                        visible: true,
                        format: 'currency',
                        customizeText: function (e: any) {

                            return secondsToHms(e.value);
                        },
                        position: 'outside'

                    }
                }
            />
            <ValueAxis>
                <Label visible={true} customizeText={(item: any) => {
                    console.log('item', item);
                    return '';

                }}/>
            </ValueAxis>
        </Chart>
    );
}

export default GraphicCodingActivity;
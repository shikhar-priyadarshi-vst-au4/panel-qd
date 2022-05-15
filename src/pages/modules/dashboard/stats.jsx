import Card from "../../../components/Card";
import Progress from "../../../components/Progress";
import Hamburger from "../../../img/path-1345@1x.png";
import View from "../../../img/path-17-1@1x.png";

const CardHeader = () => {
    return <>
        <div className="d-flex a-center j-between cash-header">
            <div>Cards</div>
            <div>
                <img src={Hamburger} style={{width : "16px"}}/>
            </div>
        </div>
    </>
}

export default function Stats(props){
    return <>
        <Card
        {...{
            header : <CardHeader/>   
        }}>
            <div className="stats-one">
                <div className="stats-card d-flex a-center j-between">
                    <div>One - 4536</div>
                    <div>
                        <img src={View} style={{width : "16px"}}/>
                    </div>
                </div>
                <Progress start={0} actual={500} end={3000}/>
            </div>
            <br/>
            <div className="stats-one">
                <div className="stats-card d-flex a-center j-between">
                    <div>One - 4536</div>
                    <div>
                        <img src={View} style={{width : "16px"}}/>
                    </div>
                </div>
                <Progress start={0} actual={2000} end={3000}/>
            </div>
        </Card>
    </>
}
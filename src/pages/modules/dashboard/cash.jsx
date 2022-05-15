import Card from "../../../components/Card";
import Hamburger from "../../../img/path-1345@1x.png";

const CardHeader = () => {
    return <>
        <div className="d-flex a-center j-between cash-header">
            <div>All Cash</div>
            <div>
                <img src={Hamburger} style={{width : "16px"}}/>
            </div>
        </div>
    </>
}

const CardSubHeader = () => {
    return <>
        <div className="d-flex a-start cash-sub-header">
            {"972 $"}
        </div>
    </>
}

export default function Cash(props){
    return <>
    <Card 
        {...{
            header : <CardHeader/>,
            subheader : <CardSubHeader/>     
        }}>
            <div className="cash-content">
                <ul className="cash-content-list">
                    <li className="cash-content-list-items">
                        <div>Main - 2345 34</div>
                        <div>139 $</div>
                    </li>
                    <li className="cash-content-list-items">
                        <div>Primary - 2345 34</div>
                        <div>139 $</div>
                    </li>
                    <li className="cash-content-list-items">
                        <div>BNP - 2345 34</div>
                        <div>139 $</div>
                    </li>
                </ul>
            </div>
    </Card>
    </>
}
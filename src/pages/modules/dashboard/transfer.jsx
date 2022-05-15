import QDLink from "../../../components/Button";
import Card from "../../../components/Card";
import QDDropdown from "../../../components/Dropdown";
import Navigate from "../../../img/path-15@1x.png";
import Accounts from "../../../img/path-671-1@1x.png";
import Filter from "../../../img/path-669@1x.png";
import ArrowDown from "../../../img/fill-35-1@1x.png";

import "../../../css/table.css";

const Icons = {
    AccountsIcon : () => <img src={Accounts} style={{width : "10px"}}/>,
    FilterIcon : () => <img src={Filter} style={{width : "10px"}}/>,
    ArrowIcon : () => <img src={ArrowDown} style={{width : "10px"}}/>
}

const defaultData = Array(4).fill({
    beneficiary : { name : "Jhon Doe", account : "XXXXXXXXXXXXXX"},
    account : "Bansira-Main - 4456 56",
    date : "3 Feb 2022",
    transfer : "3 Mar 2022",
    amount : "10.00 EUR"
})

const CardHeader = () => {
    return <>
        <div className="d-flex a-center j-between transfer-header">
            <div>Transfers</div>
            <div className="d-flex a-center transfer-filters">
                <QDDropdown
                    id="accounts" 
                    leftContent={<Icons.AccountsIcon/>}
                    dropdownLabel="All accounts"
                    rightContent={<Icons.ArrowIcon/>}/>
                <QDDropdown
                    id="hours" 
                    leftContent={<Icons.FilterIcon/>}
                    dropdownLabel="24 hours"
                    rightContent={<Icons.ArrowIcon/>}/>
                <div>
                    <img src={Navigate} style={{width : "3px"}}/>
                </div>
            </div>
        </div>
    </>
}

const CardSubHeader = () => {
    return <>
        <div className="d-flex a-start transfer-sub-header">
            <QDLink className="transfer-btn transfer-active">Executed</QDLink>
            <QDLink className="transfer-btn">Running</QDLink>
        </div>
    </>
}


export default function Transfer(props){
    return <>
    <Card
        {...{
            header : <CardHeader/>,
            subheader : <CardSubHeader/>
        }}>
            <div className="table-container">
                <table id="transfer-table">
                    <thead>
                        <tr>
                            <th>
                                <div>
                                    Beneficiary
                                    {/* <img /> */}
                                </div>
                            </th>
                            <th>
                                <div>
                                    Account
                                </div>
                            </th>
                            <th>
                                <div>
                                    Date
                                </div>
                            </th>
                            <th>
                                <div>
                                    Next Transfer
                                </div>
                            </th>
                            <th>
                                <div>
                                    Amount
                                </div>
                            </th>
                        </tr>    
                    </thead> 
                    <tbody>
                        {
                            defaultData?.map((v,i) => <tr>
                                <td>
                                    <div className="transfer-beneficiary">
                                        <div>{v?.beneficiary?.name}</div>
                                        <div>{v?.beneficiary?.account}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="transfer-account">
                                        {v?.account}
                                    </div>
                                </td>
                                <td>
                                    <div className="transfer-date">
                                        {v?.date}
                                    </div>
                                </td>
                                <td>
                                    <div className="transfer-next">
                                        {v?.transfer}
                                    </div>
                                </td>
                                <td>
                                    <div className="transfer-amount">
                                        {v?.amount}
                                    </div>
                                </td>
                            </tr>)
                        }    
                    </tbody>   
                </table> 
            </div>
    </Card>
    </>
}
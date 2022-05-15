import QDLink from "../../../components/Button";
import Card from "../../../components/Card";

import "../../../css/table.css";


const defaultData = Array(4).fill({
    bill_no : "20211029-000001",
    client : "TECH LIMITED",
    date : "3 Feb 2022",
    amount : "2000.00 EUR"
})

const CardHeader = () => {
    return <>
        <div className="d-flex a-center j-between transfer-header">
            <div>Invoices</div>
        </div>
    </>
}

const CardSubHeader = () => {
    return <>
        <div className="d-flex a-start transfer-sub-header">
            <QDLink className="transfer-btn transfer-active">To be transferred</QDLink>
            <QDLink className="transfer-btn">Transferred</QDLink>
        </div>
    </>
}

const CardFooter = () => {
    return <>
    <QDLink className="invoice-btn">All Invoices</QDLink>
    </>
}

export default function Invoices(props){
    return <>
    <Card
        {...{
            header : <CardHeader/>,
            subheader : <CardSubHeader/>,
            footer : <CardFooter/>
        }}>
            <div className="table-container">
                <table id="transfer-table">
                    <thead>
                        <tr>
                            <th>
                                <div>
                                    Bill Number
                                    {/* <img /> */}
                                </div>
                            </th>
                            <th>
                                <div>
                                    Client
                                </div>
                            </th>
                            <th>
                                <div>
                                    Date
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
                                    <div className="transfer-account">
                                        <div>{v?.bill_no}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="transfer-account">
                                        {v?.client}
                                    </div>
                                </td>
                                <td>
                                    <div className="transfer-date">
                                        {v?.date}
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
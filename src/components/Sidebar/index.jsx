import QDLink from "../Button";
import Home from "../../img/path-4@1x.png";
import Bank from "../../img/arrow-up---341-@1x.png";
import Annotate from "../../img/path-2@1x.png";
import Accounting from "../../img/path-1345@1x.png";
import Logout from "../../img/path-1370-1@1x.png";
import Settings from "../../img/path-1372@1x.png";

import "../../css/sidebar.css";

const SidebarIcons = {
    List : {
        HomeIcon : () => <img src={Home} style={{width : "14px"}}/>,
        AnnotateIcon : () => <img src={Annotate} style={{width : "14px"}}/>,
        CustomersIcon : () => <img src={Accounting} style={{width : "14px"}}/>,
        InvoicesIcon : () => <img src={Accounting} style={{width : "14px"}}/>,
        ExpensesIcon : () => <img src={Accounting} style={{width : "14px"}}/>,
        QuotesIcon : () => <img src={Accounting} style={{width : "14px"}}/>,
        BankIcon : () => <img src={Bank} style={{width : "14px"}}/>,
        AccountingIcon : () => <img src={Accounting} style={{width : "14px"}}/>
    },
    Bottom : {
        LogoutIcon : () => <img src={Logout} style={{width : "12px"}}/>,
        SettingsIcon : () => <img src={Settings} style={{width : "12px"}}/>
    }
}

export default function Sidebar(props){
    return <>
        <aside className="qd-sidebar">
            <ul className="qd-sidebar-list">
                <li>
                    <QDLink 
                        type="link"
                        className="qd-sidebar-link" 
                        leftIcon={<SidebarIcons.List.HomeIcon/>}
                        showDot>
                            Home
                    </QDLink>
                </li>
                <li>
                    <QDLink 
                        type="link" 
                        className="qd-sidebar-link"
                        leftIcon={<SidebarIcons.List.AnnotateIcon/>}
                        showDot>
                            Annotate
                    </QDLink>
                </li>
                <li>
                    <QDLink
                        type="link" 
                        className="qd-sidebar-link"
                        leftIcon={<SidebarIcons.List.CustomersIcon/>}
                        showDot>
                            Customers
                    </QDLink>
                </li>
                <li>
                    <QDLink
                        type="link" 
                        className="qd-sidebar-link"
                        leftIcon={<SidebarIcons.List.InvoicesIcon/>}
                        showDot>
                            Invoices
                    </QDLink>
                </li>
                <li>
                    <QDLink
                        type="link" 
                        className="qd-sidebar-link"
                        leftIcon={<SidebarIcons.List.ExpensesIcon/>}
                        showDot>
                            Expenses
                    </QDLink>
                </li>
                <li>
                    <QDLink 
                        type="link" 
                        className="qd-sidebar-link"
                        leftIcon={<SidebarIcons.List.QuotesIcon/>}
                        showDot>
                            Quotes
                    </QDLink>
                </li>
                <li>
                    <QDLink
                        type="link" 
                        className="qd-sidebar-link"
                        leftIcon={<SidebarIcons.List.BankIcon/>}
                        showDot>
                            Bank
                    </QDLink>
                </li>
                <li>
                    <QDLink 
                        type="link" 
                        className="qd-sidebar-link"
                        leftIcon={<SidebarIcons.List.AccountingIcon/>}
                        showDot>
                            Accounting
                    </QDLink>
                </li>
            </ul>
            <div className="qd-sidebar-doc">

            </div>
            <div className="qd-sidebar-bottom">
                <ul className="qd-sidebar-list">
                    <li>
                        <QDLink
                            type="link" 
                            className="qd-sidebar-bottom-link"
                            leftIcon={<SidebarIcons.Bottom.LogoutIcon/>}>
                                Logout
                        </QDLink>
                    </li>
                    <li>
                        <QDLink
                            type="link"
                            className="qd-sidebar-bottom-link" 
                            leftIcon={<SidebarIcons.Bottom.SettingsIcon/>}>
                                Settings
                        </QDLink>
                    </li>
                </ul>
            </div>
        </aside>
    </>
}
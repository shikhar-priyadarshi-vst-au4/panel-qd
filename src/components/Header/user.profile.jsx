import QDLink from "../Button";
import Company from '../../img/path-1366@1x.png';
import Chat from "../../img/path-1367@1x.png";
import Support from "../../img/xmlid-426-@1x.png";
import Password from "../../img/path-1368@1x.png";
import Settings from "../../img/path-1369@1x.png";
import QD from '../../img/circle5855@1x.png';


const LinkIcons = {
    CompanyIcon : () => <img src={Company} style={{width : "14px"}}/>,
    ChatIcon : () => <img src={Chat} style={{width : "14px"}}/>,
    SupportIcon : () => <img src={Support} style={{width : "14px"}}/>,
    PasswordIcon : () => <img src={Password} style={{width : "14px"}}/>,
    SettingsIcon : () => <img src={Settings} style={{width : "14px"}}/>
}

export default function UserProfile(props){
    return <>
        <div className="qd-user-profile">
            <div className="user-profile-card">
                <div className="d-flex a-start user-profile-content">
                    <div>
                        <img src={QD} className="left-icon" style={{width : "20px"}}/>
                    </div>
                    <div className="user-profile-info d-flex f-column a-start">
                        <div>Quantum Dynamics</div>
                        <div>Shivam Aggarwal</div>
                    </div>
                </div>
                <div className="d-flex a-center user-profile-card-footer">
                    <QDLink className="user-profile-export">Export My Data</QDLink>
                    <QDLink className="user-profile-logout">Logout</QDLink>
                </div>
            </div>
            <div>
                <ul>
                    <li>
                        <QDLink type="link" className="d-flex a-center qd-drop-link" leftIcon={<LinkIcons.CompanyIcon/>}>
                                See My Company
                        </QDLink>
                    </li>
                    <li>
                        <QDLink type="link" className="d-flex a-center qd-drop-link" leftIcon={<LinkIcons.ChatIcon/>}>
                            Live Chat
                        </QDLink>
                    </li>
                    <li>
                        <QDLink type="link" className="d-flex a-center qd-drop-link" leftIcon={<LinkIcons.SupportIcon/>}>
                            Support
                        </QDLink>
                    </li>
                    <li>
                        <QDLink type="link" className="d-flex a-center qd-drop-link" leftIcon={<LinkIcons.PasswordIcon/>}>
                            Change Password
                        </QDLink>
                    </li>
                    <li>
                        <QDLink type="link" className="d-flex a-center qd-drop-link" leftIcon={<LinkIcons.SettingsIcon/>}>
                            Settings
                        </QDLink>
                    </li>
                </ul>
            </div>
        </div>
    </>
}
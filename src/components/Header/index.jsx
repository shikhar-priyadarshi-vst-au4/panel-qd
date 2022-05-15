import QDLink from '../Button';
import QDDropdown from '../Dropdown';
import UserProfile from './user.profile';
import ExchangeIcon from '../../img/path-5836@1x.png';
import SearchIcon from '../../img/path-1371@1x.png';
import QDIcon from '../../img/circle5855@1x.png';
import ArrowDownIcon from '../../img/path-1364@1x.png';
import "../../css/header.css";

const HeaderIcons = {
    Button : {
        LeftIcon : () => <img src={QDIcon} className="left-icon" style={{width : "14px"}}/>,
        RightIcon : () => <img src={ArrowDownIcon} className="right-icon" style={{width : "12px"}}/>
    }
}

export default function Header(props){
    return <>
    <header className="qd-header d-flex a-center j-between">
        <div className="qd-header-left">
            <div className="qd-header-brand">
                <span>Logo</span>
            </div>
            <div className="qd-header-button">
                <QDLink  
                    leftIcon={<img src={ExchangeIcon} className="qd-icon-exchange"/>}/>
            </div>
            <div className="qd-header-search">
                <div className="qd-search-input">
                    <div className="qd-search-icon">
                        <img src={SearchIcon}/>
                    </div>
                    <input placeholder="Search"/>
                </div>
            </div>
        </div>
        <div className="qd-header-right">
            <div className="qd-header-dropdown">
                <QDDropdown 
                    id="dropdown"
                    leftContent={<HeaderIcons.Button.LeftIcon/>}
                    rightContent={<HeaderIcons.Button.RightIcon/>}
                    dropdownLabel="Quantum Dynamics"
                    dropdownlistClass="qd-user-profile-wrapper">
                    <UserProfile/>    
                </QDDropdown>
            </div>
        </div>
    </header>
    </>
}
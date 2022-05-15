import '../../css/dropdown.css';

export default function QDDropdown(props){
    const { leftContent, 
            dropdownLabel, 
            children, 
            rightContent,
            dropdownlistClass = "",
            id } = props;
    return <>
        <div className="qd-dropdown">
            <label className="qd-dropdown-content">
                {
                    leftContent && <>                   
                        {leftContent}
                    </>
                }
                <div className="qd-dropdown-label">{dropdownLabel}</div>
                {
                    rightContent && <>
                        {rightContent}
                    </>
                }
            </label>
            <input id={id} type={"checkbox"}/>
            <div className={`qd-dropdown-list ${dropdownlistClass}`}>
                {children}
            </div>
        </div>  
    </>
}
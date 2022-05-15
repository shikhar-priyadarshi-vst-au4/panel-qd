import "../../css/button.css";
export default function QDLink(props){
    const {
        id=null,
        type = "button",
        className = "",
        style = null,
        onClick = () => {},
        leftIcon = null,
        rightIcon = null,
        children,
        showDot = false
    } = props;

    if(type == "button")
    return <>
        <button 
            onClick={onClick}
            className={`qd-btn ${className}`} 
            {...id ? {id} : {}}
            {...style ? {style} : {}}>
            {leftIcon && <span className="qd-btn-icon">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="qd-btn-icon">{rightIcon}</span>}
        </button>
    </>
    else if(type == "link")
    return <a 
        onClick={onClick}
        className={`qd-link ${className}`} 
        {...id ? {id} : {}}
        {...style ? {style} : {}}>
        {showDot && <div className="d-inline-block qd-dot"/>}
        {leftIcon && <>{leftIcon}</>}
        {children}
        {rightIcon && <>{rightIcon}</>}
    </a>
    else return null;
}
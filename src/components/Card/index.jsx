import "../../css/card.css";

export default function Card(props){
    const {
        header,
        subheader,
        children,
        footer
    } = props;
    return <>
    <div className="card">
        {
            header && <div className="card-header">
                {header}
            </div>
        }
        {
            subheader && <div className="card-subheader">
                {subheader}
            </div>
        }
        <div className="card-content">
            {children}
        </div>
        {
            footer && <div className="card-footer">
                {footer}
            </div>
        }
    </div>
    </>
}
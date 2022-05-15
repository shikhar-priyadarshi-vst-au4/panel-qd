import "../../css/progress.css";

export default function Progress(props){
    const {
        start = 0,
        actual,
        end
    } = props;

    const actualWidth = Math.floor((actual/end) * 100);

    return <>
        <div className="progress-wrapper">
            <div className="progress-bar">
                <div className="progress" 
                     style={{width : `${+actualWidth + 3}%`}}>

                </div>
            </div>
            <div className="progress-stats">
                <div className="progress-start">{start}$</div>
                <div className="progress-actual" 
                     style={{left : `${actualWidth}%`}}>{actual}$</div>
                <div className="progress-end">{end}$</div>
            </div>
        </div>
    </>
}
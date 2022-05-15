import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../css/dashboard.css";
import Cash from "./modules/dashboard/cash";
import Invoices from "./modules/dashboard/invoices";
import Stats from "./modules/dashboard/stats";
import Transfer from "./modules/dashboard/transfer";

export default function Dashboard(props){
    return <>
        <div className="dashboard-layout">
            <Header/>
            <section className="d-flex">
                <div className="f-col-2">
                    <Sidebar/>
                </div>
                <div className="d-flex f-col-10">
                    <div className="f-col-5">
                        <div className="d-flex f-column dashboard-col">
                            <Cash/>
                            <br/>
                            <Stats/>
                        </div>
                    </div>
                    <div className="f-col-7">
                        <div style={{marginLeft : "1rem", marginRight : "1rem"}} className="d-flex f-column dashboard-col">
                            <Transfer/>
                            <br/>
                            <Invoices/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
}
import ModuleList from "./ModulesList";

function Modules() {
    return (
        <div>
            <span>Modules</span>


            <div className="float-end wd-flex-row-container">

                <button type="button" className="btn btn-light">Collapse All</button>
                <button type="button" className="btn btn-light">View Progress</button>


                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <div className="wd-pr-5">Publish All
                        </div>
                    </button>

                    <ul className="dropdown-menu">
  
                    </ul>
                </div>



                <button type="button" className="btn btn-danger">
                    {/* <i class="fa fa-plus " style="color: white"></i> */}
                    Module</button>

                <button type="button" className="btn btn-light">
                    {/* <i className="fa fa-ellipsis-v color-grey"></i> */}
                </button>
            </div>

            <br />
            <br />
            <hr />


            <ModuleList />
        </div>

    );
}
export default Modules;

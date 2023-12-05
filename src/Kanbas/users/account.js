import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AccountNavigate } from "./accountNavigate";
import "../CourseNavigation/index.css"


function Account() {
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
        //setAccount({"_id":{"$oid":"5f9b2b7b9c9d6e0017a1e3e1"},"username":"admin","password":"admin","firstName":"admin","lastName":"admin","dob":"2020-10-29"})
    };

    const save = async () => {
        await client.updateUser(account);
    };

    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/Account/signin");
      };

      
    useEffect(() => {
        fetchAccount();
    }, []);


    return (
        <div className="w-50">
            <h1>Account </h1>


            <AccountNavigate />
            {account && (


                //  <div className="container-fluid">
                <div class="wd-float-left ">
                    <form>
                        <div class="form-group">
                            <label for="user">Username</label>

                            <input class="form-control" type="text" placeholder={account.username} readOnly />

                        </div>

                        <div class="form-group">
                            <label for="password">Password</label>
                            <input className="input-group"
                                value={account.password}
                                onChange={(e) => setAccount({
                                    ...account,
                                    password: e.target.value
                                })} />
                        </div>
                        <div class="form-group">
                            <label for="first-name">First Name</label>
                            <input
                                value={account.firstName}
                                onChange={(e) => setAccount({
                                    ...account,
                                    firstName: e.target.value
                                })} />
                        </div>

                        <div class="form-group">
                            <label for="last-name">Last Name</label>
                            <input value={account.lastName}
                                onChange={(e) => setAccount({
                                    ...account,
                                    lastName: e.target.value
                                })} />
                        </div>

                        <div class="form-group">
                            <label for="dob">Date of Birth</label>
                            <input value={account.dob}
                                onChange={(e) => setAccount({
                                    ...account,
                                    dob: e.target.value
                                })} />
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input value={account.email}
                                onChange={(e) => setAccount({
                                    ...account,
                                    email: e.target.value
                                })} />
                        </div>


                        <select onChange={(e) => setAccount({
                            ...account,
                            role: e.target.value
                        })}>

                            <option value="USER">USER</option>
                            <option value="ADMIN">ADMIN</option>
                            <option value="FACULTY">FACULTY</option>
                            <option value="STUDENT">STUDENT</option>
                        </select>

                        <button className="btn btn-primary" onClick={save}>
                            Save
                        </button>

                        <button className="btn btn-danger" onClick={signout}>
                            Sign Out
                        </button>

                        <Link to="/Kanbas/admin/users" className="btn btn-warning w-100">
                            Users
                        </Link>
                    </form>
                </div>

            )}
        </div>
    );
}
export default Account;
import Axios from "axios";
import { useEffect, useState } from "react";
import StudentListRow from "./StudentListRow";

function StudentList()
{
    const [arr, setArr] = useState([]);

    useEffect(() => {
        Axios.get("https://crud-deployement.onrender.com/studentRoute")
            .then((res) => {
                if (res.status === 200)
                    setArr(res.data)
                else
                    Promise.reject();
            })
            .catch((err) => alert(err))
    }, [])

    const ListItems = () => {
        return arr.map((val, ind) => {  //arr=[{_id,name,email,rollNo},{},{},{},...]
            return <StudentListRow key={ind} obj={val} />
        })
    }

    return (
        <div>
            <h1 className="text-center my-2">All Student Details</h1>
            <table style={{ margin: "0px auto", maxWidth: "60%" }} className="table table-striped table-bordered table-success">
                <thead>
                    <tr>
                        <th className="text-center px-5">Name</th>
                        <th className="text-center px-5">Email</th>
                        <th className="text-center ">Roll Number</th>
                        <th className="text-center px-5">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {ListItems()}
                </tbody>
            </table>
        </div>

    )
}
export default StudentList;
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
            {/* <h1 className="text-center my-2">All Student Details</h1> */}
            <table style={{ margin: "20px auto", maxWidth: "55%" }} className="table table-striped 0table-bordered table-muted mt-10">
                <thead>
                    <tr>
                        <th className="text-center ">Name</th>
                        <th className="text-center ">Email</th>
                        <th className="text-center ">Roll Number</th>
                        <th className="text-center ">Action</th>
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
"use client"
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import axios from 'axios';

const StaffCard = dynamic(() => import("./Staffcard"), {
    loading: () => (
        <div className="w-[100%] h-[100%] m-4 p-4 bg-[grey]">Loading</div>
    ),
});
const AllStaffs = () => {
    const [otheremployee, setotheremployee] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setloading] = useState(false);
    const api = "https://admin.nitp.ac.in/api/faculty/all";
    useEffect(() => {
        const fetchFaculty = async () => {
            try {
                setloading(true)
                const { data } = await axios.get(api);
                console.log(data)
                const filteredFaculty = data.filter(
                    (item) => item.department === "Other Employees"
                );
                setotheremployee(filteredFaculty);
                setloading(false)
            } catch (err) {
                console.log(err);
                setError(true);
            }
        };
        fetchFaculty();
    }, []);
    if (error) {
        return (
            <div className="flex justify-center items-center">
                <div className="text-center">
                    <p className="text-red-500">Sorry, failed to fetch the otheremployee data.</p>
                </div>
            </div>
        );
    }
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 text-black">
            {loading ? <>Loading ...</> : <></>}
            {otheremployee?.map((faculty) =>
                <StaffCard
                    key={faculty.id}
                    name={faculty.name}
                    image={faculty.image}
                    designation={faculty.designation}
                    email={faculty.email}
                />)
            }
        </div>
    )
}

export default AllStaffs

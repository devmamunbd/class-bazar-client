import { useEffect, useState } from "react";
import useAxiosHooks from "../../../hooks/useAxiosHooks"





const PopularTeacher = () => {

    const useAxios = useAxiosHooks();
    const [instructors, setInstructors] = useState([]);

    useEffect(()=> {
        const fetchData = async()=> {
            const res = await useAxios.get('/');
            setInstructors(res.data)
        }
        fetchData()
    },[])

  return (
    <div className="md:w-[93%] mx-auto my-20">
        <div>
            <h1 className="text-2xl md:text-5xl font-bold text-black text-center">Meet Our <span className="text-secondary">Instructors.</span></h1>
            <div className="w-[40%] text-center mx-auto my-4">
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit esse quibusdam dolorum consequatur! Quisquam sint nihil quis. Quasi, beatae vel.</p>
            </div>
        </div>

        {/* class box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                // teacher.map((item, index) => )
            }
        </div>



    </div>
  )
}

export default PopularTeacher

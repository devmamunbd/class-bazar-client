import { useEffect, useState } from "react"
import useAxiosHooks from "../../../hooks/useAxiosHooks"
import Card from "./Card"


const PopularClasses = () => {

    const useAxios = useAxiosHooks()
    const [classes, setClasses] = useState([])

    useEffect(()=>{
        const fetchData = async()=> {
            const res = await useAxios.get('/classes')
            setClasses(res.data)
        }
        fetchData()
    },[])


  return (
    <div className="md:w-[93%] mx-auto my-20">
        <div>
            <h1 className="text-2xl md:text-5xl font-bold text-black text-center">Our Popular <span className="text-secondary">Classes.</span></h1>
            <div className="w-[40%] text-center mx-auto my-4">
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit esse quibusdam dolorum consequatur! Quisquam sint nihil quis. Quasi, beatae vel.</p>
            </div>
        </div>

        {/* class box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                classes?.slice(0,6)?.map((item, index)=> <Card key={index} item={item}></Card> )
            }
        </div>



    </div>
  )
}

export default PopularClasses

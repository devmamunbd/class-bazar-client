import { useEffect, useState } from 'react'
import useAxiosHooks from './../../hooks/useAxiosHooks';
import { Transition } from '@headlessui/react'
import { Link, NavLink } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { ToastContainer, toast } from 'react-toastify';



const Classes = () => {
    const [hovered, setHovered] = useState(null)
    const {currentUser} = useUser()
    const role = currentUser?.role;
    const [enrolledClasses, setEnrolledClasses] = useState([]);
    const [classes, setClasses] = useState([])
    const useAxios = useAxiosHooks()
    const [isShowing, setIsShowing] = useState()
    const axiosSecure = useAxiosSecure()

    const handleHover =(index)=> {
        setHovered(index)
    }

    useEffect(()=> {
        const fetchData = async()=> {
            const res = await useAxios.get('/allclasses')
            setClasses(res.data)
        };
        fetchData()
    },[])

    // handle add to card
    const handleSelect=(id)=> {
        // console.log(id)
        axiosSecure.get(`/enrolled-classes/${currentUser?.email}`)
        .then(res => setEnrolledClasses(res.data)).catch(err => console.log(err))

        if(!currentUser){
            return toast.error('Please Login First')
        }

        axiosSecure.get(`/cart-item/${id}?email=${currentUser?.email}`)
        .then(res => {
            if (res.data.clasId === id) {
                toast.error('Already Selected!')
            } else if(enrolledClasses.find (item => item.classes._id === id)){
                return toast.error('Already Enrolled')
            } else{
                const data = {
                    clasId: id,
                    userMail: currentUser.email,
                    data: new Date()
                }

                toast.promise(axiosSecure.post('/add-to-cart', data))
                .then(res => {
                    console.log(res.data)
                }), {
                    pending: 'Selecting......',
                    success: {
                        render({data}){
                            return 'Select SuccessFully!'
                        }
                    },
                    error: {
                        render({data}){
                            return `Error ${data.message}`
                        }
                    }
                }
            }
        })


    }


  return (
    <div className='md:w-[93%] mx-auto'>
        <div className='mt-32 mb-20'>
            <h1 className='text-2xl md:text-4xl text-center text-secondary font-bold'>Classes</h1>
        </div>

        <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                   classes.map((item, index)=> (
                    <div
                    key={index}
                    onMouseEnter={()=> handleHover(index)}
                    onMouseLeave={()=> handleHover(null)}
                    className={`relative hover:translate-y-2 duration-150 hover:ring-[2px] hover:ring-secondary w-72 h-[400px]
                        mx-auto ${item.availableSeats < 1 ? "bg-red-600 " : "bg-white"} dark:bg-stone-600 rounded-lg shadow-lg overflow-hidden cursor-pointer`}
                    >
                        <div className='relative h-48'>
                            <div className={`absolute inset-0 bg-black opacity-0 transition-opacity duration-300
                                ${hovered === index ? "opacity-50" : ""} `} />
                            <img src={item.image} alt="" className=' w-full h-full' />
                            <Transition
                            show={hovered === index}
                            enter="transition-opacity duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                           >

                            <div className='absolute inset-0 flex justify-center items-center'>
                                <button onClick={()=> handleSelect(item._id)}
                                title={role == 'admin' || role === 'instructor' ? 'Insturctor/Admin Can not be selected class' ? item.availableSeats < 1 : 'Not seat Availale' : 'You can select class'}
                                disabled={role === 'admin' || role === 'instructor' || item.availableSeats < 1}
                                className='px-4 py-2 text-white disabled:bg-red-300 bg-secondary duration-300 rounded-md hover:bg-green-500'
                                >Add to Cart</button>
                            </div>
                            </Transition>
                        </div>

                            {/* Details */}
                            <div className='p-2'>
                                <h1 className='text-xl font-semibold'>{item.name}</h1>
                                <h3 className='text-slate-600'>instructor: {item.instructorName}</h3>

                                <div className='flex flex-col md:flex-row justify-between mt-5'>
                                <h3 className='text-slate-600'>availableSeats: {item.availableSeats}</h3>
                                <h2 className='text-secondary'>${item.price}</h2>
                                </div>

                                <div  className="mt-5 ">
                                <Link
                                to={`${item._id}`} >

                                <button
                                className='px-4 py-2 bg-secondary text-white font-semibold w-full mx-auto disabled:bg-red-300
                                duration-300 rounded-md hover:bg-green-500'
                                >Details</button>
                                 </Link>
                                </div>
                            </div>
                    </div>
                   ))
                }
        </div>

    </div>
  )
}

export default Classes

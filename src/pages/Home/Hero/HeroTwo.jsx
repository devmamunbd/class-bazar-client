import bgImg from '../../../assets/home/banner1.jpg'

const HeroTwo = () => {
  return (
    <div className="min-h-screen bg-cover" style={{backgroundImage: `url(${bgImg})`}}>
    <div className='min-h-screen flex justify-start items-center pl-11 text-white bg-black bg-opacity-0'>
        <div>
            <div className='space-y-4'>
                <p className='text-2xl md:text-4xl '>We Provide</p>
                <h1 className='text-2xl md:text-7xl font-bold '>Best Online Course</h1>
                <div className='md:w-1/2'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sapiente fugiat obcaecati fugit quia, fuga ex maxime animi voluptatem labore illo expedita. Harum molestias ab dolorum similique, sequi voluptas, in soluta corrupti, laborum dolor quas.</p>
                </div>
                <div className='flex flex-wrap gap-5 items-center'>
                    <button className='px-7 py-2 border-white border-[1px] border-none bg-secondary rounded-md'>Join Today</button>
                    <button className='px-7 py-2 border-white border-[1px] rounded-md hover:border-none hover:bg-secondary'>View Course</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default HeroTwo

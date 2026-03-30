

const ProjectCard = (props) => {
  return (
    <div className='flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 h-auto lg:h-9/10 w-full rounded-xl'>
            <div className='w-full lg:w-1/2 h-full flex flex-col justify-center gap-3 sm:gap-4 text-center lg:text-left'>
                <span className='text-2xl sm:text-3xl font-light font-open-sans'>
                    {props.name}
                </span>
                <p className='text-sm sm:text-base md:text-lg font-light text-neutral-400 font-open-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto excepturi facilis facere similique quam, cupiditate earum odit numquam amet et! Quo doloribus magni perferendis aspernatur officiis. Rem explicabo non provident?</p>
            </div>

            <div className='h-[200px] sm:h-[300px] md:h-[400px] lg:h-4/5 w-full lg:w-3/5 bg-white rounded-2xl'>

            </div>

    </div>
  )
}

export default ProjectCard

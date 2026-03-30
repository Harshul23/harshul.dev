

const ProjectCard = (props) => {
  return (
    <div className='flex items-center gap-12 h-9/10 w-full rounded-xl'>
            <div className='w-1/2 h-full flex flex-col justify-center gap-4'>
                <span className='text-3xl font-light font-open-sans'>
                    {props.name}
                </span>
                <p className='text-lg font-light text-neutral-400 font-open-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto excepturi facilis facere similique quam, cupiditate earum odit numquam amet et! Quo doloribus magni perferendis aspernatur officiis. Rem explicabo non provident?</p>
            </div>

            <div className='h-4/5 w-3/5 bg-white rounded-2xl'>

            </div>

    </div>
  )
}

export default ProjectCard

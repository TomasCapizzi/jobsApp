import { Job } from '../../types/Job'

type Props = {
    item: Job
}

function JobPreview({item}: Props) {
  return (
    <div className='flex flex-col border-solid border-zinc-600 border-y-2 p-2'>
        <h3 className='font-bold'>{item.title}</h3>
        <p className='text-sm'>{item.description}</p>
        <button className='bg-lime-400 rounded font-bold text-white cursor-pointer'>Apply</button>
    </div>
  )
}

export default JobPreview
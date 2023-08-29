import { useEffect, useState } from 'react';
import type { Job } from '../../types/Job';
import Spinner from '../../components/Spinner/Spinner';
import JobPreview from '../Job/JobPreview';

type Props = {}

function JobsContainer({}: Props) {
    const [handler, setHandler] = useState(false)
    const [items, setItems] = useState([])

    async function fetching() {
        const resp = await fetch('https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=b92246d0&app_key=2a81a6a3d27500a8a52fd52b5b3c81fd&results_per_page=30&what=javascript%20developer&content-type=application/json')
        const res = await resp.json();
        setItems(res.results)
        setHandler(true)
        }

        useEffect(()=>{
        fetching()
        },[])
  return (
    <div className='flex flex-col'>
    {
        handler ? items.map(
        //item: arrayItem => <p>{item.description}</p>
        (item: Job) => <JobPreview item={item}/>
        ) : <Spinner/>
    }
    </div>
  )
}

export default JobsContainer
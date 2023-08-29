
type Props = {}

export default function Search({}: Props) {
  return (
    <form className="flex flex-col border-solid border-slate-600 border-2 w-4/5 bg-white rounded-lg my-4">
        <input type="text" className="border-b-2 border-slate-600" placeholder="Job Description / Category"/>
        <input type="text" placeholder="Location"/>
        <button className="w-full bg-cyan-600 text-white">Search</button>
    </form>
  )
}
export default function addTopic(){
    return <form className="flex flex-col gap-3 items-center">
        <input 
            className="border border-slate-500 px-8 py-2 w-full"
            type="text"
            placeholder="Topic Title" />

        <input 
            className="border border-slate-500 px-8 py-2 w-full"
            type="text"
            placeholder="Topic Description" />

        <button className="bg-green-600
        text-white py-3 px-6 w-fit">Add Topic</button>
        
    </form>
}
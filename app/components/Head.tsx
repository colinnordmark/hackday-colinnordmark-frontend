

export function Head(){
    return(
        <footer className=' bg-teal-900 flex flex-row min-w-full bg-black-500 p-4 pt-6 justify-center items-center align-bottom  border-teal-400'>
            <h1 className='w-[2000px] text-2xl pl-5'>Note ♬ Pad</h1>
            <button className=' text-sm bg-neutral-900 rounded-lg p-2 w-[40%] text-center mr-7'>About</button>
            <button className='text-sm bg-neutral-900 rounded-lg p-2 w-[40%] text-center mr-7'>Contact</button>
            <button className='text-sm bg-neutral-900 rounded-lg p-2 w-[40%] text-center mr-7'>Api</button>
            <button className='text-sm mr-12 bg-neutral-900 rounded-lg p-2 w-[40%] text-center mr-7'>Fun stuff</button>
        </footer>
    )
}
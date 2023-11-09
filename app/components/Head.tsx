

export function Head(){
    return(
        <footer className='flex flex-row min-w-full bg-black-500 p-4 justify-center items-center align-bottom'>
            <h1 className='w-[2000px] text-[20px] pl-5'>Note Pad ♬</h1>
            <button className='bg-gray-800 rounded-lg p-2 w-[100%] text-center mr-7'>About</button>
            <button className='bg-gray-800 rounded-lg p-2 w-[100%] text-center mr-7'>Contact</button>
            <button className='bg-gray-800 rounded-lg p-2 w-[100%] text-center mr-7'>Api</button>
            <button className='bg-gray-800 rounded-lg p-2 w-[100%] text-center mr-7'>Fun stuff</button>
        </footer>
    )
}
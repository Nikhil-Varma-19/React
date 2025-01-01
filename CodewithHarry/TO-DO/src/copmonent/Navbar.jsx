

function Navbar() {
  return (
    <div>
      <nav className='flex justify-between p-2 text-white bg-gray-700'>
        <div className='ml-44'>
           <h1 className='text-xl'>UTask</h1>
        </div>
        <ul className='flex gap-6 list-none mx-9'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contant Us</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

import Navbar from "./components/Navbar";
import Cards from "./components/Cards"
import Filter from "./components/Filter"
import { filterData, apiUrl } from "./data"
import { useEffect } from "react"
import { useState } from "react"
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";


 
function App() {
  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(filterData[0].title)

  async function fetchData() {
    setLoading(true)
    try {
      let res = await fetch(apiUrl)
      let output = await res.json()
      // console.log(data)// data is bzc api is fetching data in that value is there
      setCourses(output.data)


    } catch (error) {
       toast.error("Something went wrong")
      
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
   <div className="min-h-screen flex flex-col bg-bgDark2">
      <div><Navbar></Navbar></div>
     <div className="">
     <div><Filter filterData={filterData}
     category={category}
     setCategory={setCategory}
     >
      </Filter></div>
     <div className="w-11/12 max-w-[1200px] mx-auto items-center flex-wrap flex justify-center min-h-[50vh]"
     >{loading ? (<Spinner/>) : (<Cards courses={courses}
     category={category}
     />)}</div>
     </div>
     </div>
  );
}

export default App;

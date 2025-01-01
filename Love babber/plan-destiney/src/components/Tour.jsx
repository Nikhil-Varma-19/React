/*eslint-disable react/prop-types */
import Card from './Card'
function Tour(prop) {
  return (
    <div className='justify-center  flex flex-wrap max-w-[1300px] mx-auto my-0'>
    
     {  prop.tours.map((tours)=>{
        return <Card tours={tours} key={tours.id} removeTours={prop.removeTours}></Card>
     }  )  }
   
    </div>
  )
}

export default Tour

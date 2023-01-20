import {useState} from 'react'
import Counter2 from './Components/Counter2'

const App2 = ()=>{
    const [show,setShow] = useState(false)
    const ToggleShow = ()=>{
       setShow(!show)
   }
    return (
        <div>
            <button onClick={ToggleShow}>show counter</button>
           { show && <Counter2/>}
        </div>
    )
}
export default App2
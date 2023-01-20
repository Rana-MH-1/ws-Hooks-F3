import {useState,useEffect} from 'react'
const Counter2 = ()=>{
    const [count,setCount] = useState(0)

    const [val, setVal] = useState('')
    const [intervalle, setIntervalle] = useState(null)
    //declare Functions
    const Increment = ()=>{
        setCount(count +1)
    }
    const Decrement = ()=>{
        if(count>0){
            setCount(count-1)
        }
    }
    const Reset = ()=>{
        setCount(0)
    }

    const Increment_with_value = ()=>{
        setCount(count + Number(val) )
    }

    // useEffect(()=>{
    //     console.log('Hello I am in useEeffect');
    // },[count])
    useEffect(()=>{
        setIntervalle(setInterval(()=>setCount(count+1),1000))
    },[count])
    return(
        <div>
         <h3>{count}</h3>
         <button onClick={Increment}>Increment</button>
         <button onClick={Decrement}>Decrement</button>
         <button onClick={Reset}>Reset</button>
         <input onChange={(e)=>setVal(e.target.value)}/>
         <button onClick={Increment_with_value}>Increment by value</button>
         
        </div>
    )
}

export default Counter2
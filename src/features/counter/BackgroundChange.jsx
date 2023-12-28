import { useSelector } from "react-redux"

function BackgroundChange() {

  const count = useSelector((state) => state.counter.value)
  
  let BackgroundColor = count == 15 ? 'green-600' : 'red-600';

  let s = count == 15 ? 2 : 3;
  let text = count == 15 ? 'Kunal for a reason!' : '';

  return (
    <div className={`bg-${BackgroundColor} text-${s}xl text-center transition-all`}>
       <h1>
        {text} <br />
        {count}
       </h1>
    </div>
  )
}

export default BackgroundChange
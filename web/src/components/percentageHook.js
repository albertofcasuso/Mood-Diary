function useChart(){
const [data,setData]=useState({
    happy:10,
    angry:100,
    sad:100000
  }) 

  const getCount = ()=>{
    return data.happy+data.angry+data.sad
  }
return {getCount}
}
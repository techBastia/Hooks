import useDocumentTitle from './useDocumentTitle'
import useCounter from './useCounter'

const CustomCounter = () => {
 
  const [count, handelIncrement] = useCounter()

  useDocumentTitle(count)

  return (
    <div>
      {count}<button onClick={handelIncrement}> + </button>
    </div>
  )
}

export default CustomCounter
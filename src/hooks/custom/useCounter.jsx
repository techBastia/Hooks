import { useState } from "react"

const useCounter = () => {
    const [count, setCount] = useState(0)

    const handelIncrement = () => {
        setCount(count + 1)
      }

      return [count, handelIncrement]
}

export default useCounter
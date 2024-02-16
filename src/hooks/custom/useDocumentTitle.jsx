import { useEffect } from 'react'

const useDocumentTitle = (count) => {
    useEffect(() => {
        document.title = `count is ${count}`
      }, [count])
}

export default useDocumentTitle
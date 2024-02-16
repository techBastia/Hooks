import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const countone = () => {
        setCountOne(countOne + 1)
    }
    const isEven = useMemo(() => {
        let i = 0;
        while(i < 2000000000) i++
        return countOne % 2 === 0
    }, [countOne])

    console.log(isEven);

    const counttwo = () => {
        setCountTwo(countTwo + 1)
    }

  return (
    <div>
    {countOne}<button onClick={countone}> count one </button> <span>{isEven ? 'even' : 'odd'}</span> <br/> <br/>
    {countTwo}<button onClick={counttwo}> count two </button>
    </div>
  )
}

export default UseMemo
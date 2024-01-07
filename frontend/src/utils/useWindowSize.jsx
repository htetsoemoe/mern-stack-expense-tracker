import React, { useEffect, useState } from 'react'

const useWindowSize = () => {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight])

    useEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', updateSize)

        // cleanup function
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    return {
        width: size[0],
        height: size[1]
    }
}

export default useWindowSize

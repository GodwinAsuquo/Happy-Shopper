import { useState } from "react"


const useToggle = (bool : boolean) => {
    const [show, setShow] = useState(bool)
    const toggle = () => {
      setShow(!show);
    }
return {show, toggle}
}
export default useToggle;
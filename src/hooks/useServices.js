import { useEffect, useState } from "react"


const useServices = () => {
    const [services, setServices] = useState([]);
    //load all service
    useEffect(() => {
        fetch(`https://nieamulkabir.github.io/repairdata/service.json`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services]
}
export default useServices;
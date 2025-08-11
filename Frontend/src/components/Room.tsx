import { useSearchParams } from "react-router-dom"

export const Room = () => {

    const [searchParam, setSearchParms] = useSearchParams()
    const name = searchParam.get("name")

    return <div>
        hi {name}

    </div>
}

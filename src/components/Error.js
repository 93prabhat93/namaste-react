import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError()
    console.log(err)
    return (
        <div>
            <h1>Ooopps!!</h1>
            <h3>Did you land somewhere you did not intend to ? 😿</h3>
        </div>
    )
}

export default Error;
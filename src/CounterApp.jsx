import { Fragment } from "react"
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {
    function handleAdd(event){
        console.log(value += 1)
    }

    return(
        <Fragment>
            <h1>Counter App</h1>
            <h2>{value}</h2>
            <button onClick={handleAdd}>
                +1
            </button>
        </Fragment>
    )
}
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

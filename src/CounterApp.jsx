import { Fragment } from "react"
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {
    return(
        <Fragment>
            <h1>Counter App</h1>
            <h2>{value}</h2>

        </Fragment>

    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired

}

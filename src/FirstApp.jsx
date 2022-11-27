import {Fragment} from "react";
import PropTypes from 'prop-types';
const newMessage = {
    message: 'Hola mundo',
    title: 'Nasser'
}


const getValue = (a, b) => {
    return a + b;
}
export const FirstApp = ({title, subtitle, name}) =>{

    return(
        <Fragment>
            <h1>Hola mundo desde first app</h1>
            <p>{getValue(5,7)}</p> 
            <p>probando props: {title}</p>
            <p>Hola soy, {subtitle}</p>
            <p>{name}</p>
        
            
            <code>{JSON.stringify(newMessage)}</code>
        </Fragment>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired

}
FirstApp.defaultProps = {
    title: 'No nhay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Holaaaa'
}
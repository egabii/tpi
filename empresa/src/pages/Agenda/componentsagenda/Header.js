import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,onAdd,showAdd}) => {   
    return (
        <header className = 'header'>
            <h3>{title}</h3>
            <Button color ={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'}onClick = {onAdd} />
            
        </header>
    )
}


Header.defaultProps = { 
    title: 'Agendar Evento'

}

//proptypes para poder definir el tipo de props. si paso un nro al titulo da error.
Header.propTypes = { 
    title: PropTypes.string.isRequired,
}

/* CSS EN JS
const headingStyle = { 
    color: 'red',
    backgroundColor: 'black',
}




*/ 

export default Header
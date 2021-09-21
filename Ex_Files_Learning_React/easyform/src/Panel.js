import React from 'react'
import PropTypes from 'prop-types'

const Panel = props => {
    return (
        <div className="container">
            <input type="checkbox" checked={props.dateOn} onChange={props.toggleDate}/>
        </div>
    )
}

Panel.propTypes = {
   dateOn: PropTypes.bool,
   toggleDate: PropTypes.func

};

Panel.defaultProps = {
    dateOn: true,
    toggleDate: ()=>{},
}
export default Panel

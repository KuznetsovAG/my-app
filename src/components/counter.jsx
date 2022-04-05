import React, {useState} from "react";

const Counter = (props) => {
    const {value} = props
    const formatValue = () => {
        return value === 0 ? 'empty' : value
    }

    const getBegeClasess = () => {
        let clasess = 'badge m-2 '
        clasess += value === 0 ? 'bg-warning' : 'bg-primary'
        return clasess
    }


    return (
        <div>
            <span>{props.name}</span>
            <span className={getBegeClasess()}>{formatValue()}</span>
            <button className="btn btn-primary btn-sm m-2" onClick={() => props.onIncriment(props.id)}>+</button>
            <button className="btn btn-primary btn-sm m-2" onClick={() => props.onDecrement(props.id)}>-</button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>Delete</button>
        </div>
    )
}

export default Counter
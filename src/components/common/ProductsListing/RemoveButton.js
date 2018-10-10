import React from 'react';
import { FaMinus } from 'react-icons/fa';

const $ = window.$;

class RemoveButton extends React.Component{
    render(){
        return (
            <button 
                type="button" 
                className="btn btn-danger action-button"
                data-toggle="tooltip" data-placement="top" title="Remove item (x1) from cart"
                onClick={ () => this.props.removeFromCart(this.props.cartItem) }
                disabled={(!(this.props.cartItem ))}
            >
            <FaMinus />
            </button>
        )
    }
    componentDidMount() {
        $('[data-toggle="tooltip"]').tooltip({
            trigger : 'hover'
        });
    }
      
    componentDidUpdate() {
        if($('button').is(':disabled')){
            $('.tooltip').remove();
       }
    }
}

export default RemoveButton
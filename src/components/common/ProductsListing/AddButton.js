import React from 'react';
import { FaPlus } from 'react-icons/fa';

const $ = window.$;

class AddButton extends React.Component {
    
    render() {
        return (
            <button
                type="button" 
                className="btn btn-success action-button"
                data-toggle="tooltip" data-placement="top" title="Add item (x1) to cart"
                onClick={ () => this.props.addToCart(this.props.product) }
            >
                <FaPlus />
            </button>            
        )
    }
    componentDidMount() {
        $('[data-toggle="tooltip"]').tooltip({
            trigger : 'hover'
        });
    }
      
    componentDidUpdate() {
        $('[data-toggle="tooltip"]').tooltip({
            trigger : 'hover'
        });
    }
    
}


export default AddButton
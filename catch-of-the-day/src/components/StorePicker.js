import React from 'react';

class StorePicker extends React.Component {
    render(){
    return (       
        <form classname="store-selector">
            <h2>Please Enter A Store</h2>
            <input type="text" required placeholder="Store name"/>
            <button type="Submit">Visit Store</button>
         </form>
        )

    }
}

export default StorePicker;
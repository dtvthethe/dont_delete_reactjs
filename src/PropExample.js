
// function component
// const PropExample = (props) => {
//     return (
//         <div>
//             <h3>Product List</h3>
//             <ul>
//                 {
//                     props.list.map((item) => {
//                         return (
//                             <li>{item}</li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     );
// }



// class component
import React, { Component } from 'react';

class PropExample extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Product List</h3>
                <ul>
                    {
                        this.props.list.map((item) => {
                            return (
                                <li>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default PropExample;

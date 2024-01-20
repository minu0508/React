import React, { useState } from "react";

/**
 *  ================= 방법 1 ================= 
 */

// class ConfirmButton extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             isConfirmed: false,
//         };

//         // this.handleConfirm = this.handleConfirm.bind(this);
//     }

//     // handleConfirm() {
//     //     this.setState((prevState) => ({
//     //         isConfirmed: !prevState.isConfirmed,
//     //     }));
//     // }
    
//     handleConfirm = () => {
//         this.setState((prevState) => ({
//             isConfirmed: !prevState.isConfirmed,
//         }));
//     }

//     render() {
//         return (
//             <button
//                 onClick={this.handleConfirm}
//                 disabled={this.state.isConfirmed}
//             >
//                 {this.state.isConfirmed ? "확인됨" : "확인하기"}
//             </button>
//         );
//     }
// }

/**
 *  ================= 방법 2 =================
 */

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;
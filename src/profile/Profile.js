import React from 'react';
import PropTypes from "prop-types";

function Profile(props) {
    //inline style
    const h1Color={color:'red'},
          H1BgColor={backgroundColor:'#617bfb'}
    //end inline style


    const handleName = props.fullName ; 
    alert(handleName);

    return (
        <div>
            <div style={h1Color}>{props.children}</div>
            <h1  style={h1Color}>{props.fullName}</h1>
            <h1>{props.bio}</h1>
            <h1 style={H1BgColor}>{props.profession}</h1>     
        </div>
    )
}
//   default props
Profile.defaultProps = {
    fullName: "Loading",
    bio: "Loading",
    profession: "Loading",
   };

//propTypes
Profile.propTypes = {

    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
};
export default Profile

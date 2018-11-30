import React from "react";
import "./UserOutput.css"

const UserOutput = (props) => { 
    return (
        <div className="UserOutput">
            <h2>{props.username}</h2>
            <p>Unicorn subway tile beard man bun try-hard bitters cred butcher twee raw denim live-edge. Food truck adaptogen franzen, etsy locavore before they sold out single-origin coffee trust fund kickstarter swag lumbersexual polaroid offal neutra. Normcore post-ironic ethical austin bitters literally YOLO banjo hexagon everyday carry woke tbh gastropub health goth. Lo-fi poutine organic mlkshk kombucha, crucifix pitchfork. Offal helvetica everyday carry, kombucha PBR&B sriracha tumeric drinking vinegar pour-over actually air plant edison bulb hashtag street art. Four loko post-ironic fashion axe DIY.</p>

            <p>Tattooed meh you probably haven't heard of them, brunch cornhole before they sold out yr vexillologist gochujang fam kitsch four dollar toast. Authentic offal four dollar toast plaid post-ironic. Craft beer vaporware prism selfies vegan vice. Etsy lumbersexual brunch, echo park locavore mixtape affogato chambray pug unicorn tacos.</p>
        </div>
    )
};

export default UserOutput;
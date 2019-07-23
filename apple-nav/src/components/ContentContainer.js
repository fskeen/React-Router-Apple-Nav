import React from 'react';
import { Route } from 'react-router-dom';

import Mac from "./Mac"
import Ipad from "./Ipad"
import Iphone from "./Iphone"
import Watch from "./Watch"
import TV from "./TV"
import Music from "./Music"
import Support from "./Support"
import Home from "./Home"

function ContentContainer () {

    return (
        <div>
            <Route exact path="/" component={Home}></Route>
            <Route path="/mac" component={Mac}></Route>
            <Route path="/ipad" component={Ipad}></Route>
            <Route path="/iphone" component={Iphone}></Route>
            <Route path="/watch" component={Watch}></Route>
            <Route path="/tv" component={TV}></Route>
            <Route path="/music" component={Music}></Route>
            <Route path="/support" component={Support}></Route>
        </div>
    )
}

export default ContentContainer;
import React, {useRef, useEffect} from "react";

const{ tableau } = window;
function TableauEmbed() {
    const ref = useRef(null);
    const url = 
    "https://public.tableau.com/views/PercantegeofNon-renewableEnergyFrom2001to2020/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link";

    function initViz() {
        new tableau.Viz(ref.current, url);
    }

    useEffect(() => {
        initViz();
    },[]);

    return (
        <div>
            <p> Non-Renewable Energy Consumption from 2001 - 2020. </p>
            <div> 
                ref={ref}
            </div>
        </div>
    );
}

export default TableauEmbed;

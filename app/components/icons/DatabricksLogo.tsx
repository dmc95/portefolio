import React, { ComponentPropsWithoutRef } from 'react'

const DatabricksLogo = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
    return (
        <svg 
        width={props.size}
        height={props.size}
        version="1.1" 
        id="Layer_1" 
        // xmlns:x="ns_extend;" 
        // xmlns:i="ns_ai;" 
        // xmlns:graph="ns_graphs;" 
        xmlns="http://www.w3.org/2000/svg" 
        // xmlns:xlink="http://www.w3.org/1999/xlink" 
        x="0px" y="0px" 
        viewBox="0 0 40.1 42"
        {...props} 
        // style="enable-background:new 0 0 40.1 42;" 
        // xml:space="preserve"
        >
        {/* <style type="text/css">
         .st0{fill:#FF3621;}
        </style>
        <metadata>
         <sfw xmlns="ns_sfw;">
          <slices>
          </slices>
          <sliceSourceBounds bottomLeftOrigin="true" height="42" width="40.1" x="-69.1" y="-10.5">
          </sliceSourceBounds>
         </sfw>
        </metadata> */}
        <g>
         <path 
         className="st0" d="M40.1,31.1v-7.4l-0.8-0.5L20.1,33.7l-18.2-10l0-4.3l18.2,9.9l20.1-10.9v-7.3l-0.8-0.5L20.1,21.2L2.6,11.6
               L20.1,2l14.1,7.7l1.1-0.6V8.3L20.1,0L0,10.9V12L20.1,23l18.2-10v4.4l-18.2,10L0.8,16.8L0,17.3v7.4l20.1,10.9l18.2-9.9v4.3l-18.2,10
               L0.8,29.5L0,30v1.1L20.1,42L40.1,31.1z"
               fill='currentColor'
               >
         </path>
        </g>
       </svg>
    )
}

export default DatabricksLogo
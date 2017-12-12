import React from 'react'
import { red100, red600 } from 'material-ui/styles/colors';
import Spinner from 'components/Spinner';
 
export default function Loading() {
   return      <div>
               <Spinner style={{position: 'fixed',top:'50%',left:'50%',WebkitTransform:'translate(-50%, -50%)',transform:'translate(-50%, -50%)'}}  name="circle" color="rgb(30, 136, 229)"/>
            </div>
}
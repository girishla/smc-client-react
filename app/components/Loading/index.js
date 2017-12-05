import React from 'react'
import RefreshIndicator from 'material-ui/RefreshIndicator';
 
export default function Loading() {
   return   <div style={{ position: 'relative' }}>
   <RefreshIndicator
     size={40}
     left={-20}
     top={200}
     status={'loading'}
     style={{ marginLeft: '50%' }}
   />
 </div>
}
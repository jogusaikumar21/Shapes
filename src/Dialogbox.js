import { useState } from "react";

import { Dialog } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";
import { DialogTitle } from "@material-ui/core";
import { DialogActions } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Createshape from "./Createshape";

function Dialogbox()
{

    const [open,setopen]=useState(false);
    const [shape,setshape]=useState({
        id:Math.floor(Math.random*1000),
        shape:"",
        width:0,
        height:0,
        xpos:0,
        ypos:0,

    });
    const [hover,sethover]=useState({});
    const [allshape,setallshape]=useState([]);
    const handleopen=()=>{
        setopen(true);
    }
    const handlechange=(e)=>{
        setshape({...shape,[e.target.name]:e.target.value})
    }
    const handlecreate=()=>{
        setopen(false);
        setallshape([...allshape,shape]);
    }
    const handleclose=()=>{
        setopen(false);
    }
    return(
        <div>
       
        <div id="main"  style={{height:"100vh"}}>
            <div id="main2">
           
            <h1 style={{color:"blue"}}>Details</h1>
            
           
            <p  style={{fontSize:"4vh"}}>{hover.shape?hover.shape:"---"}</p>
            
        
            
            <p>Mouse X-{hover?.xpos}</p>
            
          
            <p>Mouse Y-{hover?.ypos}</p>
            
         
         <button  
         style={{backgroundColor:"red"}} onClick={handleopen}>
            +Add a Shape
        </button>
        
             </div>
        </div>
        <Dialog
        open={open}  onClose={handleclose}>
          
         <DialogTitle>Create Shape</DialogTitle>

         <DialogContent>
         
         <TextField
          autoFocus
         id="shape"
         name="shape"
         label="enter the shape"
         type="text"
         margin="dense"
         
         fullWidth
         onChange={handlechange}
         />
         
         
         <TextField
          autoFocus
         id="shape"
         name="width"
         label="Width"
         type="number"
         margin="dense"
         
         onChange={handlechange}
         />

         
         <TextField
          autoFocus
         id="shape"
         name="height"
         label="Height"
         type="number"
         margin="dense"
       
         onChange={handlechange}
         />

         
         <TextField
          autoFocus
         id="shape"
         name="xpos"
         label="X-Position"
         type="number"
         margin="dense"
         onChange={handlechange}
         />

         

         <TextField
          autoFocus
         id="shape"
         name="ypos"
         label="Y-Position"
         type="number"
         margin="dense"
         onChange={handlechange}
         />

         
        </DialogContent>
        
         <DialogActions>
             <button style={{width:"100%"}} onClick={handlecreate}>Create New Shape</button>
         </DialogActions>
            
        </Dialog>
        <Createshape allshape={allshape} sethover={sethover}/>
        </div>
    )
}
export default Dialogbox;
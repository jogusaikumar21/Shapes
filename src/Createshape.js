function Createshape({allshape,sethover})
{
    
    return(
        <>
        {
            
            allshape.map((ele,index)=>(
                  <div
                    key={index}
                   style={
                       {
                       position:"absolute",
                       width:Number(ele.width),
                       height:Number(ele.height),
                       top:Number(ele.ypos),
                       left:Number(ele.xpos),
                       backgroundColor:"blueviolet",
                       opacity:"0.5"

                   }}
                    onMouseOver={()=>sethover(ele)}>

                  </div>
             ))
        }
        </>
    );
}
export default Createshape;
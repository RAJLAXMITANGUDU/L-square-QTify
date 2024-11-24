import React from "react";
import {Card,CardContent,CardMedia,Typography,Chip,Box} from "@mui/material";
const AlbumCard=({image,title,follows})=>{
    return(
        <Card
        style={{
            width:"200px",
            borderRadius:"12px",
            boxShadow:"0px 4px 10px rgba(0,0,0,0.1)",
        }}
        >
            <CardMedia 
              component="img"
              height="140"
              image={image}
              alt={title}
              style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}}
            />
            <CardContent style={{padding:"16px"}}>
                <Typography variant="h6" component="div" style={{fontWeight:"bold"}}>
                    {title}
                </Typography>
                <Box style={{marginTop:"8px"}}>
                    <Chip 
                      label={`${follows} Follows`}
                      size="small"
                      style={{backgroundColor:"#e0e0e0",fontSize:"12px",fontWeight:500}}
                    />
                </Box>
            </CardContent>
        </Card>
    )
}


export default AlbumCard;
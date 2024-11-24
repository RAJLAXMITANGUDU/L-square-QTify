import React, {useEffect,useState} from "react";
import {Box,Typography,Button,Grid} from "@mui/material";
import axios from "axios";
import AlbumCard from "./Albumcard";
const Section=({title,apiEndpoint})=>{
    const[albums,setAlbums]=useState([]);
    useEffect(()=>{
        const fetchAlbums=async()=>{
            try {
                const response=await axios.get(apiEndpoint);
                setAlbums(response.data);
            } catch (error) {
                console.error("Error fetching albums:",error);
            }
        };
        fetchAlbums();
    },[apiEndpoint]);
    return(
        <Box>
        <Box
          style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            marginBottom:"16px",
          }}
        >
            <Typography variant="h5" style={{fontWeight:"bold"}}>
                {title}
            </Typography>
            <Button 
              variant="contained"
              size="small"
              style={{backgroundColor:"#6200ea", color:"#fff",textTransform:"none"}}
            >
               collapse
            </Button>
        </Box>
        <Grid container spacing={3}>
            {albums.map((album)=>(
                <Grid item key={album.id} xs={12} sm={6} md={4} lg={3}>
                    <AlbumCard image={album.image} title={album.title} follows={album.follows} />
                </Grid>
            ))}
        </Grid>
       </Box>
    );
};
export default Section;

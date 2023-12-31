import { useState,useEffect } from "react";


import { FormGroup, FormControl, InputLabel,Input, Typography, styled, Button } from "@mui/material";

import { editAsset,getAsset,} from "../service/api";
import { useNavigate, useParams } from "react-router-dom";



const Container = styled(FormGroup)`
    width:50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px;
    }
`
const defaultValue = {
    AssetID: '',
    Name: '',
    AssetType: '',
    Description: '',
    YearofConstruction: '',
    Capacity: '',
    NumRooms: '',
    MaintanceReq: '',
    Owner: '',
}

const Editassets = ()=>{


    const [user,setUser]= useState(defaultValue);
    const navigate = useNavigate();

    const {id} = useParams();

    const onValueChange = (e) =>{
        console.log(e.target.name,e.target.value)
        setUser({...user,[e.target.name]: e.target.value})
        console.log(user);
    }

    useEffect(()=>{
        loadAssetDetails();
    
    },[])
    
    const loadAssetDetails = async () =>{
        const res = await getAsset(id);
        setUser(res.data);
    }

    const editAssetDetail =async () =>{
        await editAsset(user,id);
        navigate ('/');
    }
    return (
        <Container>
            <Typography variant="h4">Edit Asset</Typography>
            <FormControl>
                <InputLabel>Asset ID</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="AssetID" value={user.AssetID}/>
            </FormControl>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Name" value={user.Name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Asset Type</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="AssetType" value={user.AssetType}/>
            </FormControl>
            <FormControl>
                <InputLabel>Description</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Description" value={user.Description}/>
            </FormControl>
            <FormControl>
                <InputLabel>Year Of Construction</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="YearofConstruction" value={user.YearofConstruction}/>
            </FormControl>
            <FormControl>
                <InputLabel>Capacity</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Capacity" value={user.Capacity}/>
            </FormControl>
            <FormControl>
                <InputLabel>Num Rooms</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="NumRooms" value={user.NumRooms}/>
            </FormControl>
            <FormControl>
                <InputLabel>Maintenance Required</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="MaintanceReq" value={user.MaintanceReq}/>
            </FormControl>
            <FormControl>
                <InputLabel>Owner</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Owner" value={user.Owner}/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=> editAssetDetail()}>Submit</Button>
            </FormControl>
        </Container> 
    )
}


export default Editassets;
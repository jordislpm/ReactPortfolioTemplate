import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";
import SocialIcon from '../home/SocialIcon';
import {info} from "../../info/Info";

function ExperienceBlock(props) {
   const {image, live, source, title,link,icon,label} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'}/>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               
               <IconLink link={live} title={'website'} icon={'fa fa-safari'}/>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
            <SocialIcon link={link} icon={icon} label={label}/>
               {/* <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/> */}
            </Box>
         </Box>
      </Box>
   );
}

export default ExperienceBlock;
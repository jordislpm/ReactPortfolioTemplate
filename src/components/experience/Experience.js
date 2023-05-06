import React from 'react';
import ExperienceBlock from "./ExperienceBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";
import style from "./experience.module.scss";

export default function Experience() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.experience.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <ExperienceBlock 
                       image={project.image} 
                       live={project.live} 
                       source={project.source} 
                       title={project.title}
                       link={project.linkedin}
                       icon={project.icon}
                       label={project.label}/>
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};
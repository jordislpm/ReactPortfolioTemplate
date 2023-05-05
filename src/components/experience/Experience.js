import React from 'react';
import ExperienceBlock from "./ExperienceBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Experience() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <ExperienceBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};
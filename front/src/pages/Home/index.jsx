import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardIcon from '../../components/CardIcon';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const cenas = [{
  name:'comida',
  description:"muita comida",
  urlImg:'https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg'
},{
  name:'comida',
  description:"muita comida",
  urlImg:'https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg'
},{
  name:'comida',
  description:"muita comida",
  urlImg:'https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg'
}
,
{
  name:'comida',
  description:"muita comida",
  urlImg:'https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg'
},{
  name:'comida',
  description:"muita comida",
  urlImg:'https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg'
},{
  name:'comida',
  description:"muita comida",
  urlImg:'https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg'
}]

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, width:'60%', marginX:'auto', marginY:'50px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cenas.map((element, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CardIcon element={element}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
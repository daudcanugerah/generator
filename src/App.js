import React from 'react'
import Grid from '@material-ui/core/Grid'
import DesaCard from './components/DesaCard/'
import { makeStyles } from '@material-ui/core/styles'
import rawData from './raw-data.json'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  }
}))

const color = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
  '#795548',
  '#9e9e9e',
  '#607d8b'
]

const App = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {
            rawData.slice(0, 1).map((item, index) => (<Grid item><DesaCard key={index} data={item} /></Grid>))
          }
        </Grid>
      </div>
    </>
  )
}
export default App

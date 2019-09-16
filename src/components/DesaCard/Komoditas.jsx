import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Typography } from '@material-ui/core'
import farm from './../../assets/images/farm.png'
import ProtoType from 'prop-types'

const useStyles = makeStyles(theme => ({
  image: {
    alignSelf: 'center'
  },
  item: {
    padding: theme.spacing(0, 1, 0, 0)
  }
}))

const Komoditas = (props) => {
  const {
    komoditas,
    kPadi,
    kJagung,
    kUbiKayu,
  } = props.data

  const classes = useStyles()

  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={3} alignItems="center" className={classes.image}>
        {/* image */}
        <Box component="img" src={farm} height="70" width="70" />
      </Grid>
      <Grid item xs={9}>
        {/* text data */}
        <Typography component="div">
          <Box fontFamily="calibri" fontSize={15} textAlign="justify" fontWeight="fontWeightBold">
            Komoditas Utama : {komoditas}
          </Box>
        </Typography>
        <Typography component="div">
          <Box fontFamily="calibri" fontSize={14} textAlign="justify">
            Luas Tanam (ha)
          </Box>
        </Typography>
        <Grid container wrap>
          <Grid item className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              Padi : {kPadi},
            </Box>
          </Grid>
          <Grid item className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              jagung : {kJagung},
            </Box>
          </Grid>
          <Grid item className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              ubi kayu : {kUbiKayu},
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

Komoditas.propTypes = {
  data: {
    komoditas: ProtoType.string,
    kPadi: ProtoType.string,
    kJagung: ProtoType.string,
    kUbiKayu: ProtoType.string,
  }
}

export default Komoditas

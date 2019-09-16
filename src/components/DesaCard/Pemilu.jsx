import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Typography } from '@material-ui/core'
import kotakSuara from './../../assets/images/kotak suara.png'
import ProtoType from 'prop-types'

const useStyles = makeStyles(theme => ({
  image: {
    alignSelf: 'center'
  },
  root: {
    flexGrow: 1,
    maxHeight: 65
  },
  item: {
    padding: theme.spacing(0, 1, 0, 0)
  }
}))

const Pemilu = ({ data }) => {
  const {
    tps,
    pemilih,
    p01,
    p02,
    pGolput
  } = data
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container direction="row">
        <Grid item xs={3} alignItems="center" className={classes.image}>
          {/* image */}
          <Box component="img" src={kotakSuara} height="70" width="55" />
        </Grid>
        <Grid item xs={9} >
          <Grid container>
            <Grid item xs={6} className={classes.item}>
              <Box fontFamily="calibri" fontSize={15} textAlign="justify" fontWeight="fontWeightBold">
                  Pemilu 2019
              </Box>
            </Grid>
            <Grid item xs={6} className={classes.item}>
              <Box fontFamily="calibri" fontSize={15} textAlign="justify" fontWeight="fontWeightBold">
                  (Jumlah)
              </Box>
            </Grid>
            <Grid item xs={6} className={classes.item} >
              <Box fontFamily="calibri" fontSize={14} textAlign="justify">
                TPS : {tps}
              </Box>
            </Grid>
            <Grid item xs={6} className={classes.item} >
              <Box fontFamily="calibri" color="#d50000" fontSize={14} textAlign="justify" fontWeight="fontWeightBold">
                01 : {p01}
              </Box>
            </Grid>
            <Grid item xs={6} className={classes.item} >
              <Box fontFamily="calibri" fontSize={14} textAlign="justify">
                Pemilih : {pemilih}
              </Box>
            </Grid>
            <Grid item xs={6} className={classes.item}>
              <Box fontFamily="calibri" color="#2979ff" fontSize={14} textAlign="justify" fontWeight="fontWeightBold">
                02 : {p02}
              </Box>
            </Grid>
            <Grid item xs={6} className={classes.item}>
            </Grid>
            <Grid item xs={6} className={classes.item}>
            <Typography component="div">
              <Box fontFamily="calibri" fontSize={14} textAlign="justify">
                Golput : {pGolput}
              </Box>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

Pemilu.propTypes = {
  data: {
    tps: ProtoType.string,
    pemilih: ProtoType.string,
    p01: ProtoType.string,
    p02: ProtoType.string,
    pGolput: ProtoType.string
  }
}

export default Pemilu

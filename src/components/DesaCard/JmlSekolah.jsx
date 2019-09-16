import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Typography } from '@material-ui/core'
import sekolah from './../../assets/images/sekolah.png'
import ProtoType from 'prop-types'

const useStyles = makeStyles(theme => ({
  image: {
    alignSelf: 'center'
  },
  item:{
    padding : theme.spacing(0,1,0,0)
  }
}))

const JmlSekolah = (props) => {
  const {
    sTk,
    sSmp,
    sSmk,
    sSd,
    sSma,
    sPt,
  } = props.data

  const classes = useStyles()

  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={3} alignItems="center" className={classes.image}>
        {/* image */}
        <Box component="img" src={sekolah} height="65" width="65" />
      </Grid>
      <Grid item xs={9}>
        {/* text data */}
        <Typography component="div">
          <Box fontFamily="calibri" fontSize={15} textAlign="justify" fontWeight="fontWeightBold">
            Jumlah Sekolah
          </Box>
        </Typography>
        <Grid container spacing={0}>
            <Grid item xs={6} className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              TK : {sTk},
            </Box>
            </Grid>
            <Grid item xs={6} className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              SD : {sSd},
            </Box>
            </Grid>
            <Grid item xs={6} className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              SMP : {sSmp},
            </Box>
            </Grid>
            <Grid item xs={6} className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
            SMA : {sSma},
            </Box>
            </Grid>
            <Grid item xs={6} className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              SMK : {sSmk},
            </Box>
            </Grid>
            <Grid item xs={6} className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              PT : {sPt},
            </Box>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

JmlSekolah.propTypes = {
  data: {
sTk : ProtoType.string,
sSmp : ProtoType.string,
sSmk : ProtoType.string,
sSd : ProtoType.string,
sMa : ProtoType.string,
sPT : ProtoType.string,
  }
}

export default JmlSekolah

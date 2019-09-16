import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Typography } from '@material-ui/core'
import farmer from './../../assets/images/farmer.png'
import ProtoType from 'prop-types'

const useStyles = makeStyles(theme => ({
  image: {
    alignSelf: 'center'
  },
  item:{
    padding : theme.spacing(0,1,0,0)
  }
}))

const JmlPetani = (props) => {
  const {
    kPangan,
    kHoltikura,
    kPerkebunan,
    kPeriakanan,
    kPeternakan,
  } = props.data

  const classes = useStyles()

  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={3} alignItems="center" className={classes.image}>
        {/* image */}
        <Box component="img" src={farmer} height="70" width="70" />
      </Grid>
      <Grid item xs={9}>
        {/* text data */}
        <Typography component="div">
          <Box fontFamily="calibri" fontSize={15} textAlign="justify" fontWeight="fontWeightBold">
            Jumlah Anggota Rumah Tangga Petani
          </Box>
        </Typography>
        <Grid container wrap>
            <Grid item className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              Pangan : {kPangan},
            </Box>
            </Grid>
            <Grid item className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              Holtikultura : {kHoltikura},
            </Box>
            </Grid>
            <Grid item className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              Perkebunan : {kPerkebunan},
            </Box>
            </Grid>
            <Grid item className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
            Peternakan : {kPeternakan},
            </Box>
            </Grid>
            <Grid item className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              Perikanan : {kPeriakanan},
            </Box>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

JmlPetani.propTypes = {
  data: {
    kPangan : ProtoType.string,
    kHoltikura : ProtoType.string,
    kPerkebunan : ProtoType.string,
    kPeriakanan : ProtoType.string,
    kPeternakan : ProtoType.string,
  }
}

export default JmlPetani

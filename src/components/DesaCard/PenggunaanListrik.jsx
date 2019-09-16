import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Typography } from '@material-ui/core'
import pln from './../../assets/images/pln.png'
import ProtoType from 'prop-types'

const useStyles = makeStyles(theme => ({
  image: {
    alignSelf : 'center'
  }
}))

const PenggunaListrik = (props) => {
  const {
    penggunaListrik,
    kkListrik,
    kkNonListrik,
  } = props.data

  const classes = useStyles()

  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={3} className={classes.image}>
        {/* image */}
        <Box component="img" src={pln} height="65" width="65" />
      </Grid>
      <Grid item>
        {/* text data */}
        <Typography component="div">
          <Box fontFamily="calibri" fontSize={15} textAlign="justify" fontWeight="fontWeightBold">
            Penggunaan Listrik : {penggunaListrik}
          </Box>
          <Box fontFamily="calibri" fontSize={14} textAlign="justify">
            KK Dengan Listrik : {kkListrik}
          </Box>
          <Box fontFamily="calibri" fontSize={14} textAlign="justify">
            KK Tanpa Listrik : {kkNonListrik}
          </Box>
        </Typography>
      </Grid>
    </Grid>
  )
}

PenggunaListrik.propTypes = {
  data: {
    penggunaListrik : ProtoType.string,
    kkListrik : ProtoType.string,
    kkNonListrik : ProtoType.string,
  }
}

export default PenggunaListrik

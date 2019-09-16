import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Typography } from '@material-ui/core'
import geo from './../../assets/images/geo.png'
import ProtoType from 'prop-types'

const useStyles = makeStyles(theme => ({
  image: {
    // padding: theme.spacing(1)
    alignSelf : 'center'
  }
}))

const LuasWilayah = (props) => {
  const {
    luasWilayah,
    tofografi,
    ketinggian,
    laluLintas,
    penghasilanUtama,
    } = props.data

  const classes = useStyles()

  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={3} className={classes.image}>
        {/* image */}
        <Box component="img" src={geo} height="70" width="70"/>
      </Grid>
      <Grid item>
        {/* text data */}
        <Typography component="div">
          <Box fontFamily="calibri" fontSize={15} textAlign="justify" fontWeight="fontWeightBold">
            Luas Wilayah : { luasWilayah }
          </Box>
          <Box fontFamily="calibri" fontSize={14} textAlign="justify">
            Tofografi : { tofografi }
          </Box>
          <Box fontFamily="calibri" fontSize={14} textAlign="justify">
            Ketinggian : { ketinggian }
          </Box>
          <Box fontFamily="calibri" fontSize={14} textAlign="justify">
            Lalu Lintas : { laluLintas }
          </Box>
          <Box fontFamily="calibri" fontSize={14} textAlign="justify">
            Penghasilan Utama : { penghasilanUtama }
          </Box>
        </Typography>
      </Grid>
    </Grid>
  )
}

LuasWilayah.propTypes = {
  luasWilayah: ProtoType.string,
  tofografi: ProtoType.string,
  ketinggian: ProtoType.string,
  laluLintas: ProtoType.string,
  penghasilanUtama: ProtoType.string
}

LuasWilayah.defaultProps = {
  luasWilayah: '',
  tofografi: '',
  ketinggian: '',
  laluLintas: '',
  penghasilanUtama: ''
}

export default LuasWilayah

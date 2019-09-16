import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Typography } from '@material-ui/core'
import peternakan from './../../assets/images/peternakan.png'
import ProtoType from 'prop-types'

const useStyles = makeStyles(theme => ({
  image: {
    alignSelf: 'center'
  },
  item: {
    padding: theme.spacing(0, 1, 0, 0)
  }
}))

const LuasWilayah = (props) => {
  const {
    pSapi,
    pKerbau,
    pKambing,
    pDomba,
    pBuras,
    pAyamRas,
    pAyamPeterlur,
    pItik,
    pPerikanan
  } = props.data

  const classes = useStyles()

  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={3} alignItems="center" className={classes.image}>
        {/* image */}
        <Box component="img" src={peternakan} height="70" width="70" />
      </Grid>
      <Grid item xs={9}>
        {/* text data */}
        <Typography component="div">
          <Box fontFamily="calibri" fontSize={15} textAlign="justify" fontWeight="fontWeightBold">
            Populasi Ternak
          </Box>
        </Typography>
        <Grid container wrap>
          <Grid item className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              Sapi : {pSapi},
            </Box>
          </Grid>
          <Grid item className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              Kerbau : {pKerbau},
            </Box>
          </Grid>
          <Grid item className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              Kambing : {pKambing},
            </Box>
          </Grid>
          <Grid item className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              Domba : {pDomba},
            </Box>
          </Grid>
          <Grid item className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              Ayam Buras : {pBuras},
            </Box>
          </Grid>
          <Grid item className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              Ayam Ras : {pAyamRas},
            </Box>
          </Grid>

          <Grid item className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              Ayam Petelur : {pAyamPeterlur}
            </Box>
          </Grid>
          <Grid item className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              Itik : {pItik}
            </Box>
          </Grid>
        </Grid>
        <br></br>
        <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              Produksi Perikanan : {pPerikanan}
        </Box>

      </Grid>
    </Grid>
  )
}

LuasWilayah.propTypes = {
  data: {
    pSapi: ProtoType.strng,
    pKerbau: ProtoType.strng,
    pKambing: ProtoType.strng,
    pDomba: ProtoType.strng,
    pAyam: ProtoType.strng,
    pBuras: ProtoType.strng,
    pAyamRas: ProtoType.strng,
    pAyamPeterlur: ProtoType.strng,
    pPerikanan: ProtoType.strng
  }
}

export default LuasWilayah

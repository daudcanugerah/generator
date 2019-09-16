import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Typography } from '@material-ui/core'
import penduduk from './../../assets/images/penduduk2.jpg'
import female from './../../assets/images/female.png'
import male from './../../assets/images/male.jpg'
import ProtoType from 'prop-types'

const useStyles = makeStyles(theme => ({
  image: {
    alignSelf: 'center'
  }
}))

const Pemilu = ({ data }) => {
  const {
    jPenduduk,
    jKeluarga,
    kepadatan,
    pMale,
    pFemale
  } = data
  const classes = useStyles()

  return (
    <div style={{ maxHeight: 70 }}>
      <Grid container>
        <Grid item xs={3} alignItems="center" className={classes.image}>
          {/* image */}
          <Box component="img" src={penduduk} height="65" width="68" />
        </Grid>
        <Grid item container xs={5} direction="column">
          <Grid item>
            <Box fontFamily="calibri" fontSize={15} textAlign="justify" fontWeight="fontWeightBold">
                  J Penduduk : {jPenduduk}
            </Box>
          </Grid>
          <Grid item>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
                  J Keluarga {jKeluarga}
            </Box>

          </Grid>
          <Grid item>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
                  Kepadatan {kepadatan}
            </Box>

          </Grid>
        </Grid>
        <Grid item container xs={4} direction="column" spacing={1}>
          <Grid item container direction="row" alignItems="center">
            <Grid item>
              <Box component="img" src={female} height="23" width="14" />
            </Grid>
            <Grid item>
                &nbsp;&nbsp;&nbsp;{pFemale}
            </Grid>
          </Grid>
          <Grid item container direction="row" alignItems="center">
            <Grid item>
              <Box component="img" src={male} height="23" width="14" />
            </Grid>
            <Grid item>
                &nbsp;&nbsp;&nbsp;{pMale}
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

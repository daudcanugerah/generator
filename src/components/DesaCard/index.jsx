import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Box, Typography } from '@material-ui/core'
import LuasWilayah from './LuasWilayah'
import ProtoType from 'prop-types'
import PenggunaListrik from './PenggunaanListrik'
import PopulasiTernak from './PopulasiTernak'
import JmlPetani from './JmlPetani'
import Komoditas from './Komoditas'
import Insfrastuktur from './Insfrastuktur'
import JmlSekolah from './JmlSekolah'
import Pemilu from './Pemilu'
import JmlPenduduk from './JmlPenduduk'
import domtoimage from 'dom-to-image-more'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 370
  },
  container: {
    // some value
  },
  item: {
    padding: theme.spacing(0, 2)
  },
  header: {
    flexGrow: 1,
    color: 'white',
    marginBottom: theme.spacing(1)
  },
  body: {
    // padding: theme.spacing(0)
  }
}))

const DesaCard = ({ data }) => {
  const classes = useStyles()

  useEffect(() => {
    domtoimage.toJpeg(document.getElementById('dom'), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement('a')
        link.download = 'my-image-name.jpeg'
        link.href = dataUrl
        link.click()
    })
  }, [])
  return (
    <>
    <div id="image">

    </div>
    <div className={classes.root} id="dom" style={{ border: '1px solid black' }}>
      <Paper>
        <Grid container direction="column" className={classes.container}>
          <Grid item className={classes.header} style={{ background: 'blue' }}>
            <Typography component="div">
              <Box fontFamily="calibri" fontSize={22} m={1} textAlign="center" fontWeight="700">
                Desa {data.des}
              </Box>
            </Typography>
          </Grid>
          <Grid item className={classes.item}>
            <LuasWilayah data={data} />
          </Grid>
          <Grid item className={classes.item}>
            <JmlPenduduk data={data} />
          </Grid>
          <Grid item className={classes.item}>
            <JmlSekolah data={data} />
          </Grid>
          <Grid item className={classes.item}>
            <PenggunaListrik data={data} />
          </Grid>
          <Grid item className={classes.item}>
            <Pemilu data={data} />
          </Grid>
          <Grid item className={classes.item}>
            <Insfrastuktur data={data} />
          </Grid>
          <Grid item className={classes.item}>
            <Komoditas data={data} />
          </Grid>
          <Grid item className={classes.item}>
            <JmlPetani data={data} />
          </Grid>
          <Grid item className={classes.item} style={{ paddingBottom: '16px' }}>
            <PopulasiTernak data={data} />
          </Grid>
        </Grid>
      </Paper>
    </div>
    </>
  )
}

DesaCard.propTypes = {
  data: ProtoType.object
}

export default DesaCard

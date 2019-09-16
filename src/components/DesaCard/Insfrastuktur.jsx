import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Typography } from '@material-ui/core'
import infrastructure from './../../assets/images/infrastructure.jpg'
import ProtoType from 'prop-types'

const useStyles = makeStyles(theme => ({
  image: {
    alignSelf: 'center'
  },
  item: {
    padding: theme.spacing(0, 1, 0, 0)
  }
}))

const Insfrastuktur = (props) => {
  const {
    insATM,
    insBengkel,
    insPasar,
    insToko,
    insWarung,
    insUmkm
  } = props.data

  const classes = useStyles()

  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={3} alignItems="center" className={classes.image}>
        {/* image */}
        <Box component="img" src={infrastructure} height="65" width="65" />
      </Grid>
      <Grid item xs={9}>
        {/* text data */}
        <Typography component="div">
          <Box fontFamily="calibri" fontSize={15} textAlign="justify" fontWeight="fontWeightBold">
            Insfrastuktur
          </Box>
        </Typography>
        <Grid container wrap>
          <Grid item className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              ATM : {insATM},
            </Box>
          </Grid>
          <Grid item className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              Bengkel : {insBengkel},
            </Box>
          </Grid>
          <Grid item className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              Pasar/Minimarket : {insPasar},
            </Box>
          </Grid>
          <Grid item className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
            Toko Kelontog : {insToko},
            </Box>
          </Grid>
          <Grid item className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
            UMKM : {insUmkm},
            </Box>
          </Grid>
          <Grid item className={classes.item}>
            <Box fontFamily="calibri" fontSize={14} textAlign="justify">
              Warung/Kedai Makanan : {insWarung},
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

Insfrastuktur.propTypes = {
  data: {
    insATM: ProtoType.string,
    insBengkel: ProtoType.string,
    insPasar: ProtoType.string,
    insToko: ProtoType.string,
    insWarung: ProtoType.string,
    insUmkm: ProtoType.string
  }
}

export default Insfrastuktur

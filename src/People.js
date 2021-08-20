// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { Grid } from '@material-ui/core';
// import Modal from '@material-ui/core/Modal';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles( (theme) => ({
//   root: {
//     maxWidth: 200,
//   },
//   media: {
//     height: 100,
//     borderRadius: 60,
//     width: 100
//   },
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: 'white',
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// const People = ({people}) => {
//   const classes = useStyles();

//   const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div> 
//       <Grid item container alignItems = "center" justifyContent = "center" >

//     {people.map(person => (
//       <Grid item xs={4} > 
//         <Card className={classes.root}>
//         <CardActionArea>
//           <CardMedia
//             className={classes.media}
//             image={person.picture.thumbnail}
//             title="Contemplative Reptile"
//           />
//           <CardContent>
//             <Typography variant="body2" color="textSecondary" component="p">
//               {person.name.first} {person.name.last} | {person.location.state}, {person.location.country} 
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary" onClick={handleOpen}>
//             Learn More
//           </Button>
//           <Modal
//           style={{opacity: 0.4}}
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="simple-modal-title"
//           aria-describedby="simple-modal-description"
//           >
            
//         <div style={modalStyle} className={classes.paper}>
//             <h2 id="simple-modal-title"> {person.name.first} </h2>
//             <p id="simple-modal-description">
//              {person.dob.age}
//             </p>
//           </div>        
//           </Modal>
//         </CardActions>
//       </Card>
//       </ Grid>
//     ))}

//       </Grid>
//     </div>
//   )
// }




//   export default People
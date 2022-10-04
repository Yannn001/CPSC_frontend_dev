import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Modal } from '@mui/material';
import Typography from '@mui/material/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '50%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Popuppp() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const[verify,setverify]=useState([])

  const handleClick = (e) => {
    e.preventDefault()
    const verify = { email, password }
    console.log(verify)
    fetch("http://localhost:8080/student/verify/" + email + "/" + password, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(async response => {
        const flag = await response.text();
        if (flag == "true") {
          window.location = ('http://localhost:3000/home')
        }
        else {
          window.alert("密码错误\nwrong password");
        }
      }
      )
  }

  return (
    <div>
      <Button variant="outlined" size="small" onClick={handleOpen} style={{ borderRadius: 8 }} >Sign in</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Grid container component="main" className={classes.paper}>
          <Grid item xs={6} sm={8} md={10} component={Paper} elevation={100} square style={{ borderRadius: 8 }}>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <table>
                </table>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleClick}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2" margin="auto">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="http://localhost:3000/Signup" variant="body2">
                      {"Create account"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
      primary: { main: '#44a1f2' },
      secondary: { main: '#fafafa' },
    },
    typography: { useNextVariants: false },
    overrides: {
        MuiButton: {
          raisedPrimary: {
            color: 'white',
          },
        },
    },
  });

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
        <MuiThemeProvider theme={theme}>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                excluir
            </Button>
        </MuiThemeProvider>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-deion"
        >
            <DialogTitle id="alert-dialog-title">{"Excluir Monitoria?"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-deion">
                Deseja realmente excluir a monitoria?
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                cancelar
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
                excluir
            </Button>
            </DialogActions>
      </Dialog>
    </div>
  );
}
import { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dayjs } from "dayjs";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { MuiTelInput } from "mui-tel-input";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers";


const defaultTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Form() {
  const [name, setName] = useState<string | null>("");
  const [email, setEmail] = useState<string | null>("");
  const [date, setDate] = useState<Dayjs | string| null>(null);
  const [phone, setPhone] = useState<string>("+91")
const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("redirecting")
    localStorage.setItem("Name", name!)
    localStorage.setItem("Email", email!)
    // localStorage.setItem("Date", date! as unknown as string)
    localStorage.setItem("Phone", phone!)
    navigate('/quiz')
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handlePhone = (value: SetStateAction<string>) => {
    setPhone(value)
  };

  useEffect(() => {
    if(localStorage.getItem("Name")){
        setName(localStorage.getItem("Name"))
        setEmail(localStorage.getItem("Email"))
        // setDate(localStorage.getItem("Date") as string)
        setPhone(localStorage.getItem("Phone")!)
    }
    
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={name}
                  onChange={handleName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DatePicker label="Date of Birth" value={date} onChange={(newValue) => setDate(newValue)} defaultValue={date} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <MuiTelInput label= "Phone number" value={phone!} onChange={handlePhone} />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled = {(name && date && email && phone) ? false : true}
            >
              Start Quiz
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

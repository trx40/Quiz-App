import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
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
import { submitForm, getFormData, updateForm } from "../../api"; // Import the API service

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export interface FormData {
  username?: string;
  phone: string;
  name: string;
  email: string;
  date: string | Dayjs;
}

export default function Form() {
  // const [name, setName] = useState<string | null>("")
  // const [email, setEmail] = useState<string | null>("");
  // const [date, setDate] = useState<Dayjs | string| null>(null);
  // const [phone, setPhone] = useState<string>("+91")

  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state;
  const [formData, setFormData] = useState<FormData>({
    phone: "",
    email: "",
    name: "",
    date: dayjs(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date: string | Dayjs) => {
    setFormData({
      ...formData,
      date: date,
    });
  };

  const handlePhoneChange = (newValue: string) => {
    setFormData({
      ...formData,
      phone: newValue,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if(username) {
        
        await updateForm(username, formData);
      } else {
        await submitForm(formData);
      }
      navigate('/result')
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
    
  };

  useEffect(() => {
    if (username) {
      getFormData(username)
      .then((data: FormData) => {
        setFormData(data);
      })
      .catch((error: Error) => {
        console.error("Error fetching form data: ", error);
      });
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
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DatePicker
                  label="Date of Birth"
                  value={dayjs(formData.date)}
                  onChange={(newDate) => {
                    handleDateChange(dayjs(newDate));
                  }}
                  defaultValue={dayjs('2022-04-17')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <MuiTelInput
                  label="Phone number"
                  value={formData.phone!}
                  onChange={(newValue) => {
                    handlePhoneChange(newValue);
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={
                  formData.name &&
                  formData.date &&
                  formData.email &&
                  formData.phone
                    ? false
                    : true
                }
              >
                Submit
              </Button>
              <Button
                fullWidth
                href="/"
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                Cancel
              </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

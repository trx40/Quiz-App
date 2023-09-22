import { useState } from "react";
import { useNavigate,  } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function SignIn() {
  const [userName, setUserName] = useState<string>("");
  const navigate = useNavigate()
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    console.log("Submit Signin")
    navigate('/form', { state: userName })
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.currentTarget.value);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h1" gutterBottom>
            Questionnaire
          </Typography>
          <Box sx={{ width: "100%", mt: 3,mb: 2 }}>
            <Stack spacing={2}>
              <Item>You will be asked basic information for a survey</Item>
              <Item>You can update the answers by signing in again</Item>
            </Stack>
          </Box>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="username"
              value={userName}
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled = {userName ? false : true}
              
            >
              Sign In
            </Button>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}

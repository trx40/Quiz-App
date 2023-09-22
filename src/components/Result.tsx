import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
function Result() {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };
  const defaultTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
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
            Success!
          </Typography>
          <Box sx={{ width: "100%", mt: 3, mb: 2 }}>
            <Stack spacing={2}>
              <Item>Your form has been submitted.</Item>
              <Item>
                Thanks for filling out your information for this survey
              </Item>
              <Item>
                You can edit your responses by signing back at the home page
              </Item>
            </Stack>
          </Box>
          <Box
            component="form"
            onSubmit={handleReturnHome}
            noValidate
            sx={{ mt: 1 }}
          >
            {" "}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Return to homepage
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Result;

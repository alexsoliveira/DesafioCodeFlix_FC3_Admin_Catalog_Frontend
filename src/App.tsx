import { Box, ThemeProvider } from '@mui/system';
import { Hearder } from './components/Hearder';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';
import { Routes, Route, Link } from 'react-router-dom';
import { CategoryList } from './features/categories/ListCategory';
import { CategoryCreate } from './features/categories/CreateCategory';
import { CategoryEdit } from './features/categories/EditCategory';
import { Typography } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component='main'
        sx={{
          height: '100vh',
          backgroundColor: (theme) => theme.palette.grey[900],
        }}
      >
        <Hearder />
        <Layout>
          <h1>Welcome to React Router!</h1>
          <Routes>
            <Route path="/" element={<CategoryList />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/categories/create" element={<CategoryCreate />} />
            <Route path="/categories/edit/:id" element={<CategoryEdit />} />

            <Route path="*" element={
              <Box sx={{ color: "write" }}>
                <Typography variant="h1">404</Typography>
                <Typography variant="h2">Page not found</Typography>                
              </Box>
            } />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;

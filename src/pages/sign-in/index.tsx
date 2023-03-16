import { useCallback, useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Input } from "~/components"
import { options } from './options';
import { useForm } from '~/common/hooks';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '~/contexts/auth';

interface IFormData {
  password: string;
  username: string
}

function SignIn() {
  const { updateUsername } = useContext(AuthContext)
  const { form, setForm } = useForm<IFormData>({ password: '', username: '' })

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    updateUsername(form.data.username)
    navigate('/dashboard')
  };

  const updateData = useCallback((key: string, value: string) => {
    setForm({ ...form, data: { ...form.data, [key]: value } })
  }, [form])

  useEffect(() => {
    const enabled = form.data.password !== '' && form.data.username !== ''
    setForm({ ...form, enabled })
  }, [form.data])

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography component="h1" variant="h5">
          Embark manager
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Input
            id={options.username}
            name={options.username}
            label="Username"
            value={form.data.username}
            onChange={(e) => updateData("username", e.target.value)}
          />
          <Input
            id={options.password}
            name={options.password}
            label="Password"
            type="password"
            value={form.data.password}
            onChange={(e) => updateData("password", e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!form.enabled}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default SignIn;
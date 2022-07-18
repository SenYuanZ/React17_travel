import { Navigate } from 'react-router-dom'
import { HomePage, SignInPage, RegisterPage, DetailPage } from '../pages'

const routes = [
  { path: '/home', element: <HomePage /> },
  { path: '/signIn', element: <SignInPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/detail/:touristRouteId', element: <DetailPage /> },
  { path: '*', element: <h1>404页面</h1> },
  { path: '/', element: <Navigate to={'/home'} /> }
]

export default routes

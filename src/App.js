import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/Homepage';
import { PostPage } from './components/Posts';
import { RQPage } from './components/RQPost';
import { QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from "react-query/devtools"

function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <h1>Learning the TanStack/React Query</h1>
      <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li><Link to="/posts">Posts</Link></li>
              <li><Link to="/rq-posts">RQ Post</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostPage />} />
            <Route path="/rq-posts" element={<RQPage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
      
    </>
  );
}

export default App;

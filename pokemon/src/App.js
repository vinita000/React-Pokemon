import Pokeinfo from './components/Pokeinfo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonDetail from './components/PokemonDetail'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Pokeinfo />} />
          <Route path='/pokemon/:id' element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

// import pokemonDetail from './components/pokemonDetail';
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import ReactDOM from "react-dom/client";
// import usePokemon from './utils/usePokemon';

// function App() {
//   return (
//     <div className='App'>
//       <h1 className='font-bold text-xl p-5 text-center'>Pokemon List</h1>
//      <Outlet />
//     </div>
//   );
// }

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/pokemon/:id",
//         element: <pokemonDetail />,
//       },
//     ]
//   }
// ])

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);

// export default App;

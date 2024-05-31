import { Provider } from "react-redux";
import appStore from "./utils/AppStore";
import { RouterProvider } from "react-router-dom";
import Browse from "./components/Browse";
import DefaultPage from "./components/DefaultPage";
import { createBrowserRouter } from "react-router-dom";


const App = () => {

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <DefaultPage/>
    },
    {
      path : "/browse",
      element : <Browse/>
    }
   ])

  return (
    <div>
      <Provider store={appStore}>
      <RouterProvider router={appRouter}>
       <DefaultPage/>
       </RouterProvider>
       </Provider>
    </div>
  );
}

export default App;

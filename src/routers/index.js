import { createBrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import MainContainer from "../components/MainContainer";
import WatchPage from "../components/WatchPage";
import ChannelDetails from "../components/ChannelDetails";
import SearchPage from "../components/SearchPage";
import ErrorPage from "../components/Error";
import HistoryPage from "../components/History";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/channel/:channelId",
        element: <ChannelDetails />,
      },
      {
        path: "/results",
        element: <SearchPage />,
      },
      {
        path: "/history",
        element: <HistoryPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default appRouter;

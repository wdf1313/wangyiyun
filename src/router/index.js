import React from 'react';
import { Redirect } from "react-router-dom";
// import HYDiscover from "../pages/Discover/index";
// import HYRecommend from "../pages/Discover/c-pages/recommend/index";
// import HYRanking from "../pages/Discover/c-pages/ranking/index";
// import HYSongs from "../pages/Discover/c-pages/songs/index";
// import HYDjradio from "../pages/Discover/c-pages/djradio/index";
// import HYArtist from "../pages/Discover/c-pages/artist/index";
// import HYAlbum from "../pages/Discover/c-pages/album/index";
// import HYPlayer from '../pages/player/index'
// import HYFriend from "../pages/Friend/index";
// import HYMine from "../pages/Mine/index";

const HYDiscover = React.lazy(_ => import("../pages/Discover"));
const HYRecommend = React.lazy(_ => import("../pages/Discover/c-pages/recommend"));
const HYRanking = React.lazy(_ => import("../pages/Discover/c-pages/ranking"));
const HYSongs = React.lazy(_ => import("../pages/Discover/c-pages/songs"));
const HYDjradio = React.lazy(_ => import("../pages/Discover/c-pages/djradio"));
const HYArtist = React.lazy(_ => import("../pages/Discover/c-pages/artist"));
const HYAlbum = React.lazy(_ => import("../pages/Discover/c-pages/album"));
const HYPlayer = React.lazy(_ => import("../pages/player"));
const HYFriend = React.lazy(_ => import("../pages/Friend"));
const HYMine = React.lazy(_ => import("../pages/Mine"));
const routes= [
  {
    path: "/",
   exact:true,
    render: () => (
      <Redirect to="/discover"/>
    )
  },
  {
    path: "/discover",
    component: HYDiscover,
    routes: [
      {
        path: "/discover",
        exact:true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: "/discover/recommend",
        component: HYRecommend
      },
      {
        path: "/discover/ranking",
        component: HYRanking
      },
      {
        path: "/discover/songs",
        component: HYSongs
      },
      {
        path: "/discover/djradio",
        component: HYDjradio
      },
      {
        path: "/discover/artist",
        component: HYArtist
      },
      {
        path: "/discover/album",
        component: HYAlbum
      },
      {
        path:"/discover/player",
        component:HYPlayer
      }
    ]
  },
  {
    path: "/friend",
    component: HYFriend
  },
  {
    path: "/mine",
    component: HYMine
  }
]
export default routes
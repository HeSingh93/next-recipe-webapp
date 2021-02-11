import dynamic from "next/dynamic";
import React from "react";

export default function RenderMap() {
  const MapThing = React.useMemo(() => dynamic(
      () => import ("./MainMap"),
      {
        loading: () => <p>A map is loading</p>,
        ssr: false
      } ), [])
  return <MapThing/>
}
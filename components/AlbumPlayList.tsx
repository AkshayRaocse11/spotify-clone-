"use client";
import React, { useEffect, useState } from "react";
import AlbumPlaylistPresentation from "./AlbumPlaylistPresentation";
import useSpotifyAccessToken from "@/hooks/useSpotifyAccessToken";

interface Playlist {
  id: string;
  name: string;
  owner: { display_name: string };
  images: { url: string }[];
}

const AlbumPlayList: React.FC = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  const accessToken = useSpotifyAccessToken();

  useEffect(() => {
    const fetchPlaylists = async (): Promise<void> => {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/browse/categories/mood",
          {
            headers: {
              Authorization: accessToken,
            },
          }
        );

        const data = await response.json();
        console.log(data)
        if (response.ok) {
          setPlaylists(data.playlists.items);
        } else {
          console.error("Error fetching playlists:", data.error);
        }
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };

    if (accessToken) {
      fetchPlaylists();
    }
  }, [accessToken]);

  return <AlbumPlaylistPresentation playlists={playlists} />;
};

export default AlbumPlayList;

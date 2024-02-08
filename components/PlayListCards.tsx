"use client";
import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import useSpotifyAccessToken from "@/hooks/useSpotifyAccessToken";

interface Playlist {
  id: string;
  name: string;
  images: { url: string }[];
  external_urls: { spotify: string };
}

const PlayListCards: React.FC = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const accessToken: string = useSpotifyAccessToken();

  useEffect(() => {
    if (accessToken) {
      const fetchPlaylists = async () => {
        try {
          const response = await fetch(
            "https://api.spotify.com/v1/browse/categories/toplists/playlists?country=IN",
            {
              headers: {
                Authorization: accessToken,
              },
            }
          );

          const data = await response.json();
          setPlaylists(data.playlists.items.slice(0, 6)); // Display only the top 6 playlists
        } catch (error) {
          console.error("Error fetching playlists:", error);
        }
      };

      fetchPlaylists();
    }
  }, [accessToken]);

  return (
    <>
      {playlists.map((playlist) => (
        <ListItem
          key={playlist.id}
          image={playlist.images[0].url}
          name={playlist.name}
          href={playlist.external_urls.spotify}
        />
      ))}
    </>
  );
};

export default PlayListCards;

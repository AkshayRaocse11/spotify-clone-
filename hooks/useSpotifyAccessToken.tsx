import { useEffect, useState } from "react";

const useSpotifyAccessToken = (): string => {
  const [accessToken, setAccessToken] = useState<string>("");

  useEffect(() => {
    const fetchAccessToken = async (): Promise<void> => {
      try {
        const clientId: string = "6732ba4dd7494853a25a68a4b4874dea"; // Replace with your client ID
        const clientSecret: string = "b122dd71d2fc47c2867da612675aed8d"; // Replace with your client secret

        const response = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
          },
          body: "grant_type=client_credentials",
        });

        const data = await response.json();

        if (response.ok) {
          setAccessToken(`Bearer ${data.access_token}`);
        } else {
          console.error("Error fetching access token:", data.error);
        }
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
    };

    fetchAccessToken();
  }, []);

  return accessToken;
};

export default useSpotifyAccessToken;

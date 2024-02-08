import { useEffect, useState } from "react";

const useSpotifyAccessToken = (): string => {
  const [accessToken, setAccessToken] = useState<string>("");

  useEffect(() => {
    const fetchAccessToken = async (): Promise<void> => {
      try {
        const clientId: string = "a62996ee08fd4db6a4c8662d85b9c1d6"; // Replace with your client ID
        const clientSecret: string = "80273e8a780f4f429f05839dcef1e913"; // Replace with your client secret

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

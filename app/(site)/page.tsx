import AlbumPlayList from "@/components/AlbumPlayList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PlayListCards from "@/components/PlayListCards";

export default function Home() {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1
            className="
            text-white 
              text-3xl 
              font-semibold
              mb-4
            "
          >
            Welcome back
          </h1>
          
          <iframe
            title="Spotify Embed: Recommendation Playlist "
            src={`https://open.spotify.com/embed/playlist/37i9dQZF1DXdpQPPZq3F7n?utm_source=generator&theme=0`}
            width="100%"
            height="100%"
            style={{ minHeight: "360px" }}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy" 
          />

          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              xl:grid-cols-3 
              2xl:grid-cols-4 
              gap-3 
              mt-6
            "
          >
            <PlayListCards />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Newest songs</h1>
        </div>
        <div
          className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              xl:grid-cols-3 
              2xl:grid-cols-4 
              gap-3 
              mt-4
            "
        >
          <AlbumPlayList />
        </div>
      </div>
    </div>
  );
}

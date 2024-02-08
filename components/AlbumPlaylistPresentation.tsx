import React from "react";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

interface Playlist {
  id: string;
  name: string;
  owner: { display_name: string };
  images: { url: string }[];
}

interface AlbumPlaylistProps {
  playlists: Playlist[];
}

const AlbumPlaylistPresentation: React.FC<AlbumPlaylistProps> = ({
  playlists,
}) => {
  return (
    <>
      {playlists.map((playlist) => (
        <div
          key={playlist.id}
          className="
        relative 
        group 
        flex 
        flex-col
        items-center 
        rounded-md 
        overflow-hidden 
        min-w-[180px]
        min-h-[180px]
        gap-x-4 
        bg-neutral-100/10 
        cursor-pointer 
        hover:bg-neutral-100/20 
        transition 
        p-4
              "
        >
          <div className="relative min-h-[210px] min-w-[210px] mt-4">
            <Image
              className="object-cover"
              src={playlist.images[0]?.url}
              fill
              alt={playlist.name}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0  group-hover:opacity-100">
            <div className=" bg-green-500  p-4 rounded-full ">
              <FaPlay className="text-black" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AlbumPlaylistPresentation;

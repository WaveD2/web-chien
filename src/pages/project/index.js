import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import AlbumGrid from '../../components/albumCard/albumGrid';
import breakimg from '../../assets/active/break2.jpg';
import chaotan from "../../assets/active/chaotan.jpg";
import contest from "../../assets/active/contest.jpg";

export const ProjectManage = () => {
  const albums = [
    { image: breakimg, title: 'ALBUM THỜI TRANG' },
    { image: chaotan, title: 'ẢNH THỜI TRANG' },
    { image: contest, title: 'ẢNH GIA ĐÌNH' },
  ];

  const handleAddAlbum = () => {
    alert('Tạo album mới!');
  };

  return (
    <div className="app bg-dark p-header">
      <AlbumGrid albums={albums} onAddAlbum={handleAddAlbum} />
    </div>
  );
};


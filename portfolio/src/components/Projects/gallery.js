import './gallery.scss'
import { useState, useEffect } from 'react';

const portfolio = [
    {
      name: "My best client",
      src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/8.jpg?raw=true",
      category: ["all", "frontend", "ux-ui"]
    },
    {
      name: "My favorite case",
      src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/8.jpg?raw=true",
      category: ["all", "mobile", "ux-ui"]
    },
    {
      name: "A old job",
      src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/8.jpg?raw=true",
      category: ["all", "frontend"]
    },
    {
      name: "It is a really cool website",
      src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/8.jpg?raw=true",
      category: ["all", "frontend", "ux-ui"]
    },
    {
      name: "Something more",
      src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/8.jpg?raw=true",
      category: ["all", "others"]
    }
  ];
  
const Gallery = () => {
    const [filter, setFilter] = useState("all");
    const [projects, setProjects] = useState([]);
  
    useEffect(() => {
      setProjects(portfolio);
    }, []);
  
    useEffect(() => {
      setProjects([]);
  
      const filtered = portfolio.map(p => ({
        ...p,
        filtered: p.category.includes(filter)
      }));
      setProjects(filtered);
    }, [filter]);
    return (
      <>
        <div className="portfolio__labels">
          <button active={filter === "all"} onClick={() => setFilter("all")}>
            All
          </button>
          <button
            active={filter === "frontend"}
            onClick={() => setFilter("frontend")}
          >
            Frontend
          </button>
          <button active={filter === "mobile"}
            onClick={() => setFilter("mobile")}>Mobile</button>
          <button
            active={filter === "ux-ui"}
            onClick={() => setFilter("ux-ui")}
          >
            UX/UI
          </button>
          <button
            active={filter === "others"}
            onClick={() => setFilter("others")}
          >
            Others
          </button>
        </div>
        <div className="portfolio__container">
          {projects.map(item =>
            item.filtered === true ? <span key={item.name}><img src={item.src} alt='test'/></span> : ""
          )}
        </div>
      </>
    );
  }
  
export default Gallery
import './filtered.scss'
import React from 'react';

const imgs = [{author:"Pulp Studio", tag:"Web", src:"https://raw.githubusercontent.com/jlopez0499/imgLibrary/master/PULPSTUDIO.jpg"},
              {author:"ELVT Studios", tag:"Mobile", src:"https://raw.githubusercontent.com/jlopez0499/imgLibrary/master/ELVT.jpg"},
              {author:"Virtus Active", tag:"UI/UX", src:"https://raw.githubusercontent.com/jlopez0499/imgLibrary/master/VIRTUS.jpg"},
              {author:"A Couple Scratches Away", tag:"Web", src:"https://raw.githubusercontent.com/jlopez0499/imgLibrary/master/ACSA.jpg"},
              {author:"Page 055 Los Angeles", tag:"Web", src:"https://raw.githubusercontent.com/jlopez0499/imgLibrary/master/PAGE055.jpg"},
               {author:"Jeffrey Czum", tag:"Mobile", src:"https://raw.githubusercontent.com/jlopez0499/imgLibrary/master/PULPSTUDIO.jpg"},
              {author:"Dominika Roseclay", tag:"Mobile", src:"https://raw.githubusercontent.com/jlopez0499/imgLibrary/master/PULPSTUDIO.jpg"},
              {author:"Valeria Boltneva", tag:"Mobile", src:"https://raw.githubusercontent.com/jlopez0499/imgLibrary/master/PULPSTUDIO.jpg"}
];

const filters = [
  {name:"Web", status: false},
  {name:"Mobile", status: false},
  {name:"UI/UX", status: false}
];

const Filters = ({onClickAll, all, onClick, filters}) =>
  <form className='filter-options'>
    <ul className='cards'>
      <li onClick={onClickAll}>
        <input 
          type="checkbox"
          checked={all}
        />
        <label htmlFor="all">All</label>
      </li>
       {filters.map(
        (filter, i)=>
          <li  key={i} data-index={i} onClick={onClick} >
            <input 
              id={filter.name} className='filter-options'
              type="checkbox" 
              checked={filter.status}
            />
            <label htmlFor={filter.name}>{filter.name}</label>
          </li>)}
    </ul>
  </form>

const Cards = ({imgs}) =>
  <ul className='cards'>
    {imgs.map(
      (img, i)=>
      <li  key={i}>
        <figure>
          <img src={img.src} alt={img.author}/>
          <figcaption> 
            <div>{img.author} </div>
          </figcaption>
        </figure>
      </li>)}
  </ul>

class Filtered extends React.Component{
  state ={
    imgs, 
    filters,
    all: true
  };

  setFilter = (e) =>{
    e.preventDefault();
    const { filters, all } = this.state;
    const { index } = e.currentTarget.dataset;
   
    filters[index].status = !filters[index].status;
    this.setState({
      filters
    });
    
    this.updateFilters();
    this.updateImgs();
  }
  
  setAll = () =>{
    const {filters} = this.state;
    
    filters.forEach( 
      filter => {
        filter.status = false;
      }
    );
    
    this.setState({
      all: true,
      filters
    });
  }
  
  updateFilters(){
    const allFiltersTrue = filters.every( filter => filter.status === true);
    const allFiltersFalse = filters.every( filter => filter.status === false);
    
    if(allFiltersTrue||allFiltersFalse){
      this.setAll();
    }else{
      this.setState({
        all: false
      });
    } 
  }
  
  updateImgs() {
    const { filters, all } = this.state;
    let newImgs = [];
    let a = 0;
    
    imgs.forEach((img, imgKey) => { 
      filters.forEach((filter, filterKey)=> {  
        if((img.tag===filter.name)&&(filter.status===true)){
          newImgs[a] = img;
          a++;
        }
      })
    });
        
    this.setState({
      imgs: newImgs
    });
  }

  render(){
    const {filters, all} = this.state;  
    return(
      <div className='gallery'>
        <Filters 
          onClickAll={this.setAll}
          all={all}
          onClick={this.setFilter}
          filters={filters} />
        {(all)?(
            <Cards imgs = {imgs}/>
          ):(
            <Cards imgs = {this.state.imgs}/>
        )}
      </div>
    );
  }
}
export default Filtered
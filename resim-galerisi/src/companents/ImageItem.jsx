function ImageItem({image}) {
  
    
    return ( 
        <>
        <div className="container">
            <div>
                <div className="column">
                    <img className="imagelistimg card" src={image.urls.small} alt={image.alt_description}/>
                    <button className="btn">Fav Ekle</button>
                        

                    
                </div>
            </div>
        </div>
        
        </>
     );
}

export default ImageItem;
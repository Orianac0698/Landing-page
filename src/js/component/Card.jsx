import React from 'react';

const Card = ({ title, content, imageUrl }) => {
  return (
    <div className="card col-md-3 mx-3 mb-4 d-flex flex-column" style={{ maxWidth: '18rem', backgroundColor: 'lightgray', textAlign: 'center', padding: '1rem', height: '100%' }}>
      <div style={{ flex: '1 0 200px', marginBottom: '1rem', overflow: 'hidden' }}>
        <img 
          src={imageUrl} 
          className="card-img-top" 
          alt="Card image cap" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
      <div className="card-body d-flex flex-column justify-content-between" style={{ flexGrow: 1 }}>
        <div style={{ marginBottom: '1rem' }}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text" style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{content}</p>
        </div>
        <a className="btn btn-primary" style={{ width: '100%' }}>Read more</a>
      </div>
    </div>
  );
};


const CardList = () => {
  // Datos de las cartas
  const cardsData = [
    { 
      title: 'Rap', 
      content: 'Rap is a type of music in which the words are not sung but are spoken in a rapid, rhythmic way.',
      imageUrl: 'https://undergroundlab.es/wp-content/uploads/2020/08/rap.jpg'
    },
    { 
      title: 'Hip-hop', 
      content: 'Hip-hop is a form of popular culture which started among young black people in the United States in the 1980s. ',
      imageUrl: 'https://news.lamusica.com/wp-content/uploads/sites/6/2023/08/GettyImages-1409948376.jpg'
    },
    { 
      title: 'Jazz', 
      content: 'A type of modern music originally developed by African-Americans, with a rhythm in which the strong notes often come before the beat.',
      imageUrl: 'https://neomusica.es/blog/wp-content/uploads/2021/07/MU%CC%81SICOS-DEL-JAZZ.jpg'
    },
    { 
      title: 'Reggae', 
      content: 'The musical term reggae first appeared in print in Toots & The Maytals 1968 hit Do the Reggae. Like many other African rhythms, reggae is characterized by a strong syncopated rhythm known as the heartbeat.',
      imageUrl: 'https://image.spreadshirtmedia.net/image-server/v1/compositions/T757A1PA4537PT10X0Y11D178531276W6014H6014/views/3,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true/leon-reggae-cantimplora.jpg'
    }
  ];


  return (
    <div className='container mt-5'>
      <div className='row'>
        {cardsData.map((card, index) => (
          <Card 
            key={index} 
            title={card.title} 
            content={card.content} 
            imageUrl={card.imageUrl} 
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;

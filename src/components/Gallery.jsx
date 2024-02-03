import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const url =
  'https://api.unsplash.com/search/photos?client_id=ACESS_KEY&query=puppy';

const Gallery = () => {
  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });

  console.log(response);

  if (response.isPending) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No Results Found</h4>
      </section>
    );
  }

  return <section className='image-container'>
    {results.map((image) => {
      const url = image?.urls?.regular
      return <img src={url} alt={image.alt_description} key={image.id} className='img' />
    })}
  </section>;
};
export default Gallery;

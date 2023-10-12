import { ComponentType, useEffect, useState } from 'react';
import Spinner from '../components/spinner/Spinner';

export const WhitLoader = <T extends object>(Component: ComponentType<T>, fetchDataFromApi: (url: string) => Promise<any>, url:string) => {
  const LoaderComponent = (props: T) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetchDataFromApi(url).then((data) => setData(data));
    }, [])
    

    if (!data) return <Spinner />
    
    return <Component {...props} data={data} />
  
  };

  return LoaderComponent;
}
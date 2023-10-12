// Un HOC es un componente que recibe un componente y devuelve otro componente con alguna funcionalidad extra

import { ComponentType } from 'react';

export const WhitColorSwap = <T extends object>(Component:ComponentType<T>) => {
  return (props: T) => {
    return (
      <div className='color-swap'>
        <Component {...props} />
      </div>
      )
  }
}
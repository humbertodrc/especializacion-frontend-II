import {rest} from 'msw'
import { URL_BASE } from '../api/urlApi'
import { allResults, results } from './dataMock';

export const handlers = [
  // Primera peticion para obtener todos
  rest.get(URL_BASE, (req, res, ctx) => {
    const nameParam = req.url.searchParams.get('name')
    console.log("Ejecutando desde MSW", nameParam);

    if (nameParam) {
      return res(
        ctx.status(200),
        ctx.json({
          results: results
        })
      )
    }

    return res(
      ctx.status(200),
      ctx.json({
        results: allResults
      })
    )
  })
]
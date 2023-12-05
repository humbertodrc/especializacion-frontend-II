import {rest} from 'msw'

export const handlers = [
  rest.get('https://randomuser.me/api/', (req, res, ctx) => {
    console.log("Desde MSW");
    return res(
      ctx.status(200),
      ctx.json({
        results: [
					{
						name: {first: "Steve", last: "Jobs"},

						email: "steve@jobs.com",

						picture: {
							large: "https://randomuser.me/api/portraits/men/68.jpg",
						},
					},
				],
      })
    )
  }),

]
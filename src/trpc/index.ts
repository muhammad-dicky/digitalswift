import { publicProcedure, router } from "./trpc";




export const appRouter = router({
    anyApiRoute: publicProcedure.query(() => {
        return 'hello cuy'
    }),
})

export type AppRouter = typeof appRouter
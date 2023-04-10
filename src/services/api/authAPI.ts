import {api} from "./_api";

const authApi = api.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (body) => ({
                url: 'Login',
                method: 'POST',
                body: body,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        })
    })
})

export const {useLoginMutation} = authApi
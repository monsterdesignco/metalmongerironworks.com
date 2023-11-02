import { Actions } from '@sveltejs/kit';

export const actions: Actions = {
    manageFile: async ({ request }) => {
        console.log(await request.formData());
    }
}
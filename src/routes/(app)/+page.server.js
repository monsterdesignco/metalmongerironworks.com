export const actions= {
    manageFile: async ({ request }) => {
        console.log(await request.formData());
    }
}
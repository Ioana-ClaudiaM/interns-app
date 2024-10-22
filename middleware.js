export const meMiddleware = async () => {
    await me();
    return redirect('/')
}

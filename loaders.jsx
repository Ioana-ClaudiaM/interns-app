import { authenticate } from "./src/api";

export const authenticateLoader = async () => {
    await authenticate();
    return redirect('/')
}


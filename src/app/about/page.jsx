import { getData } from "../actions/GetDataJson";

export default async function Home() {
    const result = await getData();
    return (
        <main className="flex flex-col min-h-screen p-24">
            <h1>{result.message}</h1>
        </main>
    );
}

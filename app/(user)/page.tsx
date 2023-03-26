import { previewData } from "next/headers";

export default function HomePage() {
    if (previewData()) {
        return <div>Preview Mode</div>;
    }
    return (
        <div>
           <h1>Not in Preview mode</h1>
        </div>
    )
}
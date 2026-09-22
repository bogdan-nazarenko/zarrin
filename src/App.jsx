import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import Header from "@ui/layout/Header";
const Home = lazy(() => import("@ui/pages/Home"));
import Footer from "@ui/layout/Footer";

const App = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Suspense fallback={""}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </>
    );
};

export default App;

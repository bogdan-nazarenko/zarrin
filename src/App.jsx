import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import Header from "@ui/layout/Header";
import Loading from "@ui/components/Loading";
const Home = lazy(() => import("@ui/pages/Home"));
const Blog = lazy(() => import("@ui/pages/Blog"));
const Error = lazy(() => import("@ui/pages/Error"));
import Newsletter from "@ui/sections/Newsletter";
import Footer from "@ui/layout/Footer";

const App = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog">
                            <Route index element={<Blog />} />
                        </Route>
                        <Route path="*" element={<Error />} />
                    </Routes>

                    <Newsletter />
                </Suspense>
            </main>
            <Footer />
        </>
    );
};

export default App;

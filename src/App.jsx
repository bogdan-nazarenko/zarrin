import { useEffect, lazy, Suspense } from "react";
import { useLocation, Routes, Route } from "react-router";
import Header from "@ui/layout/Header";
import Loading from "@ui/components/Loading";
const Home = lazy(() => import("@ui/pages/Home"));
const Blog = lazy(() => import("@ui/pages/Blog"));
const Posts = lazy(() => import("@ui/pages/Posts"));
const About = lazy(() => import("@ui/pages/About"));
const Contact = lazy(() => import("@ui/pages/Contact"));
const Error = lazy(() => import("@ui/pages/Error"));
import Newsletter from "@ui/sections/Newsletter";
import Footer from "@ui/layout/Footer";

const App = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const windowHash = window.location.hash;

        window.scrollTo(0, 0);

        if (!windowHash) return;

        const id = windowHash.slice(1);

        const scrollingToTarget = setInterval(() => {
            const target = document.getElementById(id);

            if (!target) return;

            clearInterval(scrollingToTarget);
            clearTimeout(stopAfterDelay);
            target.scrollIntoView({ behavior: "smooth" });
        }, 100);

        const stopAfterDelay = setTimeout(() => {
            clearInterval(scrollingToTarget);
        }, 3000);

        return () => {
            clearInterval(scrollingToTarget);
            clearTimeout(stopAfterDelay);
        };
    }, [pathname]);

    return (
        <>
            <Header />
            <main className="main">
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog">
                            <Route index element={<Blog />} />
                            <Route path="posts/:id" element={<Posts />} />
                        </Route>
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
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

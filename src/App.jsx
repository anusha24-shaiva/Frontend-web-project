import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {

    return (
        <>
            <Header />

            <main>

                <h1>React Components Practice</h1>

                <section>

                    <Card
                        title="Portfolio Website"
                        description="A responsive personal portfolio website."
                        technology="HTML & CSS"
                    />

                    <Card
                        title="Sales Analysis"
                        description="Analysis of business sales data."
                        technology="Excel"
                    />

                    <Card
                        title="React Blog"
                        description="A blog interface built using React."
                        technology="React"
                    />

                </section>

                <Button text="Click Me" />

                <h2>Contact Form</h2>

                <Form />

            </main>

            <Footer />
        </>
    );
}

export default App;
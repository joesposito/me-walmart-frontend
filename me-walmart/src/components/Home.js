import Header from './Header';
import ItemSearch from './ProductSearchBar';
import Dashboard from './Dashboard';
import Footer from './Footer';

function Home(){
    return (
        <div>
            <Header></Header>
            <ItemSearch></ItemSearch>
            <Dashboard></Dashboard>
            <Footer></Footer>
        </div>
    );
}

export default Home;